'use client'

import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import HeroTraqAllSlide from '@/components/sections/home1/HeroTraqAllSlide'
import { TRAQALL_SERVICES, MODULE_SLIDER_IMAGES } from '@/lib/services'
import { HOME_ASSETS } from '@/lib/home-assets'

const MODULES = TRAQALL_SERVICES
const SLIDE_COUNT = MODULES.length + 1
const SLIDE_LABELS = ['Overview', ...MODULES.map((m) => m.title)]



const MODULE_ACCENTS = {
    timecards: '#22c55e',
    equipment: '#3b82f6',
    materials: '#8b5cf6',
    'small-tools': '#DC2626',
    budget: '#10b981',
    issues: '#ef4444',
}

const MODULE_HIGHLIGHTS = {
    timecards: [
        { label: 'Entry', value: 'Individual & bulk' },
        { label: 'Review', value: 'Submit & approve' },
        { label: 'Hours', value: 'Regular, OT & DT' },
        { label: 'Exports', value: 'Choose columns' },
    ],
    equipment: [
        { label: 'Fleet', value: 'Six statuses' },
        { label: 'Assignment', value: 'Checkout & return' },
        { label: 'Usage', value: 'Project & operator' },
        { label: 'Maintenance', value: 'Service history' },
    ],
    materials: [
        { label: 'Inventory', value: 'Catalog & project' },
        { label: 'Stock', value: 'Alert quantities' },
        { label: 'Movements', value: 'Six log types' },
        { label: 'Costs', value: 'Unit cost records' },
    ],
    'small-tools': [
        { label: 'Registry', value: 'Codes & serials' },
        { label: 'Quantities', value: 'In & out' },
        { label: 'Due dates', value: 'Overdue filters' },
        { label: 'Movement', value: 'Return & transfer' },
    ],
    budget: [
        { label: "Planning", value: "By cost code" },
        { label: "Categories", value: "Labor, equipment & materials" },
        { label: "Performance", value: "Budget vs. actual" },
        { label: "Visibility", value: "Remaining & percentage used" },
    ],
    issues: [
        { label: 'Priority', value: 'Low to Critical' },
        { label: 'Ownership', value: 'Assignee & due date' },
        { label: 'Context', value: 'Related records' },
        { label: 'Follow-up', value: 'Comments & activity' },
    ],
}

/** Per-slide construction texture (changes as user scrolls) */
const SLIDE_TEXTURES = [
    HOME_ASSETS.landingTextureBg,
    HOME_ASSETS.serviceImg1,
    HOME_ASSETS.landingTextureBgAlt,
    HOME_ASSETS.serviceImg3,
    HOME_ASSETS.serviceImg4,
    HOME_ASSETS.landingTextureBgAlt,
    HOME_ASSETS.serviceImg5,
]

