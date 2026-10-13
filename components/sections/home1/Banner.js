'use client'

import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeroProductShowcase from '@/components/sections/home1/HeroProductShowcase'
import HeroTraqAllSlide from '@/components/sections/home1/HeroTraqAllSlide'
import { HOME_ASSETS } from '@/lib/home-assets'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.main-slider-one__pagination',
        clickable: true,
    },
}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    const openVideo = () => setOpen(true)

    return (
        <>
            <section className="main-slider-one main-slider-one--has-light-slide">
                <Swiper
                    {...swiperOptions}
                    className="main-slider__carousel owl-carousel owl-theme"
                >
                    <SwiperSlide>
                        <HeroTraqAllSlide onOpenVideo={openVideo} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="main-slider-one__single main-slider-one__single--dark">
                            <div
                                className="main-slider-one__bg"
                                style={{
                                    backgroundImage: `url(${HOME_ASSETS.sliderBg2})`,
                                }}
                            />
                            <div className="shape1">
                                <img
                                    src="assets/images/shapes/slider-v1-shape1.png"
                                    alt=""
                                />
                            </div>
                            <div className="shape2">
                                <img
                                    src="assets/images/shapes/slider-v1-shape2.png"
                                    alt=""
                                />
                            </div>
                            <div className="main-slider-one__img2">
                                <HeroProductShowcase variant="equipment" />
                            </div>
                            <div className="container">
                                <div className="main-slider-one__content">
                                    <div className="tagline">
                                        <span>Field Operations Platform</span>
                                    </div>
                                    <div className="title-box">
                                        <h2>
                                            Track Labor, Assets
                                            <br /> & Materials in One Place
                                        </h2>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            From crew timecards to equipment logs and
                                            material inventory,
                                            <br />
                                            TraqAll keeps your jobs running with
                                            real-time visibility.
                                        </p>
                                    </div>
                                    <div className="main-slider-one__single-btn">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="services">
                                                Explore Modules
                                                <i className="icon-next" />
                                                <span className="hover-btn hover-bx" />
                                                <span className="hover-btn hover-bx2" />
                                                <span className="hover-btn hover-bx3" />
                                                <span className="hover-btn hover-bx4" />
                                            </Link>
                                        </div>
                                        <div className="main-slider-one__single-video">
                                            <div className="main-slider-one__video-link">
                                                <a
                                                    onClick={openVideo}
                                                    className="video-popup"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <div className="main-slider-one__video-icon">
                                                        <span className="icon-play-button-arrowhead" />
                                                        <i className="ripple" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="text">
                                                <Link href="#">See TraqAll in Action</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="main-slider-one__single main-slider-one__single--dark">
                            <div
                                className="main-slider-one__bg"
                                style={{
                                    backgroundImage: `url(${HOME_ASSETS.sliderBg3})`,
                                }}
                            />
                            <div className="shape1">
                                <img
                                    src="assets/images/shapes/slider-v1-shape1.png"
                                    alt=""
                                />
                            </div>
                            <div className="shape2">
                                <img
                                    src="assets/images/shapes/slider-v1-shape2.png"
                                    alt=""
                                />
                            </div>
                            <div className="main-slider-one__img2">
                                <HeroProductShowcase variant="mobile" />
                            </div>
                            <div className="container">
                                <div className="main-slider-one__content">
                                    <div className="tagline">
                                        <span>Built for Construction Teams</span>
                                    </div>
                                    <div className="title-box">
                                        <h2>
                                            Stop Chasing Spreadsheets
                                            <br /> Start Managing Smarter
                                        </h2>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            Approve timecards, monitor fleet status, and
                                            resolve site issues
                                            <br />
                                            from a single dashboard your whole team can
                                            rely on.
                                        </p>
                                    </div>
                                    <div className="main-slider-one__single-btn">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="about">
                                                Learn About TraqAll
                                                <i className="icon-next" />
                                                <span className="hover-btn hover-bx" />
                                                <span className="hover-btn hover-bx2" />
                                                <span className="hover-btn hover-bx3" />
                                                <span className="hover-btn hover-bx4" />
                                            </Link>
                                        </div>
                                        <div className="main-slider-one__single-video">
                                            <div className="main-slider-one__video-link">
                                                <a
                                                    onClick={openVideo}
                                                    className="video-popup"
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <div className="main-slider-one__video-icon">
                                                        <span className="icon-play-button-arrowhead" />
                                                        <i className="ripple" />
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="text">
                                                <Link href="#">See TraqAll in Action</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="swiper-pagination main-slider-one__pagination" />
            </section>

            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="Get7rqXYrbQ"
                onClose={() => setOpen(false)}
            />
        </>
    )
}
