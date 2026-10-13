'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import ModalVideo from 'react-modal-video'
import ModuleFullscreenSlider from '@/components/sections/home1/ModuleFullscreenSlider'
import About from '@/components/sections/home1/About'
import { createLandingNavigation } from '@/lib/landing-navigation.mjs'

const LAST_SLIDE_INDEX = 5
const MOBILE_MAX_WIDTH = 767
const DEFAULT_HEADER_OFFSET = 100

function syncSiteHeaderHeight() {
    document.documentElement.style.setProperty('--home-landing-header-height',
        `${document.querySelector('.main-header-one')?.getBoundingClientRect().height ?? 0}px`)
    document.documentElement.style.setProperty(
        '--site-header-height',
        `${getHeaderOverlayBottom()}px`
    )
}

function getHeaderOverlayBottom() {
    const bottoms = []

    const stickyFixed = document.querySelector('.stricky-header.stricky-fixed')
    if (stickyFixed) {
        const rect = stickyFixed.getBoundingClientRect()
        if (rect.height > 0 && rect.bottom > 0) {
            bottoms.push(rect.bottom)
        }
    }

    const mainHeader = document.querySelector('.main-header-one')
    if (mainHeader) {
        const rect = mainHeader.getBoundingClientRect()
        if (rect.bottom > 0 && rect.top < window.innerHeight * 0.45) {
            bottoms.push(rect.bottom)
        }
    }

    if (bottoms.length > 0) {
        return Math.ceil(Math.max(...bottoms))
    }

    const sticky = document.querySelector('.stricky-header')
    if (sticky && window.getComputedStyle(sticky).display !== 'none') {
        const h = sticky.getBoundingClientRect().height
        if (h > 0) bottoms.push(h)
    }

    if (mainHeader) {
        bottoms.push(mainHeader.getBoundingClientRect().height)
    }

    const headerBottom = document.querySelector('.main-header-one__bottom')
    if (headerBottom) {
        bottoms.push(headerBottom.getBoundingClientRect().height)
    }

    return Math.ceil(Math.max(DEFAULT_HEADER_OFFSET, ...bottoms))
}

