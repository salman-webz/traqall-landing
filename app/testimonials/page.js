'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 30, 
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 2,
            
        },
        767: {
            slidesPerView: 3,
            
        },
        991: {
            slidesPerView: 3,
            
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
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Testimonials">
        

        {/* Start Testimonial Three*/} 
        <section className="testimonial-three testimonial-three--testimonial">
            <div className="container">
                <div className="row">

                    {/* Start Testimonial Three Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
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
                    </div>
                    {/* End Testimonial Three Single*/} 

                    {/* Start Testimonial Three Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
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
                    </div>
                    {/* End Testimonial Three Single*/} 

                    {/* Start Testimonial Three Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
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
                    </div>
                    {/* End Testimonial Three Single*/} 

                    {/* Start Testimonial Three Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="testimonial-three__single text-center">
                            <div className="testimonial-three__single-img">
                                <img src="assets/images/testimonial/testimonial-v3-img4.jpg" alt=""/>
                            </div>
                            <div className="testimonial-three__single-inner">
                                <h2>Camron Williamson</h2>
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
                    </div>
                    {/* End Testimonial Three Single*/} 

                    {/* Start Testimonial Three Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="testimonial-three__single text-center">
                            <div className="testimonial-three__single-img">
                                <img src="assets/images/testimonial/testimonial-v3-img5.jpg" alt=""/>
                            </div>
                            <div className="testimonial-three__single-inner">
                                <h2>Brooklyn Simmons</h2>
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
                    </div>
                    {/* End Testimonial Three Single*/} 

                    {/* Start Testimonial Three Single*/} 
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="testimonial-three__single text-center">
                            <div className="testimonial-three__single-img">
                                <img src="assets/images/testimonial/testimonial-v3-img6.jpg" alt=""/>
                            </div>
                            <div className="testimonial-three__single-inner">
                                <h2>Raphel Edwar</h2>
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
                    </div>
                    {/* End Testimonial Three Single*/} 
                </div>
            </div>
        </section>
        {/* End Testimonial Three*/} 

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