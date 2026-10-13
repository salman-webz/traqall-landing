
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact">
        {/* Start Contact Page*/} 
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    {/* Start Contact Page Contact Info*/} 
                    <div className="col-xl-6">
                        <div className="contact-page__contact-info">
                            <div className="title-box">
                                <h2>Contact Information</h2>
                            </div>

                            <div className="contact-page__contact-info-box">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-telephone-call"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Phone Number :</h3>
                                                <p><Link href="tel:1234567890">+517 845 74589</Link></p>
                                                <p><Link href="tel:1234567890">+517 845 74589</Link></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-email-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Email Address</h3>
                                                <p><Link href="mailto:yourmail@email.com">help24/7@Beilding.com</Link></p>
                                                <p><Link href="mailto:yourmail@email.com">help24/7@Beilding.com</Link></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-maps-and-flags"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Our Address</h3>
                                                <p>2118 Thorn ridge Cir. <br/> Syracuse Connecticut</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="contact-page__contact-info-single">
                                            <div className="icon-box">
                                                <span className="icon-time"></span>
                                            </div>

                                            <div className="content-box">
                                                <h3>Working Time</h3>
                                                <p>Sunday to Friday : <br/>
                                                    10 Am 05PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-page__contact-info-bottom">
                                <div className="text-box">
                                    <h2>Follow The Social Media:</h2>
                                    <p>Algae can quickly take over a Cleanig if not addressed promptly. Learn effective.
                                    </p>
                                </div>

                                <div className="social-links">
                                    <ul>
                                        <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                        <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                        <li><Link href="#"><span className="icon-whatsapp"></span></Link></li>
                                        <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                        <li><Link href="#"><span className="icon-linkedin-big-logo"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Contact Page Contact Info*/} 

                    {/* Start Contact Page Form*/} 
                    <div className="col-xl-6">
                        <div className="contact-page__form">
                            <div className="title-box">
                                <h2>Get In Touch</h2>
                            </div>
                            <form className="contact-form-validated contact-page__form-box"
                                action="assets/inc/sendemail.php" method="post" >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="name" placeholder="Name" required=""/>
                                            <div className="icon"><span className="icon-user"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="email" name="email" placeholder="Email" required=""/>
                                            <div className="icon"><span className="icon-email"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="Phone" placeholder="Phone" required=""/>
                                            <div className="icon"><span className="icon-telephone-call"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide">
                                                    <option >Subject</option>
                                                    <option>Freight Type 01</option>
                                                    <option>Freight Type 02</option>
                                                    <option>Freight Type 03</option>
                                                    <option>Freight Type 04</option>
                                                    <option>Freight Type 05</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-xl-12">
                                        <div className="input-box">
                                            <textarea name="message" placeholder="Message"></textarea>
                                            <div className="icon style2"><span className="fa fa-pencil"></span></div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="contact-page__form-btn">
                                            <button type="submit" className="thm-btn">
                                                Submit Now
                                                <i className="icon-next"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                    {/* End Contact Page Form*/} 

                </div>
            </div>
        </section>
        {/* End Contact Page*/} 

        {/* Start Google Map One*/} 
        <section className="google-map-one">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6209.242755903148!2d-77.04363602434464!3d38.90977276948481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1394992895496"
                className="google-map-one__map">
            </iframe>
        </section>
        {/* End Google Map One*/} 

        </Layout>
        </>
    )
}