export default function HomeLandingFlow() {
    const [slideIndex, setSlideIndex] = useState(0)
    const [isVideoOpen, setVideoOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isGesturing, setIsGesturing] = useState(false)
    const slideIndexRef = useRef(0)
    const navigationRef = useRef(null)
    const gesturingRef = useRef(false)

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
        const syncMobile = () => setIsMobile(media.matches)
        syncMobile()
        media.addEventListener('change', syncMobile)
        return () => media.removeEventListener('change', syncMobile)
    }, [])

    useEffect(() => {
        syncSiteHeaderHeight()
        window.addEventListener('resize', syncSiteHeaderHeight)
        window.addEventListener('scroll', syncSiteHeaderHeight, { passive: true })
        return () => {
            window.removeEventListener('resize', syncSiteHeaderHeight)
            window.removeEventListener('scroll', syncSiteHeaderHeight)
        }
    }, [])

    useEffect(() => {
        const slider = document.querySelector('#home-landing-root .home-landing__slider')
        const syncTouchAction = (index = slideIndexRef.current) => {
            if (!slider) return
            // Capture swipes only while the slides can still move. At the last
            // slide, and once the page has scrolled, the browser should scroll.
            const captureSlides = window.scrollY <= 1 && index !== LAST_SLIDE_INDEX
            slider.style.touchAction = captureSlides ? 'none' : 'pan-y'
        }
        const navigation = createLandingNavigation({
            getIndex: () => slideIndexRef.current,
            setIndex: (index) => {
                // Update synchronously so rapid input cannot read a stale React render.
                slideIndexRef.current = index
                syncTouchAction(index)
                setSlideIndex(index)
            },
            lastIndex: LAST_SLIDE_INDEX,
            getScrollTop: () => window.scrollY,
            getLockMs: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 780,
            scrollBy: (delta) => {
                const root = document.documentElement
                const previous = root.style.scrollBehavior
                root.style.scrollBehavior = 'auto'
                window.scrollBy(0, delta)
                root.style.scrollBehavior = previous
            },
        })
        navigationRef.current = navigation
        syncTouchAction()
        let gestureIdle = 0
        const markGesturing = () => {
            window.clearTimeout(gestureIdle)
            if (!gesturingRef.current) {
                gesturingRef.current = true
                setIsGesturing(true)
            }
            gestureIdle = window.setTimeout(() => {
                gesturingRef.current = false
                setIsGesturing(false)
            }, 240)
        }
        const blocked = () => isVideoOpen || document.body.matches(
            '.mobile-menu-visible, .search-active, .side-content-visible'
        )
        const handleWheel = (event) => {
            if (blocked()) return
            markGesturing()
            navigation.wheel(event, window.innerHeight)
        }
        const handleTouchStart = (event) => {
            if (blocked()) return
            markGesturing()
            const onSlider = event.target instanceof Element &&
                Boolean(event.target.closest('#home-landing-root .home-landing__slider'))
            navigation.touchStart(event, true, onSlider)
        }
        const handleTouchMove = (event) => {
            if (blocked()) return
            markGesturing()
            navigation.touchMove(event)
        }
        const handleTouchEnd = () => navigation.touchEnd()
        let drag = null
        const handlePointerDown = (event) => {
            if (event.pointerType !== 'mouse' || event.button !== 0 || blocked() || window.scrollY > 1 ||
                event.target.closest('a, button, input, textarea, select, [contenteditable="true"]')) return
            drag = { id: event.pointerId, x: event.clientX, y: event.clientY }
        }
        const handlePointerUp = (event) => {
            if (!drag || drag.id !== event.pointerId) return
            const dx = drag.x - event.clientX
            const dy = drag.y - event.clientY
            drag = null
            if (blocked() || window.scrollY > 1 || Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
            slider.focus({ preventScroll: true })
            navigation.select(slideIndexRef.current + Math.sign(dx))
        }
        const cancelDrag = () => { drag = null }
        const preventImageDrag = (event) => { if (drag) event.preventDefault() }
        const handleKeyDown = (event) => {
            if (blocked() || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey ||
                window.scrollY > 1 || event.target.closest('input, textarea, select, [contenteditable="true"]')) return
            if (event.target !== document.body && !slider.contains(event.target)) return
            const direction = { ArrowRight: 1, ArrowDown: 1, PageDown: 1,
                ArrowLeft: -1, ArrowUp: -1, PageUp: -1 }[event.key]
            if (!direction) return
            // Let vertical navigation leave the final slide and reach the page below.
            if (slideIndexRef.current === LAST_SLIDE_INDEX && direction === 1 && event.key !== 'ArrowRight') return
            event.preventDefault()
            navigation.select(slideIndexRef.current + direction)
        }
        window.addEventListener('wheel', handleWheel, { passive: false })
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('scroll', syncTouchAction, { passive: true })
        slider.addEventListener('pointerdown', handlePointerDown)
        slider.addEventListener('dragstart', preventImageDrag)
        window.addEventListener('pointerup', handlePointerUp)
        window.addEventListener('pointercancel', cancelDrag)
        window.addEventListener('blur', cancelDrag)
        window.addEventListener('touchstart', handleTouchStart, { passive: true })
        window.addEventListener('touchmove', handleTouchMove, { passive: false })
        window.addEventListener('touchend', handleTouchEnd, { passive: true })
        window.addEventListener('touchcancel', handleTouchEnd, { passive: true })
        return () => {
            navigationRef.current = null
            window.clearTimeout(gestureIdle)
            window.removeEventListener('wheel', handleWheel)
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('scroll', syncTouchAction)
            slider.removeEventListener('pointerdown', handlePointerDown)
            slider.removeEventListener('dragstart', preventImageDrag)
            window.removeEventListener('pointerup', handlePointerUp)
            window.removeEventListener('pointercancel', cancelDrag)
            window.removeEventListener('blur', cancelDrag)
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('touchend', handleTouchEnd)
            window.removeEventListener('touchcancel', handleTouchEnd)
            slider.style.touchAction = ''
        }
    }, [isVideoOpen])

    const goToSlide = useCallback((index) => navigationRef.current?.select(index), [])

    return (
        <div id="home-landing-root" className={`home-landing${isMobile ? ' home-landing--mobile' : ''}`}>
            <div className="home-landing__stage is-active">
                <section className="home-landing__slider" tabIndex={0} aria-label="Explore TraqAll modules">
                    <ModuleFullscreenSlider
                        activeIndex={slideIndex}
                        onOpenVideo={() => setVideoOpen(true)}
                        onSlideChange={goToSlide}
                        isMobile={isMobile}
                        suspendInert={isGesturing}
                    />
                    {!isMobile && (
                        <p className="home-landing__scroll-hint" aria-hidden="true">
                            Scroll to explore modules
                        </p>
                    )}
                </section>
            </div>
            <div className="home-landing__content is-released">
                <section id="home-about" className="home-landing__about">
                    <About />
                </section>
            </div>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isVideoOpen}
                videoId="Get7rqXYrbQ"
                onClose={() => setVideoOpen(false)}
            />
        </div>
    )
}
