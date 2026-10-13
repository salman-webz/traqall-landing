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

export default function Testimonial() {
    return (
        <>
        
        {/* Start Testimonial Three*/} 
        <section className="testimonial-three">
            <div className="shape1"><img src="assets/images/shapes/testimonial-v3-shape1.png" alt=""/></div>
            <div className="container">
                <div className="sec-title tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>testimonials</h4>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">What client saying about us</h2>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="testimonial-three__carousel owl-carousel owl-theme">
                            <SwiperSlide>
                            {/* Start Testimonial Three Single*/} 
                            <div className="testimonial-three__single text-center">
                                <div className="testimonial-three__single-img">
                                    <img src="assets/images/testimonial/testimonial-v3-img1.jpg" alt=""/>
                                </div>
                                <div className="testimonial-three__single-inner">
                                    <h2>Savannah Nguyen</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have
                                        suffered alteration in some form.</p>

                                    <div className="rating-box">
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-quote"></span>
                                </div>
                            </div>
                            {/* End Testimonial Three Single*/} 
                            </SwiperSlide>
                            <SwiperSlide>
                            {/* Start Testimonial Three Single*/} 
                            <div className="testimonial-three__single text-center">
                                <div className="testimonial-three__single-img">
                                    <img src="assets/images/testimonial/testimonial-v3-img2.jpg" alt=""/>
                                </div>
                                <div className="testimonial-three__single-inner">
                                    <h2>Mark Wood</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have
                                        suffered alteration in some form.</p>

                                    <div className="rating-box">
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-quote"></span>
                                </div>
                            </div>
                            {/* End Testimonial Three Single*/} 
                            </SwiperSlide>
                            <SwiperSlide>
                            {/* Start Testimonial Three Single*/} 
                            <div className="testimonial-three__single text-center">
                                <div className="testimonial-three__single-img">
                                    <img src="assets/images/testimonial/testimonial-v3-img3.jpg" alt=""/>
                                </div>
                                <div className="testimonial-three__single-inner">
                                    <h2>Jacob Jones</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have
                                        suffered alteration in some form.</p>

                                    <div className="rating-box">
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-quote"></span>
                                </div>
                            </div>
                            {/* End Testimonial Three Single*/} 
                            </SwiperSlide>
                            <SwiperSlide>
                            {/* Start Testimonial Three Single*/} 
                            <div className="testimonial-three__single text-center">
                                <div className="testimonial-three__single-img">
                                    <img src="assets/images/testimonial/testimonial-v3-img1.jpg" alt=""/>
                                </div>
                                <div className="testimonial-three__single-inner">
                                    <h2>Savannah Nguyen</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have
                                        suffered alteration in some form.</p>

                                    <div className="rating-box">
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-quote"></span>
                                </div>
                            </div>
                            {/* End Testimonial Three Single*/} 
                            </SwiperSlide>
                            <SwiperSlide>
                            {/* Start Testimonial Three Single*/} 
                            <div className="testimonial-three__single text-center">
                                <div className="testimonial-three__single-img">
                                    <img src="assets/images/testimonial/testimonial-v3-img2.jpg" alt=""/>
                                </div>
                                <div className="testimonial-three__single-inner">
                                    <h2>Mark Wood</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have
                                        suffered alteration in some form.</p>

                                    <div className="rating-box">
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-quote"></span>
                                </div>
                            </div>
                            {/* End Testimonial Three Single*/} 
                            </SwiperSlide>
                            <SwiperSlide>
                            {/* Start Testimonial Three Single*/} 
                            <div className="testimonial-three__single text-center">
                                <div className="testimonial-three__single-img">
                                    <img src="assets/images/testimonial/testimonial-v3-img3.jpg" alt=""/>
                                </div>
                                <div className="testimonial-three__single-inner">
                                    <h2>Jacob Jones</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have
                                        suffered alteration in some form.</p>

                                    <div className="rating-box">
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                        <Link href="#"><i className="icon-star1"></i></Link>
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <span className="icon-quote"></span>
                                </div>
                            </div>
                            {/* End Testimonial Three Single*/} 
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        {/* End Testimonial Three*/} 
            
        </>
    )
}
