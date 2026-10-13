'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Portfolio">
        {/* Start Portfolio One*/} 
        <section className="portfolio-one portfolio-one--portfolio">
            <div className="container">
                <div className="portfolio-one__inner">
                    {/* Start Portfolio One Single Box*/} 
                    <div className="portfolio-one__outer-box">
                        <ul className="portfolio-one__single-box">
                            <li>
                                <div className="portfolio-one__single-inner">
                                    <div className="portfolio-one__single__bg"
                                        style={{ backgroundImage: ' url(assets/images/project/portfolio-v1-img1.jpg)' }}></div>
                                    <div className="portfolio-one__single-content">
                                        <div className="text-box">
                                            <p>Rapid Renovations</p>
                                            <h3><Link href="portfolio-details">Construction Building Design</Link></h3>
                                        </div>

                                        <div className="btn-box">
                                            <Link href="portfolio-details"><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="portfolio-one__single-inner">
                                    <div className="portfolio-one__single__bg"
                                        style={{ backgroundImage: ' url(assets/images/project/portfolio-v1-img2.jpg)' }}></div>
                                    <div className="portfolio-one__single-content">
                                        <div className="text-box">
                                            <p>Rapid Renovations</p>
                                            <h3><Link href="portfolio-details">Construction Building Design</Link></h3>
                                        </div>

                                        <div className="btn-box">
                                            <Link href="portfolio-details"><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="portfolio-one__single-inner">
                                    <div className="portfolio-one__single__bg"
                                        style={{ backgroundImage: ' url(assets/images/project/portfolio-v1-img3.jpg)' }}></div>
                                    <div className="portfolio-one__single-content">
                                        <div className="text-box">
                                            <p>Rapid Renovations</p>
                                            <h3><Link href="portfolio-details">Construction Building Design</Link></h3>
                                        </div>

                                        <div className="btn-box">
                                            <Link href="portfolio-details"><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="portfolio-one__single-inner">
                                    <div className="portfolio-one__single__bg"
                                        style={{ backgroundImage: ' url(assets/images/project/portfolio-v1-img4.jpg)' }}></div>
                                    <div className="portfolio-one__single-content">
                                        <div className="text-box">
                                            <p>Rapid Renovations</p>
                                            <h3><Link href="portfolio-details">Construction Building Design</Link></h3>
                                        </div>

                                        <div className="btn-box">
                                            <Link href="portfolio-details"><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* End Portfolio One Single Box*/} 

                    {/* Start Portfolio One Single Box*/} 
                    <div className="portfolio-one__outer-box">
                        <ul className="portfolio-one__single-box">
                            <li>
                                <div className="portfolio-one__single-inner">
                                    <div className="portfolio-one__single__bg"
                                        style={{ backgroundImage: ' url(assets/images/project/portfolio-v1-img5.jpg)' }}></div>
                                    <div className="portfolio-one__single-content">
                                        <div className="text-box">
                                            <p>Rapid Renovations</p>
                                            <h3><Link href="portfolio-details">Construction Building Design</Link></h3>
                                        </div>

                                        <div className="btn-box">
                                            <Link href="portfolio-details"><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="portfolio-one__single-inner">
                                    <div className="portfolio-one__single__bg"
                                        style={{ backgroundImage: ' url(assets/images/project/portfolio-v1-img6.jpg)' }}></div>
                                    <div className="portfolio-one__single-content">
                                        <div className="text-box">
                                            <p>Rapid Renovations</p>
                                            <h3><Link href="portfolio-details">Construction Building Design</Link></h3>
                                        </div>

                                        <div className="btn-box">
                                            <Link href="portfolio-details"><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="portfolio-one__single-inner">
                                    <div className="portfolio-one__single__bg"
                                        style={{ backgroundImage: ' url(assets/images/project/portfolio-v1-img7.jpg)' }}></div>
                                    <div className="portfolio-one__single-content">
                                        <div className="text-box">
                                            <p>Rapid Renovations</p>
                                            <h3><Link href="portfolio-details">Construction Building Design</Link></h3>
                                        </div>

                                        <div className="btn-box">
                                            <Link href="portfolio-details"><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="portfolio-one__single-inner">
                                    <div className="portfolio-one__single__bg"
                                        style={{ backgroundImage: ' url(assets/images/project/portfolio-v1-img8.jpg)' }}></div>
                                    <div className="portfolio-one__single-content">
                                        <div className="text-box">
                                            <p>Rapid Renovations</p>
                                            <h3><Link href="portfolio-details">Construction Building Design</Link></h3>
                                        </div>

                                        <div className="btn-box">
                                            <Link href="portfolio-details"><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* End Portfolio One Single Box*/} 
                </div>
            </div>
        </section>
        {/* End Portfolio One*/} 
        </Layout>
        </>
    )
}