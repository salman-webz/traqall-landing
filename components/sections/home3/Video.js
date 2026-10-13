'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
       {/* Start Video One*/} 
       <section className="video-one">
            <div className="video-one__bg jarallax"
                style={{ backgroundImage: ' url(assets/images/backgrounds/video-v1-bg.jpg)' }} ></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="container">
                <div className="video-one__inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="video-one__box">
                        <a onClick={() => setOpen(true)} className="video-popup">
                            <div className="video-one__icon">
                                <span className="icon-play-button-arrowhead"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                        <span className="border-animation border-1"></span>
                        <span className="border-animation border-2"></span>
                        <span className="border-animation border-3"></span>
                    </div>

                    <div className="title-box">
                        <h2>Make Constraction your Dream <br/> into Reality</h2>
                    </div>
                </div>
            </div>
        </section>
        {/* End Video One*/} 
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />

       
        </>
    )
}
