const WHEEL_IDLE_MS = 220
const WHEEL_THRESHOLD = 32
const TOUCH_THRESHOLD = 50

// One slide change per gesture, so momentum cannot skip slides.
// Past the last slide, or back at the top of the page, that same gesture
// keeps going instead of waiting for a new click.
export function createLandingNavigation({ getIndex, setIndex, lastIndex, getScrollTop,
    now = () => performance.now(), getLockMs = () => 780, scrollBy = () => {} }) {
    let lockedUntil = 0
    let wheel = null
    let touch = null
    const atTop = () => getScrollTop() <= 1
    const locked = () => now() < lockedUntil
    const changeSlide = (index) => {
        const next = Math.max(0, Math.min(lastIndex, index))
        if (next === getIndex() || locked()) return false
        lockedUntil = now() + getLockMs()
        setIndex(next)
        return true
    }

    return {
        select: changeSlide,
        wheel(event, pageHeight) {
            if (event.ctrlKey || !event.deltaY || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return
            const time = now()
            const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? pageHeight : 1)
            if (!wheel || time - wheel.time > WHEEL_IDLE_MS) {
                wheel = { time, total: 0, consumed: locked(), driving: false, delta: 0,
                    native: !atTop() || (getIndex() === lastIndex && delta > 0 && !locked()) }
            }

            // This gesture already left the slider. Keep moving the page with it,
            // including back up, until it reaches the top and asks for the slides.
            if (wheel.driving) {
                const backIntoSlides = atTop() && delta < 0 && !locked() && Math.abs(delta) >= WHEEL_THRESHOLD
                if (!backIntoSlides) {
                    wheel.time = time
                    wheel.delta = delta
                    event.preventDefault()
                    scrollBy(delta)
                    return
                }
                wheel.driving = false
                wheel.native = false
                wheel.consumed = false
                wheel.total = 0
            }

            // A page scroll that arrives at the top should keep moving the slides.
            if (wheel.native && atTop() && delta < 0 && !locked() && Math.abs(delta) >= WHEEL_THRESHOLD) {
                wheel.native = false
                wheel.consumed = false
                wheel.total = 0
            }

            // Repeated wheel ticks (or a renewed trackpad push) must not stay
            // locked forever just because events arrive less than 220ms apart.
            // Keep decaying momentum owned by the previous slide.
            const renewed = wheel.consumed && !wheel.native && !locked() &&
                Math.abs(delta) >= WHEEL_THRESHOLD &&
                (Math.sign(delta) !== Math.sign(wheel.delta) || Math.abs(delta) >= Math.abs(wheel.delta))
            if (renewed && atTop() && getIndex() === lastIndex && delta > 0) {
                wheel.driving = true
                wheel.time = time
                wheel.delta = delta
                event.preventDefault()
                scrollBy(delta)
                return
            }
            if (renewed) {
                wheel.total = 0
                wheel.consumed = false
            }
            wheel.time = time
            wheel.delta = delta
            if (wheel.native) return
            event.preventDefault()
            if (wheel.consumed) return
            wheel.total += delta
            if (Math.abs(wheel.total) < WHEEL_THRESHOLD) return
            wheel.consumed = true
            changeSlide(getIndex() + Math.sign(wheel.total))
        },
        touchStart(event, horizontal = false, onSlider = true) {
            if (event.touches.length !== 1) {
                touch = null
                return
            }
            const point = event.touches[0]
            touch = { x: point.clientX, y: point.clientY, lastY: point.clientY, horizontal,
                native: !atTop() || !onSlider, owned: false, consumed: locked(),
                driving: false, handed: false }
        },
        touchMove(event) {
            if (!touch || event.touches.length !== 1) return false
            const point = event.touches[0]
            const dx = touch.x - point.clientX
            const dy = touch.y - point.clientY

            if (touch.driving) {
                const step = touch.lastY - point.clientY
                touch.lastY = point.clientY
                if (step > 0 || (step < 0 && !atTop())) {
                    scrollBy(step)
                    return false
                }
                if (atTop() && step < -TOUCH_THRESHOLD && !locked()) {
                    touch.driving = false
                    touch.native = false
                    touch.owned = true
                    touch.consumed = false
                    touch.axis = 'y'
                    touch.x = point.clientX
                    touch.y = point.clientY
                } else {
                    return false
                }
            }

            if (touch.native) {
                if (atTop() && dy <= -TOUCH_THRESHOLD && !locked() && !touch.handed) {
                    touch.handed = true
                    touch.consumed = true
                    changeSlide(getIndex() - 1)
                }
                return false
            }

            if (!touch.owned) {
                if (Math.max(Math.abs(dx), Math.abs(dy)) < 3) return false
                touch.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
                const delta = touch.axis === 'x' ? dx : dy
                if ((touch.axis === 'x' && !touch.horizontal) ||
                    (touch.axis === 'y' && getIndex() === lastIndex && delta > 0 && !touch.consumed)) {
                    touch.native = true
                    return false
                }
                touch.owned = true
            }
            event.preventDefault()
            const delta = touch.axis === 'x' ? dx : dy
            if (touch.axis === 'y' && getIndex() === lastIndex && delta > 0 && touch.consumed && !locked()) {
                touch.driving = true
                touch.lastY = point.clientY
                return true
            }
            if (touch.consumed || Math.abs(delta) < TOUCH_THRESHOLD) return true
            touch.consumed = true
            changeSlide(getIndex() + Math.sign(delta))
            if (touch.axis === 'y' && delta > 0 && getIndex() === lastIndex) {
                touch.driving = true
                touch.lastY = point.clientY
            }
            return true
        },
        touchEnd() { touch = null },
    }
}
