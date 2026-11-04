/* Browser regression audit. Install Playwright outside the app or as a dev tool,
   then run PLAYWRIGHT_MODULE=/path/to/playwright node scripts/check-responsive.cjs.
   Start the production server first; BASE_URL defaults to http://localhost:3000.
   All write requests are mocked: this audit never sends real contact submissions. */
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const playwright = require(process.env.PLAYWRIGHT_MODULE || 'playwright')
const base = process.env.BASE_URL || 'http://localhost:3000'
const output = process.env.AUDIT_OUTPUT || '/tmp/traqall-responsive-results'
const browserName = process.env.BROWSER || 'chromium'
const routes = fs.readdirSync(path.join(process.cwd(), 'app'), { withFileTypes: true })
    .filter(entry => entry.isDirectory() && fs.existsSync(path.join('app', entry.name, 'page.js')))
    .map(entry => `/${entry.name}`)
routes.unshift('/')
routes.push('/responsive-audit-not-found')
const sizes = [[1280,600],[1200,701],[320,568],[375,667],[390,844],[430,932],[667,375],[768,1024],[820,1180],[1024,768],[1280,800],[1440,900],[1920,1080], ...[575,576,767,768,991,992,1199,1200].map(w=>[w,900])]

;(async () => {
    fs.mkdirSync(output, { recursive: true })
    const browser = await playwright[browserName].launch({ headless: true,
        ...(process.env.BROWSER_EXECUTABLE ? { executablePath: process.env.BROWSER_EXECUTABLE } : {}) })
    const context = await browser.newContext({ reducedMotion: 'reduce' })
    await context.route('**/api/**', route => route.fulfill({ status: 200,
        contentType: 'application/json', headers: { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'POST, OPTIONS', 'access-control-allow-headers': 'content-type' },
        body: JSON.stringify({ success: true, message: 'Audit submission received.' }) }))
    await context.route(/youtube|doubleclick/, route => route.abort())
    const page = await context.newPage()
    const errors = []
    const consoleErrors = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => {
        if (message.type() !== 'error') return
        consoleErrors.push({ text: message.text(), url: message.location().url })
        if (/hydration|hydrated|Minified React error/i.test(message.text())) errors.push(message.text())
    })
    const measurements = []
    async function open(route, width, height) {
        await page.setViewportSize({ width, height })
        await page.goto(base + route, { waitUntil: 'domcontentloaded' })
        await page.locator('.traqall-mobile-nav').waitFor({ state: 'attached' })
        await page.evaluate(() => document.fonts.ready)
        await page.waitForLoadState('networkidle')
    }
    async function measure(route, width, height) {
        const result = await page.evaluate(() => ({
            overflow: document.documentElement.scrollWidth - innerWidth,
            clippedText: [...document.querySelectorAll('h1,h2,h3,p')].filter(e => {
                const r = e.getBoundingClientRect()
                if (!r.width || !r.height || e.closest('[aria-hidden="true"],.swiper-wrapper')) return false
                return e.scrollWidth > e.clientWidth + 2 && getComputedStyle(e).overflowX === 'hidden'
            }).map(e => e.className),
        }))
        measurements.push({ route, width, height, ...result })
        if (result.overflow > 1) console.log('OVERFLOW', route, width, height, result.overflow)
    }
    try {
        for (const [width,height] of ((process.env.INTERACTIONS_ONLY || process.env.SKIP_ROUTES) ? [] : [[320,568],[820,1180],[1440,900]])) {
            for (const route of routes) {
                await open(route,width,height)
                await measure(route,width,height)
            }
        }
        console.log(`${browserName}: ${measurements.length} route layout checks complete; checking interactions`)
        for (const [width,height] of (process.env.INTERACTIONS_ONLY ? [] : sizes)) {
            console.log('Interactions', width, height)
            await open('/',width,height)
            await measure('/',width,height)
            const compact = await page.evaluate(() => matchMedia('(max-width: 1199px), (max-height: 700px)').matches)
            const nav = compact ? '.module-fullscreen__mobile-nav' : '.module-fullscreen__labels'
            if (compact) assert.equal(await page.locator(`${nav} button`).evaluateAll(buttons => new Set(buttons.map(button => Math.round(button.getBoundingClientRect().top))).size), 1, 'Slide controls should form one horizontal row')
            for (const index of [1,3,6,0]) {
                await page.locator(`${nav} button`).nth(index).click()
                await page.waitForTimeout(130)
                assert.equal(await page.locator('.module-fullscreen__panel.is-active').getAttribute('aria-hidden'), 'false')
                assert.equal(await page.locator(`${nav} button`).nth(index).getAttribute('aria-current'), 'true')
                await measure(`/#slide-${index}`,width,height)
            }
            if (await page.evaluate(() => matchMedia('(max-width: 1199px)').matches)) {
                await page.evaluate(() => scrollTo(0,0))
                await page.getByRole('button',{name:'Open menu',exact:true}).first().click()
                const drawer = page.getByRole('dialog',{name:'Mobile navigation'})
                await drawer.getByRole('button',{name:'Expand Solutions submenu'}).click()
                await drawer.getByRole('link',{name:'Issues',exact:true}).waitFor({state:'visible'})
                await drawer.getByRole('link',{name:'TraqAll home'}).focus()
                await page.keyboard.press('Shift+Tab')
                assert(await drawer.evaluate(e=>e.contains(document.activeElement)))
                await page.keyboard.press('Tab')
                assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('aria-label')),'TraqAll home')
                await page.keyboard.press('Escape')
                assert.equal(await page.evaluate(() => document.activeElement.getAttribute('aria-label')), 'Open menu')
                assert.equal(await page.locator('body').evaluate(e=>e.classList.contains('mobile-menu-visible')),false)
                await page.getByRole('button',{name:'Open menu',exact:true}).first().click()
                await page.setViewportSize({width:1280,height:800})
                await page.waitForFunction(() => !document.body.classList.contains('mobile-menu-visible'))
                assert.equal(await page.locator('body').evaluate(e=>e.classList.contains('mobile-menu-visible')),false)
            }
        }
        for (const [width,height] of [[390,844],[820,1180],[1440,900]]) {
            await open('/',width,height)
            const navigation = width < 1200 ? '.module-fullscreen__mobile-nav' : '.module-fullscreen__labels'
            for (let index=0; index<7; index++) {
                await page.locator(`${navigation} button`).nth(index).click()
                await page.waitForTimeout(130)
                assert.equal(await page.locator(`${navigation} button`).nth(index).getAttribute('aria-current'),'true')
                await measure(`/#all-slides-${index}`,width,height)
            }
        }
        await open('/',1280,800)
        await page.locator('.home-landing__slider').focus()
        await page.keyboard.press('ArrowRight')
        await page.waitForTimeout(130)
        assert.equal(await page.locator('.module-fullscreen__labels button').nth(1).getAttribute('aria-current'),'true')
        await page.mouse.move(300,300)
        await page.mouse.wheel(0,80)
        await page.waitForTimeout(150)
        assert.equal(await page.locator('.module-fullscreen__labels button').nth(2).getAttribute('aria-current'),'true')
        await page.locator('.module-fullscreen__labels button').nth(6).click()
        await page.waitForTimeout(250)
        await page.mouse.wheel(0,600)
        await page.waitForTimeout(200)
        assert(await page.evaluate(() => scrollY>0),'The last slide must release page scrolling')
        await open('/',1280,800)
        const toggle = page.locator('.main-header-one .solutions-menu-toggle')
        await toggle.focus()
        await page.keyboard.press('Enter')
        assert.equal(await toggle.getAttribute('aria-expanded'),'true')
        await page.locator('.main-header-one .solutions-mega').waitFor({state:'visible'})
        await page.keyboard.press('Escape')
        assert.equal(await toggle.getAttribute('aria-expanded'),'false')
        await page.getByRole('button',{name:'Play TraqAll overview video'}).click()
        await page.locator('.modal-video').waitFor({state:'visible'})
        await page.keyboard.press('Escape')
        await page.locator('.modal-video').waitFor({state:'detached'})
        await page.getByRole('button',{name:'Step 5: Record Daily Work'}).click()
        assert(await page.locator('.working-process-one .active-tab').getByText('Record Daily Work',{exact:true}).isVisible())
        const swiper = page.locator('.services-one__carousel')
        const before = await swiper.evaluate(e=>e.swiper.realIndex)
        await swiper.evaluate(e=>e.swiper.slideNext(0))
        assert.notEqual(await swiper.evaluate(e=>e.swiper.realIndex),before)
        await open('/contact',390,844)
        await page.getByRole('button',{name:'submit now',exact:true}).click()
        assert.equal(await page.locator('form').last().evaluate(e=>e.checkValidity()),false)
        // Browser-level reflow equivalent to a 1280px window at 200% zoom.
        await open('/pricing',640,400)
        await measure('/pricing#200-percent-reflow',640,400)
        await open('/',390,844)
        await page.getByRole('button',{name:'Open menu',exact:true}).first().click()
        await page.locator('.traqall-mobile-nav__overlay').click({position:{x:382,y:20}})
        assert.equal(await page.locator('body').evaluate(e=>e.classList.contains('mobile-menu-visible')),false)
        await page.getByRole('button',{name:'Open menu',exact:true}).first().click()
        await page.getByRole('dialog',{name:'Mobile navigation'}).getByRole('link',{name:'Pricing',exact:true}).click()
        await page.waitForURL('**/pricing')
        await page.waitForTimeout(100)
        assert.equal(await page.locator('body').evaluate(e=>e.classList.contains('mobile-menu-visible')),false)
        await open('/pricing',320,568)
        const table = page.locator('.traqall-pricing__comparison')
        assert.equal(await table.isVisible(), false)
        const mobileComparison = page.getByRole('region', {name:'Compare all features', exact:true})
        assert(await mobileComparison.isVisible())
        assert(await mobileComparison.evaluate(e => e.scrollWidth <= e.clientWidth))
        assert.equal(await mobileComparison.locator('dl').count(),4)
        assert.equal(await mobileComparison.locator('li').count(),10)
        await open('/terms-and-conditions',390,844)
        await page.getByRole('navigation',{name:'On this page'}).getByRole('link').last().click()
        await page.waitForTimeout(200)
        assert(await page.locator('#term-15').evaluate(e=>e.getBoundingClientRect().top>=0))
        assert.equal(await page.locator('article section').count(),15)
        await open('/faq',390,844)
        const search=page.locator('.faq-hub__search-wrap input')
        await search.fill('unfindable-audit-query')
        assert(await page.getByText('No results found',{exact:true}).isVisible())
        await page.getByRole('button',{name:'Clear search',exact:true}).first().click()
        await page.locator('.faq-hub__card-trigger').first().click()
        assert.equal(await page.locator('.faq-hub__card-trigger').first().getAttribute('aria-expanded'),'true')
        await open('/contact',390,844)
        await page.getByRole('textbox',{name:'Your Name',exact:true}).fill('Responsive Audit')
        await page.getByRole('textbox',{name:'Email Address',exact:true}).fill('audit@example.com')
        await page.getByRole('textbox',{name:'Phone Number',exact:true}).fill('6463427488')
        await page.getByRole('textbox',{name:'Your Message',exact:true}).fill('Mocked responsive audit. No real message sent.')
        await page.getByRole('button',{name:'submit now',exact:true}).click()
        await page.getByText('Audit submission received.',{exact:true}).waitFor({state:'visible'})
        assert.match(await page.locator('.submission-feedback').textContent(), /Audit submission received/)
        if (browserName === 'chromium') {
            const touchContext = await browser.newContext({ hasTouch: true, isMobile: true, viewport: {width:390,height:844}, reducedMotion:'reduce' })
            const touchPage = await touchContext.newPage()
            await touchPage.goto(base, {waitUntil:'domcontentloaded'})
            await touchPage.locator('.traqall-mobile-nav').waitFor({state:'attached'})
            const cdp = await touchContext.newCDPSession(touchPage)
            await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:320,y:300}]})
            await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:100,y:300}]})
            await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]})
            await touchPage.waitForTimeout(150)
            assert.equal(await touchPage.locator('.module-fullscreen__mobile-nav button').nth(1).getAttribute('aria-current'),'true')
            await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:180,y:650}]})
            for (const y of [600,500,400,300]) await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:180,y}]})
            await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]})
            await touchPage.waitForTimeout(200)
            assert(await touchPage.evaluate(()=>scrollY>0),'Vertical touch scrolling must reach the page')
            await touchPage.setViewportSize({width:844,height:390})
            assert.equal(await touchPage.locator('.module-fullscreen__mobile-nav button').nth(1).getAttribute('aria-current'),'true')
            await touchContext.close()
        }
        for (const route of (process.env.SKIP_SCREENSHOTS ? [] : ['/','/pricing','/contact','/terms-and-conditions'])) {
            for (const [width,height] of [[390,844],[820,1180],[1440,900]]) {
                await open(route,width,height)
                // Trigger lazy media before inspecting the entire page.
                const documentHeight = await page.evaluate(() => document.documentElement.scrollHeight)
                for (let y = 0; y < documentHeight; y += page.viewportSize().height) {
                    await page.evaluate(top => scrollTo(0,top),y)
                    await page.waitForTimeout(50)
                }
                await page.waitForLoadState('networkidle')
                await page.evaluate(() => scrollTo(0,0))
                await page.screenshot({path:path.join(output,`${browserName}-${route.slice(1)||'home'}-${width}.png`),fullPage:true,animations:'disabled'})
            }
        }
        await page.emulateMedia({ reducedMotion: 'no-preference' })
        await open('/',390,844)
        await page.locator('.count-text').last().scrollIntoViewIfNeeded()
        await page.waitForFunction(() => [...document.querySelectorAll('.count-text')].map(e=>e.textContent).join(',') === '5,6,4,1')
        assert.deepEqual(await page.locator('.count-text').allTextContents(), ['5','6','4','1'])
        assert.equal(errors.length,0,JSON.stringify(errors))
        assert.equal(measurements.filter(x=>x.overflow>1).length,0,'Document overflow found')
        console.log(`${browserName}: ${measurements.length} layout checks and interactive checks passed`)
    } finally {
        fs.writeFileSync(path.join(output,`${browserName}-results.json`),JSON.stringify({measurements,errors,consoleErrors},null,2))
        await browser.close()
    }
})().catch(error=>{ console.error(error);process.exitCode=1 })
