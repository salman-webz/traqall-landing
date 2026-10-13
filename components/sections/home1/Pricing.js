'use client'
import Link from "next/link"
import { useState } from "react"
import { HOME_ASSETS } from "@/lib/home-assets"
export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        {/* Start Pricing One*/} 
        <section className="pricing-one clearfix">
            <div className="pricing-one__bg"
                style={{ backgroundImage: ` url(${HOME_ASSETS.pricingBg})` }}>
            </div>
            <div className="shape2 wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="600ms">
                <img src="assets/images/shapes/pricing-v1-shape2.png" alt=""/>
            </div>
            <div className="shape3 wow fadeInDown" data-wow-duration="1500ms" data-wow-delay="600ms">
                <img src="assets/images/shapes/pricing-v1-shape3.png" alt=""/>
            </div>

            <div className="container">
                <div className="sec-title tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Pricing plans</h4>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Plans That Scale With Your Crew</h2>
                </div>
                <div className="pricing-one__inner">
                    <div className="pricing-one__tab">
                        <div className="pricing-one__tab-btn">
                            <ul className="tabs-button-box clearfix">
                                <li className={activeIndex == 1 ? "tab-btn-item active-btn-item" : "tab-btn-item"} onClick={() => handleOnClick(1)}>
                                    <h3>Monthly</h3>
                                </li>
                                <li className={activeIndex == 2 ? "tab-btn-item active-btn-item" : "tab-btn-item"} onClick={() => handleOnClick(2)}>
                                    <h3>Yearly</h3>
                                </li>
                            </ul>
                        </div>

                        <div className="tabs-content-box">

                            {/* Start Tab*/} 
                            <div className={activeIndex == 1 ? "tab-content-box-item tab-content-box-item-active" : "tab-content-box-item"}>
                                <div className="pricing-one-tab-content-box-item">
                                    <div className="single-pricing-one-tab">
                                        <div className="row">

                                            {/* Start Single Pricing One*/} 
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="pricing-one__single wow fadeInUp" data-wow-duration="1000ms"
                                                    data-wow-delay="00ms">
                                                    <div className="shape1"><img
                                                            src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                                    </div>
                                                    <div className="plan-box">
                                                        <p>Starter</p>
                                                    </div>
                                                    <div className="table-header">
                                                        <h2>Contact</h2>
                                                        <p>Per month</p>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Timecards module</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Equipment tracking</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Materials inventory</p>
                                                                </div>
                                                            </li>

                                                            <li className="style2">
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Small tools tracking</p>
                                                                </div>
                                                            </li>

                                                            <li className="style2">
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Issues & incident reporting</p>
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
                                            {/* End Single Pricing One*/} 
                                            {/* Start Single Pricing One*/} 
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="pricing-one__single wow fadeInUp" data-wow-duration="1000ms"
                                                    data-wow-delay="300ms">
                                                    <div className="shape1"><img
                                                            src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                                    </div>
                                                    <div className="plan-box">
                                                        <p>Professional</p>
                                                    </div>
                                                    <div className="table-header">
                                                        <h2>Contact</h2>
                                                        <p>Per month</p>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Timecards module</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Equipment tracking</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Materials inventory</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Small tools tracking</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Issues & incident reporting</p>
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
                                            {/* End Single Pricing One*/} 
                                            {/* Start Single Pricing One*/} 
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="pricing-one__single wow fadeInUp" data-wow-duration="1000ms"
                                                    data-wow-delay="600ms">
                                                    <div className="shape1"><img
                                                            src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                                    </div>
                                                    <div className="plan-box">
                                                        <p>Enterprise</p>
                                                    </div>
                                                    <div className="table-header">
                                                        <h2>Contact</h2>
                                                        <p>Per month</p>
                                                    </div>

                                                    <div className="table-content">
                                                        <ul>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Timecards module</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Equipment tracking</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Materials inventory</p>
                                                                </div>
                                                            </li>

                                                            <li className="style2">
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Small tools tracking</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Issues & incident reporting</p>
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
                                            {/* End Single Pricing One*/} 

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tab*/} 
                            {/* Start Tab*/} 
                            <div className={activeIndex == 2 ? "tab-content-box-item tab-content-box-item-active" : "tab-content-box-item"}>
                                <div className="pricing-one-tab-content-box-item">
                                    <div className="single-pricing-one-tab">
                                        <div className="row">

                                            {/* Start Single Pricing One*/} 
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="pricing-one__single wow fadeInUp" data-wow-duration="1000ms"
                                                    data-wow-delay="00ms">
                                                    <div className="shape1"><img
                                                            src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                                    </div>
                                                    <div className="plan-box">
                                                        <p>Starter</p>
                                                    </div>
                                                    <div className="table-header">
                                                        <h2>Contact</h2>
                                                        <p>Per month</p>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Timecards module</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Equipment tracking</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Materials inventory</p>
                                                                </div>
                                                            </li>

                                                            <li className="style2">
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Small tools tracking</p>
                                                                </div>
                                                            </li>

                                                            <li className="style2">
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Issues & incident reporting</p>
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
                                            {/* End Single Pricing One*/} 
                                            {/* Start Single Pricing One*/} 
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="pricing-one__single wow fadeInUp" data-wow-duration="1000ms"
                                                    data-wow-delay="300ms">
                                                    <div className="shape1"><img
                                                            src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                                    </div>
                                                    <div className="plan-box">
                                                        <p>Professional</p>
                                                    </div>
                                                    <div className="table-header">
                                                        <h2>Contact</h2>
                                                        <p>Per month</p>
                                                    </div>
                                                    <div className="table-content">
                                                        <ul>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Timecards module</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Equipment tracking</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Materials inventory</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Small tools tracking</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Issues & incident reporting</p>
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
                                            {/* End Single Pricing One*/} 
                                            {/* Start Single Pricing One*/} 
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="pricing-one__single wow fadeInUp" data-wow-duration="1000ms"
                                                    data-wow-delay="600ms">
                                                    <div className="shape1"><img
                                                            src="assets/images/shapes/pricing-v1-shape1.png" alt=""/>
                                                    </div>
                                                    <div className="plan-box">
                                                        <p>Enterprise</p>
                                                    </div>
                                                    <div className="table-header">
                                                        <h2>Contact</h2>
                                                        <p>Per month</p>
                                                    </div>

                                                    <div className="table-content">
                                                        <ul>
                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Timecards module</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Equipment tracking</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Materials inventory</p>
                                                                </div>
                                                            </li>

                                                            <li className="style2">
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Small tools tracking</p>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="icon-box">
                                                                    <span className="icon-check"></span>
                                                                </div>

                                                                <div className="text-box">
                                                                    <p>Issues & incident reporting</p>
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
                                            {/* End Single Pricing One*/} 

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tab*/} 

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Pricing One*/} 
        
            
        </>
    )
}
