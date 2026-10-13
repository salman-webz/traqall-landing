'use client'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"
import { HOME_ASSETS } from "@/lib/home-assets"
export default function About() {
    return (
        <>
        {/* Start About One*/} 
        <section className="about-one">
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/about-v1-shape1.png" alt=""/></div>
            <div className="shape2"><img src="assets/images/shapes/about-v1-shape2.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start About One Counter*/} 
                    <div className="col-xl-3 col-lg-4 col-md-4 wow fadeInLeft" data-wow-delay="0ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__counter">
                            <ul className="about-one__counter-box">
                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={5} /></h2>
                                        <span>+</span>
                                    </div>
                                    <div className="text">
                                        <p>Core Modules</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={100} /></h2>
                                        <span>%</span>
                                    </div>
                                    <div className="text">
                                        <p>Field Visibility</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={24} /></h2>
                                        <span>/7</span>
                                    </div>
                                    <div className="text">
                                        <p>Platform Access</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="count-box">
                                    <h2>  <CounterUp end={1} /></h2>
                                        <span></span>
                                    </div>
                                    <div className="text">
                                        <p>Unified Dashboard</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End About One Counter*/} 

                    {/* Start About One Img*/} 
                    <div className="col-xl-4 col-lg-8 col-md-8 wow fadeInRight" data-wow-delay="100ms"
                        data-wow-duration="1500ms">
                        <div className="about-one__img">
                            <div className="about-one__img1">
                                <img src={HOME_ASSETS.aboutImg1} alt="Construction team reviewing plans on site"/>
                            </div>

                            <div className="about-one__img2">
                                <img src={HOME_ASSETS.aboutImg2} alt="Supervisor using tablet for field operations"/>
                            </div>
                        </div>
                    </div>
                    {/* End About One Img*/} 

                    {/* Start About One Content*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-one__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>About us</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">One Platform for Every<br/> Field Operation
                                </h2>
                            </div>

                            <div className="about-one__content-text">
                                <p>TraqAll is a construction field-operations platform that helps teams track labor, equipment, materials, and site issues from a single command center — so nothing gets lost between the job site and the office.</p>
                            </div>

                            <div className="about-one__content-text2">
                                <ul className="about-one__content-list">
                                    <li>
                                        <p>Timecards & Crew Management</p>
                                    </li>
                                    <li>
                                        <p>Equipment & Materials Tracking</p>
                                    </li>
                                    <li>
                                        <p>Issues & Site Reporting</p>
                                    </li>
                                </ul>

                            </div>

                            <div className="about-one__content-btn">
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
                    {/* End About One Content*/} 
                </div>
            </div>
        </section>
        {/* End About One*/} 
        
        </>
    )
}