export default function ModuleFullscreenSlider({
    activeIndex = 0,
    onOpenVideo,
    onSlideChange,
    isMobile = false,
    suspendInert = false,
}) {
    const sliderRef = useRef(null)
    const textureSrc = SLIDE_TEXTURES[activeIndex] ?? HOME_ASSETS.landingTextureBg

    useLayoutEffect(() => {
        const slider = sliderRef.current
        if (!slider) return
        const panels = slider.querySelectorAll('.module-fullscreen__panel')
        // Leave the panels interactive while a swipe is in progress. Making the
        // slide under the pointer inert drops focus and the browser ignores the
        // rest of the gesture until the next click.
        if (suspendInert) {
            for (const panel of panels) panel.inert = false
            return
        }
        const section = slider.closest('.home-landing__slider')
        for (const [index, panel] of panels.entries()) {
            const hide = index !== activeIndex
            if (hide && panel.contains(document.activeElement) && section) {
                section.focus({ preventScroll: true })
            }
            // aria-hidden alone still allows focus to jump into off-screen slides.
            panel.inert = hide
        }
    }, [activeIndex, suspendInert])

    return (
        <div
            ref={sliderRef}
            tabIndex={-1}
            className={`module-fullscreen${activeIndex === 0 ? ' is-hero-slide' : ''}${
                isMobile ? ' module-fullscreen--mobile' : ''
            }`}
            aria-label="TraqAll platform overview"
        >
            <div className="module-fullscreen__texture-bg" aria-hidden="true">
                <div
                    key={textureSrc}
                    className="module-fullscreen__texture-photo"
                    style={{ backgroundImage: `url(${textureSrc})` }}
                />
                <div className="module-fullscreen__texture-overlay" />
                <div className="module-fullscreen__texture-grain" />
                <img
                    src={HOME_ASSETS.footerShape1}
                    className="module-fullscreen__texture-shape float-bob-y"
                    alt=""
                />
            </div>

            <div
                className="module-fullscreen__track"
                style={
                    isMobile
                        ? undefined
                        : { transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }
                }
            >
                <article
                    className={`module-fullscreen__panel module-fullscreen__panel--hero${
                        activeIndex === 0 ? ' is-active' : ''
                    }`}
                    aria-hidden={activeIndex !== 0}
                >
                    <HeroTraqAllSlide onOpenVideo={onOpenVideo} />
                </article>

                {MODULES.map((module, index) => {
                    const slideIndex = index + 1
                    const highlights = MODULE_HIGHLIGHTS[module.slug] || []
                    const accent = MODULE_ACCENTS[module.slug] || '#DC2626'

                    return (
                        <article
                            key={module.slug}
                            className={`module-fullscreen__panel module-fullscreen__panel--light${
                                activeIndex === slideIndex ? ' is-active' : ''
                            }`}
                            style={{
                                '--module-accent': accent,
                                '--module-accent-soft': `${accent}14`,
                            }}
                            aria-hidden={activeIndex !== slideIndex}
                        >
                            <div className="container module-fullscreen__panel-inner">
                                <div className="module-fullscreen__panel-layout">
                                    <div className="module-fullscreen__panel-copy">
                                        <span className="module-fullscreen__index">
                                            {String(slideIndex + 1).padStart(2, '0')} /{' '}
                                            {String(SLIDE_COUNT).padStart(2, '0')}
                                        </span>
                                        <div className="module-fullscreen__icon">
                                            <span className={module.icon} />
                                        </div>
                                        <h2>{module.title}</h2>
                                        <p className="module-fullscreen__intro">
                                            {module.shortDescription}
                                        </p>
                                        <ul className="module-fullscreen__features">
                                            {module.features.slice(0, 3).map((feature) => (
                                                <li key={feature}>{feature}</li>
                                            ))}
                                        </ul>
                                        <Link
                                            className="thm-btn module-fullscreen__cta"
                                            href={`/${module.slug}`}
                                        >
                                            Explore {module.title}
                                            <i className="icon-next" />
                                            <span className="hover-btn hover-bx" />
                                            <span className="hover-btn hover-bx2" />
                                            <span className="hover-btn hover-bx3" />
                                            <span className="hover-btn hover-bx4" />
                                        </Link>
                                    </div>

                                    <div className="module-fullscreen__panel-visual">
                                        <div className="module-fullscreen__visual-card">
                                            <div className="module-fullscreen__visual-media">
                                                <img src={MODULE_SLIDER_IMAGES[module.slug]} alt={`${module.title} product illustration`} />
                                            </div>
                                            <div className="module-fullscreen__visual-caption">
                                                <span className="module-fullscreen__visual-caption-icon"><span className={module.icon} /></span>
                                                <p>{module.title} overview</p>
                                            </div>
                                            <div className="module-fullscreen__highlights">
                                                {highlights.map((item) => (
                                                    <div
                                                        key={item.label}
                                                        className="module-fullscreen__highlight"
                                                    >
                                                        <strong>{item.label}</strong>
                                                        <span>{item.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>

            {!isMobile && (
                <div className="module-fullscreen__labels" aria-hidden="true">
                    {SLIDE_LABELS.map((label, index) => (
                        <span
                            key={label}
                            className={index === activeIndex ? 'is-active' : ''}
                        >
                            {label}
                        </span>
                    ))}
                </div>
            )}

            {onSlideChange && (
                <nav className="module-fullscreen__mobile-nav" aria-label="Slide navigation">
                    <p className="module-fullscreen__mobile-nav-label">
                        <span className="module-fullscreen__mobile-nav-count">
                            {String(activeIndex + 1).padStart(2, '0')} /{' '}
                            {String(SLIDE_COUNT).padStart(2, '0')}
                        </span>
                        <span className="module-fullscreen__mobile-nav-name">
                            {SLIDE_LABELS[activeIndex]}
                        </span>
                    </p>
                    <div className="module-fullscreen__mobile-nav-dots" role="tablist">
                        {SLIDE_LABELS.map((label, index) => (
                            <button
                                key={label}
                                type="button"
                                role="tab"
                                aria-selected={index === activeIndex}
                                aria-label={`Go to ${label}`}
                                className={index === activeIndex ? 'is-active' : ''}
                                onClick={() => onSlideChange(index)}
                            />
                        ))}
                    </div>
                </nav>
            )}
        </div>
    )
}
