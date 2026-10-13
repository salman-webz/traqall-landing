'use client'
import Link from "next/link"
export default function Feature() {
    return (
        <>
       {/* Start Features One*/} 
       <section className="features-one">
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/features-v1-shape1.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start Features One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="features-one__single">
                            <div className="icon-box">
                                <span className="icon-repair"></span>
                            </div>

                            <div className="features-one__single-inner">
                                <h2><Link href="#">Sustainable System</Link></h2>
                                <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto
                                    aleatorio. Tiene sus raices en una pieza.</p>
                                <div className="btn-box">
                                    <Link href="#">Read More <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Features One Single*/} 

                    {/* Start Features One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="features-one__single">
                            <div className="icon-box">
                                <span className="icon-helmet"></span>
                            </div>

                            <div className="features-one__single-inner">
                                <h2><Link href="#">Quality Services</Link></h2>
                                <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto
                                    aleatorio. Tiene sus raices en una pieza.</p>
                                <div className="btn-box">
                                    <Link href="#">Read More <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Features One Single*/} 

                    {/* Start Features One Single*/} 
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="features-one__single">
                            <div className="icon-box">
                                <span className="icon-construction"></span>
                            </div>

                            <div className="features-one__single-inner">
                                <h2><Link href="#">Remodeling Experts</Link></h2>
                                <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto
                                    aleatorio. Tiene sus raices en una pieza.</p>
                                <div className="btn-box">
                                    <Link href="#">Read More <span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Features One Single*/} 
                </div>
            </div>
        </section>
        {/* End Features One*/} 
       
        </>
    )
}
