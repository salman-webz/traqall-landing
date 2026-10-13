'use client'
import Link from "next/link"
export default function Subscribe() {
    return (
        <>
       {/* Start Subscribe One*/} 
       <section className="subscribe-one">
            <div className="shape1"><img src="assets/images/shapes/subscribe-v1-shape1.png" alt=""/></div>
            <div className="container">
                <div className="subscribe-one__inner clearfix">

                    <div className="subscribe-one__content clearfix wow fadeInRight" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution</p>


                        <div className="subscribe-one__form">
                            <form className="subscribe-form" action="#">
                                <input type="email" name="email" placeholder="Enter Your Email"/>
                                <button type="submit" className="thm-btn">Subscribe Now
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Subscribe One*/} 
       
        </>
    )
}
