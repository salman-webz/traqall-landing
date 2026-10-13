import test from 'node:test'
import assert from 'node:assert/strict'
import { request } from '../api/client.mjs'
import { contactPayload, quotationPayload, validatePayload } from '../api/formPayloads.mjs'

test('actual fields map to separate contracts and validate', () => {
 const data = new FormData()
 for (const [k,v] of Object.entries({ username:' Jane ', form_email:'jane@example.com', phone:'+1 (234) 567-8900', message:' Hello ', date:'2026-11-01', location:'Pakistan' })) data.set(k,v)
 assert.deepEqual(contactPayload(data),{name:'Jane',email:'jane@example.com',phone:'+1 (234) 567-8900',message:'Hello'})
 assert.deepEqual(quotationPayload(data),{name:'Jane',email:'jane@example.com',inspectionDate:'2026-11-01',location:'Pakistan'})
 assert.deepEqual(validatePayload(contactPayload(data)),{})
 assert.equal(Object.keys(validatePayload({name:' ',email:'invalid',phone:'abc'})).length,3)
 assert.ok(validatePayload({name:'',email:'invalid',phone:''}).name)
})
test('client response and failure handling', async t => {
 const original=globalThis.fetch
 t.after(()=>{globalThis.fetch=original})
 const options={baseURL:'https://example.test/api',data:{name:'Jane'}}
 let count=0
 globalThis.fetch=async(url,init)=>{count++;assert.equal(String(url),'https://example.test/api/contact');assert.equal(init.body,'{"name":"Jane"}');return new Response('{"id":1}',{status:201})}
 assert.deepEqual(await request('/contact',options),{id:1});assert.equal(count,1)
 globalThis.fetch=async()=>new Response(null,{status:204})
 assert.equal(await request('/contact',options),null)
 globalThis.fetch=async()=>new Response('{"message":"Invalid","errors":{"email":["Already submitted"]}}',{status:422})
 await assert.rejects(request('/contact',options),e=>e.status===422&&e.fields.email[0]==='Already submitted')
 globalThis.fetch=async()=>new Response('Oops',{status:500})
 await assert.rejects(request('/contact',options),e=>e.status===500)
 globalThis.fetch=async()=>new Response('<html>Error</html>',{status:200})
 await assert.rejects(request('/contact',options),e=>e.code==='INVALID_RESPONSE')
 globalThis.fetch=async()=>new Response('{"success":false}',{status:200})
 await assert.rejects(request('/contact',options))
 globalThis.fetch=async()=>{throw new TypeError('offline')}
 await assert.rejects(request('/contact',options),e=>e.code==='NETWORK')
 await assert.rejects(request('/contact',{...options,baseURL:''}),e=>e.code==='CONFIGURATION')
 globalThis.fetch=(_url,{signal})=>new Promise((_,reject)=>{if(signal.aborted)reject(new Error('abort'));else signal.addEventListener('abort',()=>reject(new Error('abort')))})
 await assert.rejects(request('/contact',{...options,timeout:5}),e=>e.code==='TIMEOUT')
 const controller=new AbortController();controller.abort()
 await assert.rejects(request('/contact',{...options,signal:controller.signal}),e=>e.code==='CANCELLED')
})
