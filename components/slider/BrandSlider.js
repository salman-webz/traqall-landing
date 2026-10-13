'use client'
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

export default function BrandSlider() {
    return (
        <>


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
            </Swiper>
        </>
    )
}
