'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
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
            slidesPerView: 5,
            
        },
        1199: {
            slidesPerView: 6,
            
        },
        1350: {
            slidesPerView: 6,
            
        },
    }



}
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Pricing">
        {/* Start Pricing One*/} 
        <section className="pricing-one pricing_innerpage pricing-one--pricing clearfix">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Pricing plan</h4>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Pricing & Packaging</h2>
                </div>

                <div className="row">
                    {/* Start Pricing One Single*/} 
                    <div className="col-xl-4 col-lg-4">
                        <div className="pricing-one__single wow fadeInUp" data-wow-duration="1500ms">
                            <div className="shape1"><img src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                            </div>
                            <div className="plan-box">
                                <p>Basic Plan</p>
                            </div>
                            <div className="table-header">
                                <h2>$30.99</h2>
                                <p>Per month</p>
                            </div>

                            <div className="table-content">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Construction & Building</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Interior Design</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>24/7 Tech Support</p>
                                        </div>
                                    </li>

                                    <li className="style2">
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Material Supply</p>
                                        </div>
                                    </li>

                                    <li className="style2">
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>House Renovations</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Welding & Laser</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="table-footer">
                                <div className="btn-box">
                                    <Link className="thm-btn" href="contact">Choose Package
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Pricing One Single*/} 

                    {/* Start Pricing One Single*/} 
                    <div className="col-xl-4 col-lg-4">
                        <div className="pricing-one__single wow fadeInDown" data-wow-duration="1500ms">
                            <div className="shape1"><img src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                            </div>
                            <div className="plan-box">
                                <p>Stander plan</p>
                            </div>
                            <div className="table-header">
                                <h2>$40.99</h2>
                                <p>Per month</p>
                            </div>

                            <div className="table-content">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Construction & Building</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Interior Design</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>24/7 Tech Support</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Material Supply</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>House Renovations</p>
                                        </div>
                                    </li>

                                    <li className="style2">
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Welding & Laser</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="table-footer">
                                <div className="btn-box">
                                    <Link className="thm-btn" href="contact">Choose Package
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Pricing One Single*/} 

                    {/* Start Pricing One Single*/} 
                    <div className="col-xl-4 col-lg-4">
                        <div className="pricing-one__single wow fadeInUp" data-wow-duration="1500ms">
                            <div className="shape1"><img src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                            </div>
                            <div className="plan-box">
                                <p>Premium Plan</p>
                            </div>
                            <div className="table-header">
                                <h2>$50.99</h2>
                                <p>Per month</p>
                            </div>

                            <div className="table-content">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Construction & Building</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Interior Design</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>24/7 Tech Support</p>
                                        </div>
                                    </li>

                                    <li className="style2">
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Material Supply</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>House Renovations</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-check"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Welding & Laser</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="table-footer">
                                <div className="btn-box">
                                    <Link className="thm-btn" href="contact">Choose Package
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Pricing One Single*/} 
                </div>
            </div>
        </section>
        {/* End Pricing One*/} 

        {/* Start Brand One*/} 
        <section className="brand-one brand-one--pricing">
            <div className="container">
                <div className="brand-one__inner">

                    <div className="title-box">
                        <div className="border-box"></div>
                        <div className="text">
                            <p>30+ Company & Clients Trust our Work</p>
                        </div>
                        <div className="border-box"></div>
                    </div>

                    <Swiper {...swiperOptions} className="brand-one__carousel owl-carousel owl-theme">
                        <SwiperSlide>
                        {/* Start Brand One Single*/} 
                        <div className="brand-one__single">
                            <div className="brand-one__single-inner">
                                <Link href="#">
                                    <img src="assets/images/brand/brand-1-1.png" alt=""/>
                                    <img src="assets/images/brand/brand-1-2.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        {/* End Brand One Single*/} 
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Brand One Single*/} 
                        <div className="brand-one__single">
                            <div className="brand-one__single-inner">
                                <Link href="#">
                                    <img src="assets/images/brand/brand-1-1.png" alt=""/>
                                    <img src="assets/images/brand/brand-1-2.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        {/* End Brand One Single*/} 
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Brand One Single*/} 
                        <div className="brand-one__single">
                            <div className="brand-one__single-inner">
                                <Link href="#">
                                    <img src="assets/images/brand/brand-1-1.png" alt=""/>
                                    <img src="assets/images/brand/brand-1-2.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        {/* End Brand One Single*/} 
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Brand One Single*/} 
                        <div className="brand-one__single">
                            <div className="brand-one__single-inner">
                                <Link href="#">
                                    <img src="assets/images/brand/brand-1-1.png" alt=""/>
                                    <img src="assets/images/brand/brand-1-2.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        {/* End Brand One Single*/} 
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Brand One Single*/} 
                        <div className="brand-one__single">
                            <div className="brand-one__single-inner">
                                <Link href="#">
                                    <img src="assets/images/brand/brand-1-1.png" alt=""/>
                                    <img src="assets/images/brand/brand-1-2.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        {/* End Brand One Single*/} 
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Brand One Single*/} 
                        <div className="brand-one__single">
                            <div className="brand-one__single-inner">
                                <Link href="#">
                                    <img src="assets/images/brand/brand-1-1.png" alt=""/>
                                    <img src="assets/images/brand/brand-1-2.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        {/* End Brand One Single*/} 
                        </SwiperSlide>
                        <SwiperSlide>
                        {/* Start Brand One Single*/} 
                        <div className="brand-one__single">
                            <div className="brand-one__single-inner">
                                <Link href="#">
                                    <img src="assets/images/brand/brand-1-1.png" alt=""/>
                                    <img src="assets/images/brand/brand-1-2.png" alt=""/>
                                </Link>
                            </div>
                        </div>
                        {/* End Brand One Single*/} 
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        {/* End Brand One*/} 

        </Layout>
        </>
    )
}