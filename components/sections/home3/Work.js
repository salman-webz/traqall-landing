'use client'
import { useState } from "react"
export default function Work() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
       {/* Start Work Process Two*/} 
       <section className="work-process-two">
            <div className="container">
                <div className="work-process-two__tab tab-box">
                    <ul className="tabs-button-box clearfix">
                        <li className={activeIndex == 1 ? "tab-btn-item active-btn" : "tab-btn-item"} onClick={() => handleOnClick(1)}>
                            <div className="icon-box">
                                <span className="icon-house"></span>
                            </div>
                            <h3>Flawless Finish <br/> Proofing</h3>
                        </li>
                        <li className={activeIndex == 2 ? "tab-btn-item active-btn" : "tab-btn-item"} onClick={() => handleOnClick(2)}>
                            <div className="icon-box">
                                <span className="icon-interior-design"></span>
                            </div>
                            <h3>Eagle Eye <br/> Proof reading</h3>
                        </li>
                        <li className={activeIndex == 3 ? "tab-btn-item active-btn" : "tab-btn-item"} onClick={() => handleOnClick(3)}>
                            <div className="icon-box">
                                <span className="icon-construction"></span>
                            </div>
                            <h3>Clear Text <br/>Proof reading</h3>
                        </li>
                        <li className={activeIndex == 4 ? "tab-btn-item active-btn" : "tab-btn-item"} onClick={() => handleOnClick(4)}>
                            <div className="icon-box">
                                <span className="icon-plan"></span>
                            </div>
                            <h3>Pinnacle Proof <br/> readers</h3>
                        </li>
                    </ul>


                    <div className="tabs-content tabs-content-box">

                        {/* Start Single Tab Content*/} 
                        <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                            <div className="work-process-two__single-tab">
                                <div className="work-process-two__single-tab-inner">
                                    <div className="work-process-two__single-img">
                                        <img src="assets/images/resources/work-process-v2-img1.jpg" alt=""/>
                                    </div>

                                    <div className="work-process-two__single-content">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="work-process-two__single-content-left">
                                                        <div className="sec-title tg-heading-subheading animation-style2">
                                                            <div className="sec-title__tagline">
                                                                <div className="left-line"></div>
                                                                <div className="text tg-element-title">
                                                                    <h4>Work Process</h4>
                                                                </div>
                                                            </div>
                                                            <h2 className="sec-title__title tg-element-title">Get a Free
                                                                Roof
                                                                Inspection <br/> Today!</h2>
                                                        </div>

                                                        <ul className="work-process-two__single-content-list">
                                                            <li>
                                                                <p><span className="icon-verified"></span> Roof Flashing
                                                                    Repairs</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Chimney Flashing
                                                                    and Repairs</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Roof Insulation
                                                                    Services</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="work-process-two__single-content-right">
                                                        <div className="work-process-two__single-content-right-text">
                                                            <p>It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout. The point of using Lorem Ipsum is
                                                                that it has a more-or-less normal distribution of
                                                                letters, as opposed to using.</p>
                                                        </div>

                                                        <ul className="work-process-two__single-content-list">
                                                            <li>
                                                                <p><span className="icon-verified"></span> Apex Roofing
                                                                    Services</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Peak Performance
                                                                    Roofing</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Skyline Roof
                                                                    Solutions</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Tab Content*/} 

                        {/* Start Single Tab Content*/} 
                        <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                            <div className="work-process-two__single-tab">
                                <div className="work-process-two__single-tab-inner">
                                    <div className="work-process-two__single-img">
                                        <img src="assets/images/resources/work-process-v2-img2.jpg" alt=""/>
                                    </div>

                                    <div className="work-process-two__single-content">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="work-process-two__single-content-left">
                                                        <div className="sec-title tg-heading-subheading animation-style2">
                                                            <div className="sec-title__tagline">
                                                                <div className="left-line"></div>
                                                                <div className="text tg-element-title">
                                                                    <h4>Work Process</h4>
                                                                </div>
                                                            </div>
                                                            <h2 className="sec-title__title tg-element-title">Get a Free
                                                                Roof
                                                                Inspection <br/> Today!</h2>
                                                        </div>

                                                        <ul className="work-process-two__single-content-list">
                                                            <li>
                                                                <p><span className="icon-verified"></span> Roof Flashing
                                                                    Repairs</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Chimney Flashing
                                                                    and Repairs</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Roof Insulation
                                                                    Services</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="work-process-two__single-content-right">
                                                        <div className="work-process-two__single-content-right-text">
                                                            <p>It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout. The point of using Lorem Ipsum is
                                                                that it has a more-or-less normal distribution of
                                                                letters, as opposed to using.</p>
                                                        </div>

                                                        <ul className="work-process-two__single-content-list">
                                                            <li>
                                                                <p><span className="icon-verified"></span> Apex Roofing
                                                                    Services</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Peak Performance
                                                                    Roofing</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Skyline Roof
                                                                    Solutions</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Tab Content*/} 

                        {/* Start Single Tab Content*/} 
                        <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                            <div className="work-process-two__single-tab">
                                <div className="work-process-two__single-tab-inner">
                                    <div className="work-process-two__single-img">
                                        <img src="assets/images/resources/work-process-v2-img3.jpg" alt=""/>
                                    </div>

                                    <div className="work-process-two__single-content">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="work-process-two__single-content-left">
                                                        <div className="sec-title tg-heading-subheading animation-style2">
                                                            <div className="sec-title__tagline">
                                                                <div className="left-line"></div>
                                                                <div className="text tg-element-title">
                                                                    <h4>Work Process</h4>
                                                                </div>
                                                            </div>
                                                            <h2 className="sec-title__title tg-element-title">Get a Free
                                                                Roof
                                                                Inspection <br/> Today!</h2>
                                                        </div>

                                                        <ul className="work-process-two__single-content-list">
                                                            <li>
                                                                <p><span className="icon-verified"></span> Roof Flashing
                                                                    Repairs</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Chimney Flashing
                                                                    and Repairs</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Roof Insulation
                                                                    Services</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="work-process-two__single-content-right">
                                                        <div className="work-process-two__single-content-right-text">
                                                            <p>It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout. The point of using Lorem Ipsum is
                                                                that it has a more-or-less normal distribution of
                                                                letters, as opposed to using.</p>
                                                        </div>

                                                        <ul className="work-process-two__single-content-list">
                                                            <li>
                                                                <p><span className="icon-verified"></span> Apex Roofing
                                                                    Services</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Peak Performance
                                                                    Roofing</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Skyline Roof
                                                                    Solutions</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Tab Content*/} 

                        {/* Start Single Tab Content*/} 
                        <div className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                            <div className="work-process-two__single-tab">
                                <div className="work-process-two__single-tab-inner">
                                    <div className="work-process-two__single-img">
                                        <img src="assets/images/resources/work-process-v2-img4.jpg" alt=""/>
                                    </div>

                                    <div className="work-process-two__single-content">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="work-process-two__single-content-left">
                                                        <div className="sec-title tg-heading-subheading animation-style2">
                                                            <div className="sec-title__tagline">
                                                                <div className="left-line"></div>
                                                                <div className="text tg-element-title">
                                                                    <h4>Work Process</h4>
                                                                </div>
                                                            </div>
                                                            <h2 className="sec-title__title tg-element-title">Get a Free
                                                                Roof
                                                                Inspection <br/> Today!</h2>
                                                        </div>

                                                        <ul className="work-process-two__single-content-list">
                                                            <li>
                                                                <p><span className="icon-verified"></span> Roof Flashing
                                                                    Repairs</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Chimney Flashing
                                                                    and Repairs</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Roof Insulation
                                                                    Services</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="work-process-two__single-content-right">
                                                        <div className="work-process-two__single-content-right-text">
                                                            <p>It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout. The point of using Lorem Ipsum is
                                                                that it has a more-or-less normal distribution of
                                                                letters, as opposed to using.</p>
                                                        </div>

                                                        <ul className="work-process-two__single-content-list">
                                                            <li>
                                                                <p><span className="icon-verified"></span> Apex Roofing
                                                                    Services</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Peak Performance
                                                                    Roofing</p>
                                                            </li>
                                                            <li>
                                                                <p><span className="icon-verified"></span> Skyline Roof
                                                                    Solutions</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Tab Content*/} 
                    </div>
                </div>
            </div>
        </section>
        {/* End Work Process Two*/} 
       
        </>
    )
}
