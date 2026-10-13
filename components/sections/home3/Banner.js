
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

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



}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* Start Main Slider Three*/} 
        <section className="main-slider-three">
            <Swiper {...swiperOptions} className="main-slider-three__carousel owl-carousel owl-theme">
                <SwiperSlide>
                {/* Start Main Slider Three Single*/} 
                <div className="main-slider-three__single">
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: ' url(assets/images/slider/slider-v3-img1.jpg)' }} ></div>
                    <div className="shape1"><img src="assets/images/shapes/main-slider-v3-shape1.png" alt=""/></div>
                    <div className="container">

                        <div className="main-slider-three__single-inner">
                            <div className="main-slider-three__content">
                                <div className="tagline">
                                    <span>Our Top Construction.</span>
                                </div>

                                <div className="title-box">
                                    <h2>We build something new <br/> and <span>consistent.</span></h2>
                                </div>

                                <div className="text-box">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of
                                        a page when looking at its layout. The point is that it has a
                                        distribution.</p>
                                </div>

                                <div className="btn-box">
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
                </div>
                {/* End Main Slider Three Single*/} 
                </SwiperSlide>
                <SwiperSlide>
                {/* Start Main Slider Three Single*/} 
                <div className="main-slider-three__single">
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: ' url(assets/images/slider/slider-v3-img2.jpg)' }} ></div>
                    <div className="shape1"><img src="assets/images/shapes/main-slider-v3-shape1.png" alt=""/></div>
                    <div className="container">

                        <div className="main-slider-three__single-inner">
                            <div className="main-slider-three__content">
                                <div className="tagline">
                                    <span>Our Top Construction.</span>
                                </div>

                                <div className="title-box">
                                    <h2>We build something new <br/> and <span>consistent.</span></h2>
                                </div>

                                <div className="text-box">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of
                                        a page when looking at its layout. The point is that it has a
                                        distribution.</p>
                                </div>

                                <div className="btn-box">
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
                </div>
                {/* End Main Slider Three Single*/} 
                </SwiperSlide>
                <SwiperSlide>
                {/* Start Main Slider Three Single*/} 
                <div className="main-slider-three__single">
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: ' url(assets/images/slider/slider-v3-img3.jpg)' }} ></div>
                    <div className="shape1"><img src="assets/images/shapes/main-slider-v3-shape1.png" alt=""/></div>
                    <div className="container">

                        <div className="main-slider-three__single-inner">
                            <div className="main-slider-three__content">
                                <div className="tagline">
                                    <span>Our Top Construction.</span>
                                </div>

                                <div className="title-box">
                                    <h2>We build something new <br/> and <span>consistent.</span></h2>
                                </div>

                                <div className="text-box">
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of
                                        a page when looking at its layout. The point is that it has a
                                        distribution.</p>
                                </div>

                                <div className="btn-box">
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
                </div>
                {/* End Main Slider Three Single*/}
                </SwiperSlide> 
            </Swiper>

            <div className="main-slider__form">
                <div className="main-slider__form-bg"
                    style={{ backgroundImage: ' url(assets/images/pattern/main-slider-form-bg.png)' }} ></div>

                <div className="title-box">
                    <h2>Request A Free Estimate</h2>
                </div>
                <form method="post" action="/">
                    <div className="form-group">
                        <input type="text" name="username" placeholder="Your Name" required=""/>
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address"  name="form_email" required=""/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="date"  placeholder="Inspection Date" id="datepicker"/>
                    </div>
                    <div className="form-group">
                        <div className="select-box">
                            <select className="selectmenu wide">
                                <option >You Location</option>
                                <option>Saudi Arabia</option>
                                <option>Bangladesh </option>
                                <option>Pakistan</option>
                                <option>Malaysia</option>
                                <option>Iran</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="button-box">
                                <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                    Make An Appintment
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        {/* End Main Slider Three*/}
        </>
    )
}
