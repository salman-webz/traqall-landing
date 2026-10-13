'use client'
import Link from "next/link"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { TRAQALL_SERVICES } from "@/lib/services"

const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        991: { slidesPerView: 3 },
        1199: { slidesPerView: 4 },
        1350: { slidesPerView: 4 },
    }
}

export default function Service() {
    const slides = [...TRAQALL_SERVICES, ...TRAQALL_SERVICES]

    return (
        <>
        <section className="services-one">
            <div className="shape1"><img src="assets/images/shapes/services-v1-shape1.png" alt=""/></div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Modules</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Everything Your Field Team Needs</h2>
                </div>
                <Swiper {...swiperOptions} className="services-one__carousel owl-carousel owl-theme">
                    {slides.map((service, index) => (
                        <SwiperSlide key={`${service.slug}-${index}`}>
                            <div className="services-one__single">
                                <div className="icon-box">
                                    <span className={service.icon}></span>
                                </div>
                                <div className="services-one__single-inner">
                                    <div className="services-one__single-content">
                                        <h3><Link href={service.slug}>{service.title}</Link></h3>
                                        <p>{service.shortDescription}</p>
                                    </div>
                                    <div className="services-one__single-img">
                                        <img src={`/assets/images/module-cards/${service.slug}.webp`} alt={`${service.title} — TraqAll field operations`} width="1536" height="1024" loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
        </>
    )
}
