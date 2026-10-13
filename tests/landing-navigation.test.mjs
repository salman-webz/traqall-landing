import test from 'node:test'
import assert from 'node:assert/strict'
import { createLandingNavigation } from '../lib/landing-navigation.mjs'

function setup(index = 0) {
    const state = { index, scroll: 0, time: 0, changes: [] }
    const navigation = createLandingNavigation({
        getIndex: () => state.index,
        setIndex: (index) => { state.index = index; state.changes.push(index) },
        lastIndex: 5,
        getScrollTop: () => state.scroll,
        now: () => state.time,
        scrollBy: (delta) => { state.scroll = Math.max(0, state.scroll + delta) },
    })
    const wheel = (deltaY, options = {}) => {
        let prevented = false
        navigation.wheel({ deltaY, deltaX: 0, deltaMode: 0, ...options,
            preventDefault() { prevented = true } }, 900)
        return prevented
    }
    const start = (horizontal = false) => navigation.touchStart({ touches: [{ clientX: 200, clientY: 200 }] }, horizontal)
    const move = (y, x = 200) => {
        let prevented = false
        navigation.touchMove({ touches: [{ clientX: x, clientY: y }],
            preventDefault() { prevented = true } })
        return prevented
    }
    return { state, navigation, wheel, start, move }
}

test('second-to-last advances to last, absorbs long momentum, then releases a fresh gesture', () => {
    const { state, wheel } = setup(4)
    assert.equal(wheel(50), true)
    assert.equal(state.index, 5)
    for (state.time = 100; state.time <= 2000; state.time += 100) assert.equal(wheel(4), true)
    assert.deepEqual(state.changes, [5])
    state.time += 300
    assert.equal(wheel(50), false)
})

test('scrolling up onto the top continues into the previous slide', () => {
    const { state, wheel } = setup(5)
    state.scroll = 600
    assert.equal(wheel(-80), false)
    state.scroll = 0
    state.time = 100
    assert.equal(wheel(-80), true)
    assert.equal(state.index, 4)
    state.time = 200
    assert.equal(wheel(-80), true)
    assert.equal(state.index, 4)
    state.time = 1200
    assert.equal(wheel(-80), true)
    assert.equal(state.index, 3)
})

test('small trackpad deltas accumulate and wheel delta modes are normalized', () => {
    const { state, wheel } = setup()
    for (let i = 0; i < 4; i++) { state.time += 20; assert.equal(wheel(8), true) }
    assert.equal(state.index, 1)
    state.time = 1000
    wheel(2, { deltaMode: 1 })
    assert.equal(state.index, 2)
    state.time = 2000
    wheel(1, { deltaMode: 2 })
    assert.equal(state.index, 3)
})

test('no looping at either end, horizontal scrolling and pinch zoom remain native', () => {
    const { state, wheel } = setup()
    wheel(-100)
    assert.equal(state.index, 0)
    state.time = 1000
    assert.equal(wheel(100, { ctrlKey: true }), false)
    assert.equal(wheel(20, { deltaX: 100 }), false)
    assert.equal(state.index, 0)
})

test('a new gesture during an animation is consumed rather than released mid-gesture', () => {
    const { state, wheel } = setup(4)
    wheel(60)
    state.time = 300
    assert.equal(wheel(60), true)
    for (state.time = 400; state.time < 1500; state.time += 100) assert.equal(wheel(10), true)
    assert.deepEqual(state.changes, [5])
})

test('one touch swipe advances to the last slide and that gesture scrolls the page', () => {
    const { state, navigation, start, move } = setup(4)
    start()
    assert.equal(move(190), true)
    assert.equal(move(100), true)
    assert.equal(state.index, 5)
    assert.equal(move(40), false)
    assert.ok(state.scroll > 0)
    assert.deepEqual(state.changes, [5])
    navigation.touchEnd()
    state.scroll = 0
    state.time = 1000
    start()
    assert.equal(move(100), false)
    assert.equal(state.index, 5)
})

test('a touch that returns to the top continues into the previous slide', () => {
    const { state, navigation, start, move } = setup(5)
    state.scroll = 100
    start()
    assert.equal(move(250), false)
    assert.equal(state.index, 5)
    state.scroll = 0
    assert.equal(move(360), false)
    assert.equal(state.index, 4)
    assert.equal(move(500), false)
    assert.equal(state.index, 4)
    navigation.touchEnd()
    state.time = 1000
    start()
    assert.equal(move(260), true)
    assert.equal(state.index, 3)
})

test('scrolling back up from the page returns to the previous slide', () => {
    const { state, wheel } = setup(4)
    assert.equal(wheel(50), true)
    for (state.time = 100; state.time <= 700; state.time += 100) wheel(4)
    state.time = 800
    assert.equal(wheel(80), true)
    assert.equal(state.scroll, 80)
    state.time = 900
    assert.equal(wheel(-80), true)
    assert.equal(state.scroll, 0)
    assert.equal(state.index, 5)
    state.time = 1000
    assert.equal(wheel(-80), true)
    assert.equal(state.index, 4)
})

test('a continued push on the last slide scrolls the page without a new gesture', () => {
    const { state, wheel } = setup(4)
    assert.equal(wheel(50), true)
    assert.equal(state.index, 5)
    for (state.time = 100; state.time <= 700; state.time += 100) assert.equal(wheel(4), true)
    assert.equal(state.scroll, 0)
    state.time = 800
    assert.equal(wheel(50), true)
    assert.equal(state.scroll, 50)
    state.time = 900
    assert.equal(wheel(30), true)
    assert.equal(state.scroll, 80)
})

test('mobile horizontal swipes use the same one-change ownership and do not double advance', () => {
    const { state, start, move } = setup(2)
    start(true)
    assert.equal(move(200, 100), true)
    state.time = 1000
    assert.equal(move(200, 0), true)
    assert.deepEqual(state.changes, [3])
})

test('touch cancellation and multitouch do not leave a gesture captured', () => {
    const { state, navigation, start, move } = setup(2)
    start()
    navigation.touchEnd()
    assert.equal(move(0), false)
    navigation.touchStart({ touches: [{ clientX: 0, clientY: 0 }, { clientX: 100, clientY: 100 }] })
    assert.equal(move(0), false)
    assert.equal(state.index, 2)
})

test('continuous wheel ticks keep advancing without a click or an idle pause', () => {
    const { state, wheel } = setup()
    for (state.time = 0; state.time <= 1700; state.time += 100) wheel(80)
    assert.deepEqual(state.changes, [1, 2, 3])
})

test('a renewed push or reversal works after momentum without losing gesture ownership', () => {
    const { state, wheel } = setup(2)
    wheel(80)
    for (state.time = 100; state.time <= 900; state.time += 100) wheel(4)
    wheel(-80)
    assert.deepEqual(state.changes, [3, 2])
})

test('decaying large trackpad momentum does not skip slides', () => {
    const { state, wheel } = setup()
    for (let i = 0; i < 15; i++) {
        state.time = i * 100
        wheel(120 - i * 5)
    }
    assert.deepEqual(state.changes, [1])
})
