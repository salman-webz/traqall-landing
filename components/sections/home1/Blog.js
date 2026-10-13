'use client'
import Link from "next/link"
import { HOME_ASSETS } from "@/lib/home-assets"
export default function Blog() {
    return (
        <>
        {/* Start Blog One*/} 
        <section className="blog-one">
            <div className="shape1 float-bob-x"><img src="assets/images/shapes/blog-v1-shape1.png" alt=""/></div>
            <div className="container">

                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Blog & news</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Insights for Field Operations</h2>
                </div>

                <div className="row">
                    {/* Start Blog One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div>

                                <div className="inner">
                                    <img src={HOME_ASSETS.blog1} alt="Construction teams using TraqAll"/>
                                    <img src={HOME_ASSETS.blog1} alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul>

                                <h2><Link href="blog-details">Why construction teams are ditching<br/> spreadsheets for TraqAll</Link></h2>
                                <p>Manual tracking slows down approvals and hides costs. Here is how unified field operations software changes that.</p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog One Single*/} 

                    {/* Start Blog One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div>

                                <div className="inner">
                                    <img src={HOME_ASSETS.blog2} alt="Equipment fleet tracking"/>
                                    <img src={HOME_ASSETS.blog2} alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul>

                                <h2><Link href="blog-details">Why construction teams are ditching<br/> spreadsheets for TraqAll</Link></h2>
                                <p>Manual tracking slows down approvals and hides costs. Here is how unified field operations software changes that.</p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog One Single*/} 

                    {/* Start Blog One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="date-box">
                                    <h3><span className="icon-calendar"></span> 20 Jun, 2024</h3>
                                </div>

                                <div className="inner">
                                    <img src={HOME_ASSETS.blog3} alt="Construction safety and compliance"/>
                                    <img src={HOME_ASSETS.blog3} alt=""/>
                                </div>
                            </div>

                            <div className="blog-one__single-content">
                                <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul>

                                <h2><Link href="blog-details">Why construction teams are ditching<br/> spreadsheets for TraqAll</Link></h2>
                                <p>Manual tracking slows down approvals and hides costs. Here is how unified field operations software changes that.</p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog One Single*/} 
                </div>
            </div>
        </section>
        {/* End Blog One*/} 

        </>
    )
}
