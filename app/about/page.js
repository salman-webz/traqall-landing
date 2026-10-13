'use client'
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Link from "next/link"
import HowItWorks from "@/components/sections/HowItWorks"
import { SITE_ASSETS } from "@/lib/site-assets"
export default function AboutPage() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">

        <About />

        {/* Start About Two*/} 
        <section className="about-two">
            <div className="container">
                <div className="row">
                    {/* Start About Two Left*/} 
                    <div className="col-xl-3 col-lg-6 wow fadeInLeft" data-wow-delay="0ms">
                        <div className="about-two__left">
                            <div className="about-two__left-img">
                                <img src={SITE_ASSETS.aboutV2Img1} alt="TraqAll timecards and operations on mobile and desktop"/>
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
                                    <h3>Trusted by construction<br/> teams everywhere</h3>
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
                                <h2 className="sec-title__title tg-element-title">We Manage Your Mess —<br/> So You Can Manage the Job
                                </h2>
                            </div>

                            <div className="about-two__middle-text">
                                <p>TraqAll is a field-operations platform built for construction teams. We help supervisors, project managers, and crews track timecards, equipment, materials, small tools, and site issues from one command center.</p>
                            </div>

                            <div className="about-two__middle-text2">
                                <ul>
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-house"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Timecards &<br/> crew management</h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-engineer"></span>
                                        </div>

                                        <div className="title-box">
                                            <h3>Equipment &<br/> materials tracking</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__middle-btn">
                                <Link className="thm-btn" href="services">Explore modules
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
                                <p>Construction projects generate chaos — scattered timesheets, lost tools, untracked materials, and unresolved site issues. TraqAll brings it all together so your team spends less time chasing data and more time building.
                                </p>
                            </div>

                            <div className="about-two__right-img">
                                <img src={SITE_ASSETS.aboutV2Img2} alt="TraqAll equipment and fleet management dashboard"/>
                            </div>
                        </div>
                    </div>
                    {/* End About Two Right*/} 
                </div>
            </div>
        </section>
        {/* End About Two*/} 

        {/* Start Why Choose One*/} 
        <section className="why-choose-one">
            <div className="why-choose-one__bg"
                style={{ backgroundImage: ` url(${SITE_ASSETS.whyChooseBg})` }}></div>
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
                                    <h4>Why TraqAll</h4>
                                </div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">One Platform for Labor,<br/> Assets & Site Operations
                            </h2>
                        </div>

                        <div className="why-choose-one__content-text">
                            <p>From the job site to the office, TraqAll gives construction teams the visibility they need. Track hours by cost code, monitor fleet status, manage inventory, and resolve issues before they become costly delays.</p>
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
                                            <h3>Real-Time Field<br/> Visibility</h3>
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
                                            <h3>Fast Approvals &<br/> Reporting</h3>
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
                                            <h3>Cost Code<br/> Allocation</h3>
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
                                            <h3>Built for Construction<br/> Teams</h3>
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

        <HowItWorks />

        {/* Start Team Two*/} 
        <section className="team-two hide">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Great Team</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">The People Behind TraqAll</h2>
                </div>

                <div className="row">

                    {/* Start Team Two Single*/} 
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src={SITE_ASSETS.teamV2Img1} alt="Sarah Mitchell"/>
                            </div>

                            <div className="team-two__single-content">
                                <div className="team-two__single-content-inner">

                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="icon-twitter1"></i></Link>
                                                </li>
                                                <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                <li><Link href="#"><i className="icon-vimeo"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="text-box">
                                        <h2><Link href="team-details">Sarah Mitchell</Link></h2>
                                        <p>Product Lead</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-email"></span> <Link href="mailto:product@traqall.com">product@traqall.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* End Team Two Single*/} 

                    {/* Start Team Two Single*/} 
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src={SITE_ASSETS.teamV2Img2} alt="James Rodriguez"/>
                            </div>

                            <div className="team-two__single-content">
                                <div className="team-two__single-content-inner">

                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="icon-twitter1"></i></Link>
                                                </li>
                                                <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                <li><Link href="#"><i className="icon-vimeo"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="text-box">
                                        <h2><Link href="team-details">James Rodriguez</Link></h2>
                                        <p>Field Operations</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-email"></span> <Link href="mailto:fieldops@traqall.com">fieldops@traqall.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* End Team Two Single*/} 

                    {/* Start Team Two Single*/} 
                    <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src={SITE_ASSETS.teamV2Img3} alt="Leslie Alexander"/>
                            </div>

                            <div className="team-two__single-content">
                                <div className="team-two__single-content-inner">

                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="icon-twitter1"></i></Link>
                                                </li>
                                                <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                <li><Link href="#"><i className="icon-vimeo"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="text-box">
                                        <h2><Link href="team-details">Leslie Alexander</Link></h2>
                                        <p>Customer Success</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-email"></span> <Link href="mailto:success@traqall.com">success@traqall.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* End Team Two Single*/} 

                    {/* Start Team Two Single*/} 
                    <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInDown" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src={SITE_ASSETS.teamV2Img4} alt="Marcus Chen"/>
                            </div>

                            <div className="team-two__single-content">
                                <div className="team-two__single-content-inner">

                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link href="#"><i className="icon-facebook-app-symbol"></i></Link></li>
                                                <li><Link href="#"><i className="icon-twitter1"></i></Link>
                                                </li>
                                                <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                <li><Link href="#"><i className="icon-vimeo"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="text-box">
                                        <h2><Link href="team-details">Marcus Chen</Link></h2>
                                        <p>Engineering Lead</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-email"></span> <Link href="mailto:engineering@traqall.com">engineering@traqall.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* End Team Two Single*/} 
                </div>
            </div>
        </section>
        {/* End Team Two*/} 
        </Layout>
        </>
    )
}


