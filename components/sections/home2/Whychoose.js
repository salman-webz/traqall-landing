'use client'
import Link from "next/link"

export default function Team() {
    return (
        <>
        
        {/* Start Why Choose One*/} 
        <section className="why-choose-one">
            <div className="why-choose-one__bg"
                style={{ backgroundImage: ' url(assets/images/resources/why-choose-v1-bg.jpg)' }} ></div>
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <div className="shape4"></div>
            <div className="shape5"></div>
            <div className="shape6"></div>
            <div className="shape7"></div>
            <div className="shape8"></div>
            <div className="shape9"></div>
            <div className="shape10 float-bob-y"><img src="assets/images/shapes/why-choose-v1-shape1.png" alt=""/></div>
            <div className="container clearfix">
                <div className="why-choose-one__inner">
                    <div className="why-choose-one__content">
                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <div className="left-line"></div>
                                <div className="text tg-element-title">
                                    <h4>Why we Choose Us</h4>
                                </div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Find Your Perfect Space We <br/> Make It Home
                            </h2>
                        </div>

                        <div className="why-choose-one__content-text">
                            <p>Real estate is a significant asset class that plays a crucial role in economies kinds
                                worldwide, providing housing, workspace, and infrastructure essential for modern
                                societies during the initial consultation.</p>
                        </div>

                        <div className="why-choose-one__content-bottom">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-raw-materials"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Using Qualityfull <br/> Materials</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-support"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Quickly Finished <br/> your work</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-income"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Affordable Pricing <br/> your Work</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div className="why-choose-one__content-single">
                                        <div className="icon-box">
                                            <span className="icon-costumer"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Clients Satisfaction <br/> Guarantees</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Why Choose One*/}  
        
        </>
    )
}
