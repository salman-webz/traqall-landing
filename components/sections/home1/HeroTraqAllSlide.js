'use client'

import Link from 'next/link'
import HeroTraqAllVisual from '@/components/sections/home1/HeroTraqAllVisual'
import { HOME_ASSETS } from '@/lib/home-assets'

const HERO_FEATURES = [
    {
        icon: 'icon-clock',
        title: 'Real-time Visibility',
        text: 'Track everything in real time.',
    },
    {
        icon: 'icon-construction-2',
        title: 'All-in-One Platform',
        text: 'Manage time, tools, equipment & more.',
    },
    {
        icon: 'icon-development',
        title: 'Data-Driven Decisions',
        text: 'Insights that help you build smarter.',
    },
]

const TRUST_AVATARS = [
    HOME_ASSETS.team1,
    HOME_ASSETS.team2,
    HOME_ASSETS.team3,
]

export default function HeroTraqAllSlide({ onOpenVideo }) {
    return (
        <div className="traqall-hero-panel">
            <div className="traqall-hero">
                <div className="container traqall-hero__container">
                    <div className="traqall-hero__grid">
                        <div className="traqall-hero__content main-slider-one__content">
                            <p className="traqall-hero__eyebrow">
                                All-in-One Field Operations Platform
                            </p>

                            <h2 className="traqall-hero__title">
                                Your Field Operations
                                <span className="traqall-hero__title-accent">
                                    {' '}
                                    Command Center
                                </span>
                            </h2>

                            <p className="traqall-hero__description">
                                TraqAll brings timecards, equipment, materials, small
                                tools, and issues together in one platform—giving
                                construction teams complete visibility and control in
                                real time.
                            </p>

                            <ul className="traqall-hero__features">
                                {HERO_FEATURES.map((feature) => (
                                    <li key={feature.title}>
                                        <span className="traqall-hero__feature-icon">
                                            <span className={feature.icon} />
                                        </span>
                                        <span className="traqall-hero__feature-copy">
                                            <strong>{feature.title}</strong>
                                            <span>{feature.text}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="traqall-hero__actions main-slider-one__single-btn">
                                <div className="btn-one">
                                    <Link className="thm-btn" href="contact">
                                        View Demo
                                        <i className="icon-next" />
                                        <span className="hover-btn hover-bx" />
                                        <span className="hover-btn hover-bx2" />
                                        <span className="hover-btn hover-bx3" />
                                        <span className="hover-btn hover-bx4" />
                                    </Link>
                                </div>

                                <div className="main-slider-one__single-video traqall-hero__video">
                                    <div className="main-slider-one__video-link">
                                        <a
                                            onClick={onOpenVideo}
                                            className="video-popup"
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (
                                                    e.key === 'Enter' ||
                                                    e.key === ' '
                                                ) {
                                                    onOpenVideo()
                                                }
                                            }}
                                        >
                                            <div className="main-slider-one__video-icon traqall-hero__play-icon">
                                                <span className="icon-play-button-arrowhead" />
                                                <i className="ripple" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="text">
                                        <a
                                            onClick={onOpenVideo}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (
                                                    e.key === 'Enter' ||
                                                    e.key === ' '
                                                ) {
                                                    onOpenVideo()
                                                }
                                            }}
                                        >
                                            See how TraqAll works
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="traqall-hero__trust">
                                {/* <ul className="traqall-hero__trust-avatars">
                                    {TRUST_AVATARS.map((src, index) => (
                                        <li key={src}>
                                            <img
                                                src={src}
                                                alt={`Construction team member ${index + 1}`}
                                            />
                                        </li>
                                    ))}
                                </ul> */}
                               
                            </div>
                        </div>

                        <div className="traqall-hero__visual-col">
                            <HeroTraqAllVisual />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

