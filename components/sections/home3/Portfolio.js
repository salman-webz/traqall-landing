'use client'
import PortfolioFilter1 from "@/components/elements/PortfolioFilter1"
export default function Portfolio() {
    return (
        <>
        {/* Start Portfolio Two*/} 
        <section className="portfolio-two">
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/portfolio-v2-shape1.png" alt=""/></div>
            <div className="container">

                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4> Our project</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Our Working Project</h2>
                </div>
                <PortfolioFilter1/>
                
            </div>
        </section>
        {/* End Portfolio Two*/}

    
        </>
    )
}
