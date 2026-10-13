import { request } from '../client.mjs'
import { ENDPOINTS } from '../endpoints.mjs'
export const submitContact = (data, options) => request(ENDPOINTS.contact, { ...options, data })
