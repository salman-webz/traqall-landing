
'use client'
import Link from "next/link"
export default function Blog() {
    return (
        <>
        
        {/* Start Blog Two*/} 
        <section className="blog-one blog-one--two">
            <div className="blog-one--two__shape2 float-bob-x"><img src="assets/images/shapes/blog-v2-shape1.png" alt=""/>
            </div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>Blog & news</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Latest Blog & News</h2>
                </div>

                <div className="row">
                    {/* Start Blog One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="date-box-style2">
                                    <h2>20</h2>
                                    <p>Jun</p>
                                </div>
                                <div className="inner">
                                    <img src="assets/images/blog/blog-v2-img1.jpg" alt=""/>
                                    <img src="assets/images/blog/blog-v2-img1.jpg" alt=""/>
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

                                <h2><Link href="blog-details">Turning houses into homes and <br/> dreams into
                                        reality</Link></h2>
                                <p>Real estate refers to land, buildings, natural resources such as water </p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog One Single*/} 

                    {/* Start Blog One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                        <div className="blog-one__single style2">
                            <div className="blog-one__single-content">
                                <ul className="meta-box">
                                    <li>
                                        <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                    </li>

                                    <li>
                                        <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                    </li>
                                </ul>

                                <h2><Link href="blog-details">Turning houses into homes and <br/> dreams into
                                        reality</Link></h2>
                                <p>Real estate refers to land, buildings, natural resources such as water </p>
                                <div className="btn-box">
                                    <Link href="blog-details">Read More <span className="icon-next"></span></Link>
                                </div>
                            </div>

                            <div className="blog-one__single-img">
                                <div className="date-box-style2">
                                    <h2>20</h2>
                                    <p>Jun</p>
                                </div>
                                <div className="inner">
                                    <img src="assets/images/blog/blog-v2-img2.jpg" alt=""/>
                                    <img src="assets/images/blog/blog-v2-img2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog One Single*/} 

                    {/* Start Blog One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-one__single">
                            <div className="blog-one__single-img">
                                <div className="date-box-style2">
                                    <h2>20</h2>
                                    <p>Jun</p>
                                </div>
                                <div className="inner">
                                    <img src="assets/images/blog/blog-v2-img3.jpg" alt=""/>
                                    <img src="assets/images/blog/blog-v2-img3.jpg" alt=""/>
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

                                <h2><Link href="blog-details">Turning houses into homes and <br/> dreams into
                                        reality</Link></h2>
                                <p>Real estate refers to land, buildings, natural resources such as water </p>
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
        {/* End Blog Two*/} 
       
        </>
    )
}
