'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Team">
        {/* Start Team Two*/} 
        <section className="team-two">
            <div className="container">
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
                                        <h2><Link href="team-details">Kathryn Murphy</Link></h2>
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
                                        <h2><Link href="team-details">Darlene Robertson</Link></h2>
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
                                        <h2><Link href="team-details">Leslie Alexander</Link></h2>
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
                                        <h2><Link href="team-details">Francene Vandyne</Link></h2>
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

                    {/* Start Team Two Single*/} 
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img5.png" alt="#"/>
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
                                        <h2><Link href="team-details">Brooklyn Simmons</Link></h2>
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

                    {/* Start Team Two Single*/} 
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img6.png" alt="#"/>
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
                                        <h2><Link href="team-details">Jenny Wilson</Link></h2>
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
                    <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img7.png" alt="#"/>
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
                                        <h2><Link href="team-details">Savannah Nguyen</Link></h2>
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
                    <div className="col-xl-3 col-lg-6 col-md-6  wow fadeInDown" data-wow-duration="1500ms">
                        <div className="team-two__single">
                            <div className="team-two__single-img">
                                <img src="assets/images/team/team-v2-img8.png" alt="#"/>
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
                                        <h2><Link href="team-details">Bessie Cooper</Link></h2>
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
                </div>
            </div>
        </section>
        {/* End Team Two*/} 

        </Layout>
        </>
    )
}