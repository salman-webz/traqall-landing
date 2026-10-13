
'use client'
import Link from "next/link"
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
            slidesPerView: 2,
            
        },
        767: {
            slidesPerView: 4,
            
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
export default function Brand() {
    return (
        <>
        {/* Start Brand One*/} 
        <section className="brand-one">
            <div className="container">
                <div className="brand-one__inner">
                    <div className="brand-one__pattern"
                        style={{ backgroundImage: ' url(assets/images/pattern/brand-v1-pattern.png)' }} ></div>

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

    
        </>
    )
}
