'use client'



import Link from 'next/link'

import { HOME_ASSETS } from '@/lib/home-assets'

import { TRAQALL_SERVICES } from '@/lib/services'



const HERO_MODULES = TRAQALL_SERVICES.slice(0, 5).map((module) => ({

    slug: module.slug,

    title: module.slug === 'small-tools' ? 'Tools' : module.title,

    icon: module.icon,

    image: module.image,

}))



/**

 * Hero slider product visuals.

 * variant: "modules-glimpse" | "dashboard-mobile" | "equipment" | "mobile"

 */

export default function HeroProductShowcase({ variant = 'dashboard-mobile' }) {

    if (variant === 'modules-glimpse') {

        return (

            <div className="main-slider-one__product-showcase main-slider-one__product-showcase--modules">

                <div className="hero-modules-showcase" aria-label="TraqAll platform modules">

                    <div className="hero-modules-showcase__primary">

                        <div className="hero-modules-showcase__dashboard">

                            <div className="hero-modules-showcase__dashboard-bar">

                                <span />

                                <span />

                                <span />

                            </div>

                            <div className="hero-modules-showcase__dashboard-screen">

                                <img

                                    src={HOME_ASSETS.dashboard}

                                    alt="TraqAll operations dashboard"

                                />

                            </div>

                        </div>

                        <div className="hero-modules-showcase__phone">

                            <img

                                src={HOME_ASSETS.mobileApp}

                                alt="TraqAll mobile app"

                            />

                        </div>

                    </div>



                    <nav className="hero-modules-showcase__rail" aria-label="Platform modules">

                        {HERO_MODULES.map((module, index) => (

                            <Link

                                key={module.slug}

                                href={`/${module.slug}`}

                                className="hero-modules-showcase__item"

                                style={{ '--item-index': index }}

                            >

                                <span className="hero-modules-showcase__thumb">

                                    <img src={module.image} alt="" />

                                </span>

                                <span className="hero-modules-showcase__copy">

                                    <span className={`hero-modules-showcase__icon ${module.icon}`} />

                                    <span className="hero-modules-showcase__name">

                                        {module.title}

                                    </span>

                                </span>

                                <span className="hero-modules-showcase__arrow icon-next" />

                            </Link>

                        ))}

                    </nav>

                </div>

            </div>

        )

    }



    if (variant === 'equipment') {

        return (

            <div className="main-slider-one__product-showcase main-slider-one__product-showcase--equipment">

                <img

                    src={HOME_ASSETS.equipmentShowcase}

                    alt="TraqAll equipment fleet tracking with real dashboard and mobile app"

                />

            </div>

        )

    }



    if (variant === 'mobile') {

        return (

            <div className="main-slider-one__product-showcase main-slider-one__product-showcase--mobile-only">

                <div className="main-slider-one__device main-slider-one__device--phone">

                    <div className="main-slider-one__device-bezel">

                        <img src={HOME_ASSETS.mobileApp} alt="TraqAll mobile app login" />

                    </div>

                </div>

            </div>

        )

    }



    return (

        <div className="main-slider-one__product-showcase">

            <div className="main-slider-one__device main-slider-one__device--laptop">

                <div className="main-slider-one__device-bezel">

                    <img src={HOME_ASSETS.dashboard} alt="TraqAll operations dashboard" />

                </div>

            </div>

            <div className="main-slider-one__device main-slider-one__device--phone">

                <div className="main-slider-one__device-bezel">

                    <img src={HOME_ASSETS.mobileApp} alt="TraqAll mobile app" />

                </div>

            </div>

        </div>

    )

}


