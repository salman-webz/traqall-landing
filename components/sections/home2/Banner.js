
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
        
        {/* Start Main Slider Two*/} 
        <section className="main-slider-two">
            <Swiper {...swiperOptions} className="main-slider-two__carousel owl-carousel owl-theme">
                <SwiperSlide>
                {/* Start Main Slider Two Single*/} 
                <div className="main-slider-two__single">
                    <div className="main-slider-two__pattern"
                        style={{ backgroundImage: ' url(assets/images/pattern/main-slider-v2-pattern.png)' }} ></div>

                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: ' url(assets/images/slider/slider-v2-img2.jpg)' }} >
                    </div>
                    <div className="shape5"><img src="assets/images/slider/slider-v2-img4.png" alt=""/></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"><img src="assets/images/shapes/slider-v2-shape1.png" alt=""/></div>
                    <div className="shape4"></div>

                    <div className="container">
                        <div className="main-slider-two__content">
                            <div className="tagline">
                                <span>Building a Better Tomorrow</span>
                            </div>
                            <div className="title-box">
                                <h2>Quality Construction <br/> Timely Delivery</h2>
                            </div>

                            <div className="text-box">
                                <p>The timeline varies depending on the project's scope and complexity <br/>
                                    timeline after assessing your specific needs </p>
                            </div>

                            <div className="main-slider-two__btn">
                                <Link className="thm-btn" href="contact">describe more
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider Two Single*/} 
                </SwiperSlide>
                <SwiperSlide>
                {/* Start Main Slider Two Single*/} 
                <div className="main-slider-two__single">
                    <div className="main-slider-two__pattern"
                        style={{ backgroundImage: ' url(assets/images/pattern/main-slider-v2-pattern.png)' }} ></div>

                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: ' url(assets/images/slider/slider-v2-img3.jpg)' }} >
                    </div>
                    <div className="shape5"><img src="assets/images/slider/slider-v2-img4.png" alt=""/></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"><img src="assets/images/shapes/slider-v2-shape1.png" alt=""/></div>
                    <div className="shape4"></div>

                    <div className="container">
                        <div className="main-slider-two__content">
                            <div className="tagline">
                                <span>Building a Better Tomorrow</span>
                            </div>
                            <div className="title-box">
                                <h2>Quality Construction <br/> Timely Delivery</h2>
                            </div>

                            <div className="text-box">
                                <p>The timeline varies depending on the project's scope and complexity <br/>
                                    timeline after assessing your specific needs </p>
                            </div>

                            <div className="main-slider-two__btn">
                                <Link className="thm-btn" href="contact">describe more
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider Two Single*/} 
                </SwiperSlide>
                <SwiperSlide>
                {/* Start Main Slider Two Single*/} 
                <div className="main-slider-two__single">
                    <div className="main-slider-two__pattern"
                        style={{ backgroundImage: ' url(assets/images/pattern/main-slider-v2-pattern.png)' }} ></div>

                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: ' url(assets/images/slider/slider-v2-img2.jpg)' }} >
                    </div>
                    <div className="shape5"><img src="assets/images/slider/slider-v2-img4.png" alt=""/></div>
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                    <div className="shape3"><img src="assets/images/shapes/slider-v2-shape1.png" alt=""/></div>
                    <div className="shape4"></div>

                    <div className="container">
                        <div className="main-slider-two__content">
                            <div className="tagline">
                                <span>Building a Better Tomorrow</span>
                            </div>
                            <div className="title-box">
                                <h2>Quality Construction <br/> Timely Delivery</h2>
                            </div>

                            <div className="text-box">
                                <p>The timeline varies depending on the project's scope and complexity <br/>
                                    timeline after assessing your specific needs </p>
                            </div>

                            <div className="main-slider-two__btn">
                                <Link className="thm-btn" href="contact">describe more
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Slider Two Single*/} 
                </SwiperSlide>
            </Swiper>
        </section>
        {/* End Main Slider Two*/} 
        </>
    )
}
