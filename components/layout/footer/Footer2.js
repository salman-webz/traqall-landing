import Link from "next/link"

export default function Footer2() {
    return (
        <>
           
        {/* Start Site Footer Two*/} 
        <footer className="site-footer site-footer--two">
            {/* Start Site Footer Two Top*/} 
            <div className="site-footer--two__top">
                <div className="site-footer--two__top-bg"
                    style={{ backgroundImage: ' url(assets/images/backgrounds/footer-v2-top-bg.jpg)' }}></div>
                <div className="site-footer--two__top-shape float-bob-y"><img
                        src="assets/images/shapes/footer-v2-shape1.png" alt=""/>
                </div>
                <div className="container">
                    <div className="site-footer--two__top-inner">
                        <div className="site-footer__logo">
                            <Link href="/"><img src="assets/images/resources/logo-4.png" alt=""/></Link>
                        </div>
                        <div className="site-footer--two__top-right">
                            <div className="text-box">
                                <h2>Lets Request A Schedule <br/> For Free Consultion</h2>
                            </div>

                            <div className="btn-box">
                                <Link className="thm-btn" href="contact">Get free quote
                                    <i className="icon-next"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Two Top*/} 

            {/* Start Site Footer Middle*/} 
            <div className="site-footer__middle">
                <div className="site-footer__middle-pattern"
                    style={{ backgroundImage: ' url(assets/images/pattern/footer-v2-pattern.png)' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__single footer-widget__services">
                                <div className="title-box">
                                    <h2>Our Services</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__list">
                                    <li><Link href="services"><span className="icon-chevron"></span> Property Pulse</Link>
                                    </li>
                                    <li><Link href="services"><span className="icon-chevron"></span> Renovation Rescue</Link>
                                    </li>
                                    <li><Link href="services"><span className="icon-chevron"></span> Property
                                            Maintenance</Link></li>
                                    <li><Link href="services"><span className="icon-chevron"></span> Security Services</Link>
                                    </li>
                                    <li><Link href="services"><span className="icon-chevron"></span> Relocation
                                            assistance</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__single footer-widget__useful-links">
                                <div className="title-box">
                                    <h2>Useful Links</h2>
                                    <div className="line"></div>
                                </div>

                                <ul className="footer-widget__list">
                                    <li><Link href="/"><span className="icon-chevron"></span> Home</Link></li>
                                    <li><Link href="#"><span className="icon-chevron"></span> Pages</Link></li>
                                    <li><Link href="services"><span className="icon-chevron"></span> Services</Link></li>
                                    <li><Link href="portfolio"><span className="icon-chevron"></span> Portfolio</Link></li>
                                    <li><Link href="contact"><span className="icon-chevron"></span> Contact us</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
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
                                            <p>2118 Thornridge Cir. Syracuse <br/> Connecticut 35624</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-telephone-call"></span>
                                        </div>

                                        <div className="text-box">
                                            <p><Link href="tel:1234567890">+517 845 74589</Link></p>
                                            <p><Link href="tel:1234567890">+517 845 74589</Link></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="icon-box">
                                            <span className="icon-email"></span>
                                        </div>

                                        <div className="text-box">
                                            <p><Link href="mailto:yourmail@email.com">help24/7@Billdins.com</Link></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="footer-widget__single footer-widget__recent-post">
                                <div className="title-box">
                                    <h2>Recent Post</h2>
                                    <div className="line"></div>
                                </div>
                                <ul className="footer-widget__recent-post-list">
                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/footer-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <p><span className="icon-calendar"></span> 20 Jun, 2024</p>
                                            <h3><Link href="blog">Where Dreams Find <br/> a Home</Link></h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/footer-v2-img2.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <p><span className="icon-calendar"></span> 20 Jun, 2024</p>
                                            <h3><Link href="blog">Elevating Real Estate <br/> Experiences</Link></h3>
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
                                    <p>Copyright@ 2025 <Link href="/">Billdins</Link>. All Rights Reserved.</p>
                                </div>
                                <ul className="site-footer__payment">
                                    <li><Link href="#"><img src="assets/images/resources/site-footer-payment-img1.png"
                                                alt=""/></Link></li>
                                    <li><Link href="#"><img src="assets/images/resources/site-footer-payment-img2.png"
                                                alt=""/></Link></li>
                                    <li><Link href="#"><img src="assets/images/resources/site-footer-payment-img3.png"
                                                alt=""/></Link></li>
                                    <li><Link href="#"><img src="assets/images/resources/site-footer-payment-img4.png"
                                                alt=""/></Link></li>
                                    <li><Link href="#"><img src="assets/images/resources/site-footer-payment-img5.png"
                                                alt=""/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Site Footer Bottom*/} 

        </footer>
        {/* End Site Footer Two*/}

        
        </>
    )
}
