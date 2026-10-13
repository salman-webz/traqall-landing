'use client'

import Link from 'next/link'
import { HOME_ASSETS } from '@/lib/home-assets'
import { TRAQALL_SERVICES } from '@/lib/services'

const MODULE_ACCENTS = {
    timecards: '#22c55e',
    equipment: '#3b82f6',
    materials: '#8b5cf6',
    'small-tools': '#DC2626',
    issues: '#ef4444',
}

const MODULE_BLURBS = {
    timecards: 'Track crew hours and labor in real time.',
    equipment: 'Monitor equipment usage and status.',
    materials: 'Manage materials inventory on site.',
    'small-tools': 'Track small tools and check-out status.',
    issues: 'Log, assign, and resolve issues faster.',
}

const HERO_MODULES = TRAQALL_SERVICES.slice(0, 5).map((module) => ({
    slug: module.slug,
    title: module.title,
    icon: module.icon,
    accent: MODULE_ACCENTS[module.slug] || '#DC2626',
    blurb: MODULE_BLURBS[module.slug] || module.shortDescription,
    phoneImage: HOME_ASSETS.modulePhones[module.slug] || HOME_ASSETS.mobileApp,
}))

export default function HeroTraqAllVisual() {
    return (
        <div className="traqall-hero__visual">
            <div className="traqall-hero__dashboard-stage">
                <div className="traqall-hero__dashboard">
                    <div className="traqall-hero__dashboard-chrome">
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="traqall-hero__dashboard-screen">
                        <img
                            src={HOME_ASSETS.dashboard}
                            alt="TraqAll operations dashboard overview"
                        />
                    </div>
                    <div className="traqall-hero__dashboard-fade" aria-hidden="true" />
                </div>
            </div>

            <div className="traqall-hero__modules-strip">
                <div className="traqall-hero__modules">
                    {HERO_MODULES.map((module) => (
                        <Link
                            key={module.slug}
                            href={`/${module.slug}`}
                            className="traqall-hero__module-card"
                        >
                            <span
                                className="traqall-hero__module-icon"
                                style={{ '--module-accent': module.accent }}
                            >
                                <span className={module.icon} />
                            </span>
                            <h3 className="traqall-hero__module-title">{module.title}</h3>
                            <p className="traqall-hero__module-text">{module.blurb}</p>
                            <img
                                className="traqall-hero__module-phone-img"
                                src={module.phoneImage}
                                alt={`TraqAll ${module.title} mobile app listing`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
