import Link from "next/link"

export default function Footer1() {
    return (
        <>
           
        {/* Start Site Footer*/} 
        <footer className="site-footer">
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/footer-v1-shape1.png" alt=""/></div>
            <div className="shape2 float-bob-y"><span className="icon-pattern"></span></div>
            {/* Start Site Footer Top*/} 
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="site-footer__logo">
                            <Link href="/"><img src="assets/images/logo/traqall-logo-darke-bg.png" width="160" height="40" alt="TraqAll"/></Link>
                        </div>

                        <div className="site-footer__subscribe-form">
                            <form className="subscribe-form" action="#">
                                <input type="email" name="email" placeholder="Enter Your Email"/>
                                <button type="submit" className="thm-btn">Sign up
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </button>
                            </form>
                        </div>

                        <div className="site-footer__social-links">
                            <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                            <Link href="#"><span className="icon-twitter1"></span></Link>
                            <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                            <Link href="#"><span className="icon-behance"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Top*/} 

            {/* Start Site Footer Middle*/} 
            <div className="site-footer__middle site-footer__middle--three-columns">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__single footer-widget__services">
                                <div className="title-box">
                                    <h2>Our Solutions</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__list">
                                    <li><Link href="/timecards"><span className="icon-chevron"></span> Timecards</Link></li>
                                    <li><Link href="/equipment"><span className="icon-chevron"></span> Equipment</Link></li>
                                    <li><Link href="/materials"><span className="icon-chevron"></span> Materials</Link></li>
                                    <li><Link href="/small-tools"><span className="icon-chevron"></span> Small Tools</Link></li>
                                    <li><Link href="/issues"><span className="icon-chevron"></span> Issues</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__single footer-widget__useful-links">
                                <div className="title-box">
                                    <h2>Useful Links</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__list">
                                    <li><Link href="/"><span className="icon-chevron"></span> Home</Link></li>
                                    <li><Link href="/about"><span className="icon-chevron"></span> About</Link></li>
                                    <li><Link href="/services"><span className="icon-chevron"></span> Solutions</Link></li>
                                    <li><Link href="/blog"><span className="icon-chevron"></span> Blog</Link></li>
                                    <li><Link href="/contact"><span className="icon-chevron"></span> Contact us</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__single footer-widget__contact">
                                <div className="title-box">
                                    <h2>Contact Us</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__contact-list">
                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-maps-and-flags"></span>
                                        </div>

                                        <div className="text-box">
                                            <p>Syracuse, Connecticut-17A<br/> Field Operations Support</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-telephone-call"></span>
                                        </div>

                                        <div className="text-box">
                                            <p><Link href="/contact">Schedule a TraqAll Demo</Link></p>
                                            <p><Link href="/faq">Visit Support Center</Link></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-email"></span>
                                        </div>

                                        <div className="text-box">
                                            <p><Link href="mailto:support@traqall.com">support@traqall.com</Link></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Site Footer Middle*/} 

            {/* Start Site Footer Bottom*/} 
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <div className="site-footer__copyright">
                                    <p>Copyright@ 2025 <Link href="/">TraqAll</Link>. All Rights Reserved.</p>
                                </div>

                                <ul className="site-footer__bottom-menu">
                                    <li><Link href="/about">Setting & Privacy </Link></li>
                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/contact">Support</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Bottom*/} 
        </footer>
        {/* End Site Footer*/} 

        
        </>
    )
}
