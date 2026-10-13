'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
export default function About() {
    return (
        <>

        {/* Start About Two*/} 
        <section className="about-two">
            <div className="container">
                <div className="row">
                    {/* Start About Two Left*/} 
                    <div className="col-xl-3 col-lg-6 wow fadeInLeft" data-wow-delay="0ms">
                        <div className="about-two__left">
                            <div className="about-two__left-img">
                                <img src="assets/images/about/about-v2-img1.jpg" alt=""/>
                            </div>

                            <div className="about-two__left-bottom">
                                <div className="about-two__left-bottom-img">
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

                                <div className="about-two__left-bottom-text count-box">
                                    <h3>We have <span className="count-text">2563</span>+
                                        Global <br/>
                                        Active Clients</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End About Two Left*/} 

                    {/* Start About Two Middle*/} 
                    <div className="col-xl-5 col-lg-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="about-two__middle">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>About us</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">The timeline varies <br/> based on project
                                    <br/> scope
                                    complexity</h2>
                            </div>

                            <div className="about-two__middle-text">
                                <p>Real estate is a term that refers to property consisting of land and the buildings on
                                    it crops, minerals or water. </p>
                            </div>

                            <div className="about-two__middle-text2">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-house"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Rental property <br/> management</h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-engineer"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Interior design <br/> and staging</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__middle-btn">
                                <Link className="thm-btn" href="about">Read more
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Start About Two Middle*/} 

                    {/* Start About Two Right*/} 
                    <div className="col-xl-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-two__right">
                            <div className="about-two__right-text">
                                <p>Properties used for manufacturing kinds production, distribution activities fall and
                                    factories, distribution centers.It is a long established fact that a reader will be
                                    distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>

                            <div className="about-two__right-img">
                                <img src="assets/images/about/about-v2-img2.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* End About Two Right*/} 
                </div>
            </div>
        </section>
        {/* End About Two*/} 

        
        </>
    )
}
