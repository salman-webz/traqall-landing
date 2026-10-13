'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { HOME_ASSETS } from "@/lib/home-assets"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
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
            slidesPerView: 1,
            
        },
        1199: {
            slidesPerView: 1,
            
        },
        1350: {
            slidesPerView: 1,
            
        },
    }



}
export default function Testimonial() {
    return (
        <>

        {/* Start Testimonial One*/} 
        <section className="testimonial-one clearfix">
            <div className="container">
                <div className="row">
                    {/* Start Testimonial One Left*/} 
                    <div className="col-xl-4">
                        <div className="testimonial-one__left">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Testimonial</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">What Our Clients <br/> Say About Us</h2>
                            </div>
                            <div className="testimonial-one__left-bottom">
                                <div className="testimonial-one__left-img">
                                    <ul>
                                        <li>
                                            <div className="img-box">
                                                <img src={HOME_ASSETS.testimonial1} alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src={HOME_ASSETS.testimonial2} alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src={HOME_ASSETS.testimonial3} alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src={HOME_ASSETS.testimonial4} alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box style2">
                                                <img src={HOME_ASSETS.testimonial5} alt=""/>
                                                <div className="icon-box">
                                                    <Link href="#"><span className="icon-plus-1"></span></Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="testimonial-one__left-bottom-text count-box">
                                    <h3>Trusted by construction<br/> teams nationwide</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Testimonial One Left*/} 

                    {/* Start Testimonial One Right*/} 
                    <div className="col-xl-8">
                        <div className="testimonial-one__right">
                            <Swiper {...swiperOptions} className="testimonial-one__carousel ">
                                <SwiperSlide>
                                {/* Start Testimonial One Single*/} 
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__single-text">
                                        <p>"TraqAll replaced three different spreadsheets and a paper timesheet process. Our supervisors approve timecards in minutes, and we finally have real visibility into equipment utilization across projects."</p>
                                    </div>

                                    <div className="testimonial-one__single-author">
                                        <div className="img-box">
                                            <div className="inner">
                                                <img src={HOME_ASSETS.testimonial6} alt="Marcus Chen"/>
                                            </div>
                                            <div className="icon">
                                                <span className="icon-right-quotation-mark"></span>
                                            </div>
                                        </div>

                                        <div className="content-box">
                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                            </div>
                                            <h2>Marcus Chen</h2>
                                            <p>Project Superintendent</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Testimonial One Single*/} 
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Testimonial One Single*/} 
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__single-text">
                                        <p>"TraqAll replaced three different spreadsheets and a paper timesheet process. Our supervisors approve timecards in minutes, and we finally have real visibility into equipment utilization across projects."</p>
                                    </div>

                                    <div className="testimonial-one__single-author">
                                        <div className="img-box">
                                            <div className="inner">
                                                <img src={HOME_ASSETS.testimonial6} alt="Marcus Chen"/>
                                            </div>
                                            <div className="icon">
                                                <span className="icon-right-quotation-mark"></span>
                                            </div>
                                        </div>

                                        <div className="content-box">
                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                            </div>
                                            <h2>Marcus Chen</h2>
                                            <p>Project Superintendent</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Testimonial One Single*/} 
                                </SwiperSlide>
                                <SwiperSlide>
                                {/* Start Testimonial One Single*/} 
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__single-text">
                                        <p>"TraqAll replaced three different spreadsheets and a paper timesheet process. Our supervisors approve timecards in minutes, and we finally have real visibility into equipment utilization across projects."</p>
                                    </div>

                                    <div className="testimonial-one__single-author">
                                        <div className="img-box">
                                            <div className="inner">
                                                <img src={HOME_ASSETS.testimonial6} alt="Marcus Chen"/>
                                            </div>
                                            <div className="icon">
                                                <span className="icon-right-quotation-mark"></span>
                                            </div>
                                        </div>

                                        <div className="content-box">
                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                            </div>
                                            <h2>Marcus Chen</h2>
                                            <p>Project Superintendent</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Testimonial One Single*/} 
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    {/* End Testimonial One Right*/} 
                </div>
            </div>
        </section>
        {/* End Testimonial One*/} 
            
        </>
    )
}
