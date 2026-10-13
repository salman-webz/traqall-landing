'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}
export default function Portfolio() {
    return (
        <>
       {/* Start Portfolio One*/} 
       <section className="portfolio-one">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Portfolio</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">We're proud of the Same works</h2>
                </div>

                <div className="portfolio-one__inner">
                    <Swiper {...swiperOptions} className="portfolio-one__carousel owl-carousel owl-theme">
                        <SwiperSlide>
                        {/* Start Portfolio One Single Box*/} 
                        <div className="portfolio-one__outer-box">
                            <ul className="portfolio-one__single-box">
                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img1.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img2.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img3.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img4.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* End Portfolio One Single Box*/} 
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Portfolio One Single Box*/} 
                        <div className="portfolio-one__outer-box">
                            <ul className="portfolio-one__single-box">
                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img1.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img2.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img3.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img4.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* End Portfolio One Single Box*/} 
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Portfolio One Single Box*/} 
                        <div className="portfolio-one__outer-box">
                            <ul className="portfolio-one__single-box">
                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img1.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img2.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img3.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="portfolio-one__single-inner">
                                        <div className="portfolio-one__single__bg"
                                            style="background: url(assets/images/project/portfolio-v1-img4.jpg);"></div>
                                        <div className="portfolio-one__single-content">
                                            <div className="text-box">
                                                <p>Rapid Renovations</p>
                                                <h3><Link href="portfolio-details">Construction Building Design</Link>
                                                </h3>
                                            </div>

                                            <div className="btn-box">
                                                <Link href="portfolio-details"><span
                                                        className="icon-right-arrow"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* End Portfolio One Single Box*/} 
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        {/* End Portfolio One*/}
       
        </>
    )
}
