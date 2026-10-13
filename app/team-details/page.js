'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team Details">
        {/* Start Team Details*/} 
        <section className="team-details">
            <div className="container">
                <div className="team-details__top">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="team-details__top-img">
                                <div className="inner">
                                    <img src="assets/images/team/team-details-img1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="team-details__content">
                                <div className="team-details__content-text1">
                                    <h2>Ralph Edwards</h2>
                                    <p className="text1">Construction Services</p>
                                    <p className="text2">The duration of a project depends on its scope and complexity. We
                                        provide a detailed timeline after the initial consultation The duration of a
                                        project depends on its scope and complexity. We provide a detailed </p>
                                </div>

                                <div className="team-details__content-text2">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="team-details__content-text2-single">
                                                <ul>
                                                    <li>
                                                        <p>Best Quality Services</p>
                                                    </li>
                                                    <li>
                                                        <p>Time Saving</p>
                                                    </li>
                                                </ul>

                                                <div className="contact-box">
                                                    <div className="icon-box">
                                                        <span className="icon-email"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Email Address</p>
                                                        <h2><Link href="mailto:yourmail@email.com">Info@gmail.com</Link>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="team-details__content-text2-single">
                                                <ul>
                                                    <li>
                                                        <p>Meet the Dad-lines</p>
                                                    </li>
                                                    <li>
                                                        <p>24/7 Customer Support</p>
                                                    </li>
                                                </ul>

                                                <div className="contact-box">
                                                    <div className="icon-box">
                                                        <span className="icon-telephone-call"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Phone Number</p>
                                                        <h2><Link href="tel:1234567890">+ (704) 555-0127</Link>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="team-details__social-links">
                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                    <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                    <Link href="#"><span className="icon-twitter-1"></span></Link>
                                </div>

                                <div className="team-details__progress">
                                    <div className="title-box">
                                        <h2>Professional Skills</h2>
                                    </div>
                                    <ul className="why-choose-two__progress">
                                        <li>
                                            <div className="why-choose-two__progress-single">
                                                <div className="title-box">
                                                    <p>Elite Renovations</p>
                                                </div>

                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                                        <div className="count-text">90%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="why-choose-two__progress-single">
                                                <div className="title-box">
                                                    <p>Precision Builds</p>
                                                </div>

                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="85%" style={{ width: '85%' }}>
                                                        <div className="count-text">85%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Team Details*/} 

        {/* Start Team Two*/} 
        <section className="team-two team-two--team-details">
            <div className="container">
                <div className="title-box text-center">
                    <h2>Professional Constructio Team</h2>
                    <p>Our commitment to quality craftsmanship, customer satisfaction, and innovative construction
                        solutions sets <br/> us apart. We pride ourselves on delivering projects on time and within
                        budget.
                    </p>
                </div>

                <div className="row">
                    {/* Start Team Two Single*/} 
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img1.png" alt="#"/>
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
                                        <h2><Link href="#">Kathryn Murphy</Link></h2>
                                        <p>Systems analyst</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-phone-call"></span> <Link href="tel:1234567890">(704)
                                                555-0127</Link>
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
                                <img src="assets/images/team/team-v2-img2.png" alt="#"/>
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
                                        <h2><Link href="#">Darlene Robertson</Link></h2>
                                        <p>Team Leader</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-phone-call"></span> <Link href="tel:1234567890">(704)
                                                555-0127</Link>
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
                                <img src="assets/images/team/team-v2-img3.png" alt="#"/>
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
                                        <h2><Link href="#">Leslie Alexander</Link></h2>
                                        <p>General Manager</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-phone-call"></span> <Link href="tel:1234567890">(704)
                                                555-0127</Link>
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
                                <img src="assets/images/team/team-v2-img4.png" alt="#"/>
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
                                        <h2><Link href="#">Francene Vandyne</Link></h2>
                                        <p>Project Manager</p>
                                    </div>
                                    <div className="number">
                                        <p><span className="icon-phone-call"></span> <Link href="tel:1234567890">(704)
                                                555-0127</Link>
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