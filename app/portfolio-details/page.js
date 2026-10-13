import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Portfolio Details">
        {/* Start Portfolio Details*/} 
        <section className="portfolio-details">
            <div className="container">
                <div className="portfolio-details__img1">
                    <img src="assets/images/project/portfolio-details1.jpg" alt=""/>
                </div>

                <div className="portfolio-details__text1">
                    <h2>Some Work from our Memorable Gallery</h2>
                    <p className="text1">There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words which don’t look
                        even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                        t.variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which don’t look even slightly believable. If
                        you are going</p>
                    <p className="text2">There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words which don’t look
                        even slightly believable. If you are going to use a passage</p>
                </div>

                <div className="portfolio-details__bottom">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="portfolio-details__bottom-left">
                                <div className="portfolio-details__bottom-left-text1">
                                    <h2>Your Partner in Building Excellence</h2>
                                    <p className="text1">Our commitment to quality craftsmanship, customer satisfaction, and
                                        innovative construction solutions sets us apart. We pride ourselves on
                                        delivering projects on time and within budget we are fully licensed and insured,
                                        meeting all regulatory requirements to ensure the highest standards of safety
                                        and quality.</p>
                                    <p className="text2">The duration of a project depends on its scope and complexity. We
                                        provide a detailed timeline after the initial your as consultation Construction
                                        of amusement parks and adventure zones specifically for children Building
                                        museums and science centers, and educational spaces with interactive exhibits
                                    </p>

                                    <div className="portfolio-details__bottom-left-text1-list">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <ul className="portfolio-details__bottom-left-text1-list-box">
                                                    <li>
                                                        <p><span className="icon-verified"></span> Precision in Every Detail
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p><span className="icon-verified"></span> Innovation in
                                                            Construction
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <ul className="portfolio-details__bottom-left-text1-list-box">
                                                    <li>
                                                        <p><span className="icon-verified"></span> Urban Development
                                                            Services
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p><span className="icon-verified"></span> Craftsmanship
                                                            Construction
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="portfolio-details__bottom-img">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="portfolio-details__bottom-img-single">
                                                <img src="assets/images/project/portfolio-details2.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="portfolio-details__bottom-img-single">
                                                <img src="assets/images/project/portfolio-details3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="portfolio-details__bottom-left-text2">
                                    <p>Our standard cleaning service typically includes dusting, vacuuming, mopping,
                                        bathroom and kitchen cleaning surface wiping, and trash removal. However, we can
                                        tailor our services to meet your specific needs. Our maids are thoroughly
                                        vetted, trained professionals who prioritize the safety and security of your
                                        home. We also have insurance </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="portfolio-details__sidebar">
                                <ul className="portfolio-details__sidebar-list">
                                    <li>
                                        <div className="title-box">
                                            <h4>Category:</h4>
                                        </div>

                                        <div className="text-box">
                                            <p>Corporate Business</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title-box">
                                            <h4>Customer:</h4>
                                        </div>

                                        <div className="text-box">
                                            <p>Star-line Shimlasi</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title-box">
                                            <h4>Start Date:</h4>
                                        </div>

                                        <div className="text-box">
                                            <p>21 January 2024</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="title-box">
                                            <h4>End Date:</h4>
                                        </div>

                                        <div className="text-box">
                                            <p>28 September 2024</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title-box">
                                            <h4>Rating:</h4>
                                        </div>

                                        <div className="text-box">
                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                                <Link href="#"><i className="icon-star1"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="portfolio-details__sidebar-social-links">
                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                    <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                    <Link href="#"><span className="icon-twitter"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Portfolio Details*/} 

        </Layout>
        </>
    )
}