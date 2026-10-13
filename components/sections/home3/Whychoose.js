'use client'
export default function Whychoose() {
    return (
        <>
        
        {/* Start Why Choose Two*/} 
        <section className="why-choose-two">
            <div className="why-choose-two__img"
                style={{ backgroundImage: ' url(assets/images/backgrounds/why-choose-v2-bg.jpg)' }} ></div>
            <div className="shape1"><img src="assets/images/shapes/why-choose-v2-shape1.png" alt=""/></div>
            <div className="shape1"></div>
            <div className="container clearfix">
                <div className="why-choose-two__inner">
                    <div className="why-choose-two__content">
                        <div className="sec-title tg-heading-subheading animation-style2">
                            <div className="sec-title__tagline">
                                <div className="left-line"></div>
                                <div className="text tg-element-title">
                                    <h4>Why Choose Us</h4>
                                </div>
                            </div>
                            <h2 className="sec-title__title tg-element-title">Superior And Popular <br/>
                                Services Provide</h2>
                        </div>

                        <div className="why-choose-two__content-text">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. If you are going to use a passage of.</p>
                        </div>

                        <ul className="why-choose-two__progress">
                            <li>
                                <div className="why-choose-two__progress-single">
                                    <div className="title-box">
                                        <p>renovation</p>
                                    </div>

                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                            <div className="count-text">90%</div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="why-choose-two__progress-single">
                                    <div className="title-box">
                                        <p>design</p>
                                    </div>

                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="85%" style={{ width: '85%' }}>
                                            <div className="count-text">85%</div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="why-choose-two__progress-single">
                                    <div className="title-box">
                                        <p>experience</p>
                                    </div>

                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                            <div className="count-text">80%</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* End Why Choose Two*/}  
        
        </>
    )
}
