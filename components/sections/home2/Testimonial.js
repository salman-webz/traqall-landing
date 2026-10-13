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

        {/* Start Testimonial Two*/} 
        <section className="testimonial-one testimonial-one--two">
            <div className="testimonial-one--two__shape1 animation-infinite"
                style={{ backgroundImage: ' url(assets/images/shapes/testimonial-v2-shape1.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testimonial-one--two__inner">

                            <div className="testimonial-one--two__top">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="left-line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Testimonial</h4>
                                        </div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">What Our Clients Say <br/> About Us
                                    </h2>
                                </div>
                                <div className="testimonial-one--two__top-right">
                                    <div className="testimonial-one__left-img">
                                        <ul>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img2.png" alt=""/>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img3.png" alt=""/>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img4.png" alt=""/>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="img-box style2">
                                                    <img src="assets/images/testimonial/testimonial-v1-img5.png" alt=""/>
                                                    <div className="icon-box">
                                                        <Link href="#"><span className="icon-plus-1"></span></Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="testimonial-one__left-bottom-text count-box">
                                        <h3>We have <span className="count-text">2563</span>+
                                            Global <br/>
                                            Active Clients</h3>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="testimonial-one--two__bottom">
                                <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel owl-theme owl-dot-style1 style2">
                                    <SwiperSlide>
                                    {/* Start Testimonial One Single*/} 
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__single-text">
                                            <p>“We adhere to strict quality control measures and use high-quality
                                                materials. Our experienced team ensures every detail meets our high
                                                standards. We provide a comprehensive warranty on our workmanship and
                                                materials. Specific details are provided for each project range of
                                                sustainable and eco-friendly construction solutions</p>
                                        </div>

                                        <div className="testimonial-two__single-author-outer">
                                            <div className="testimonial-one__single-author">
                                                <div className="img-box">
                                                    <div className="inner">
                                                        <img src="assets/images/testimonial/testimonial-v1-img6.png"
                                                            alt=""/>
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
                                                    <h2>Savannah Nguyen</h2>
                                                    <p>Business Man</p>
                                                </div>
                                            </div>
                                            <div className="border-box"></div>
                                        </div>
                                    </div>
                                    {/* End Testimonial One Single*/} 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Testimonial One Single*/} 
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__single-text">
                                            <p>“We adhere to strict quality control measures and use high-quality
                                                materials. Our experienced team ensures every detail meets our high
                                                standards. We provide a comprehensive warranty on our workmanship and
                                                materials. Specific details are provided for each project range of
                                                sustainable and eco-friendly construction solutions</p>
                                        </div>

                                        <div className="testimonial-two__single-author-outer">
                                            <div className="testimonial-one__single-author">
                                                <div className="img-box">
                                                    <div className="inner">
                                                        <img src="assets/images/testimonial/testimonial-v1-img6.png"
                                                            alt=""/>
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
                                                    <h2>Savannah Nguyen</h2>
                                                    <p>Business Man</p>
                                                </div>
                                            </div>
                                            <div className="border-box"></div>
                                        </div>
                                    </div>
                                    {/* End Testimonial One Single*/} 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    {/* Start Testimonial One Single*/} 
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__single-text">
                                            <p>“We adhere to strict quality control measures and use high-quality
                                                materials. Our experienced team ensures every detail meets our high
                                                standards. We provide a comprehensive warranty on our workmanship and
                                                materials. Specific details are provided for each project range of
                                                sustainable and eco-friendly construction solutions</p>
                                        </div>

                                        <div className="testimonial-two__single-author-outer">
                                            <div className="testimonial-one__single-author">
                                                <div className="img-box">
                                                    <div className="inner">
                                                        <img src="assets/images/testimonial/testimonial-v1-img6.png"
                                                            alt=""/>
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
                                                    <h2>Savannah Nguyen</h2>
                                                    <p>Business Man</p>
                                                </div>
                                            </div>
                                            <div className="border-box"></div>
                                        </div>
                                    </div>
                                    {/* End Testimonial One Single*/} 
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {/* End Testimonial One Left*/} 
                </div>
            </div>
        </section>
        {/* End Testimonial Two*/}
            
        </>
    )
}
