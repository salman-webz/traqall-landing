'use client'
import { useState } from 'react'
import { HOME_ASSETS } from '@/lib/home-assets'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
        {/* Start Faq One*/} 
        <section className="faq-one">
            <div className="shape1"><img src="assets/images/shapes/faq-v1-shape1.png" alt=""/></div>
            <div className="shape2"><img src="assets/images/shapes/faq-v1-shape2.png" alt=""/></div>
            <div className="shape3"><img src="assets/images/shapes/faq-v1-shape3.png" alt=""/></div>
            <div className="shape4 float-bob-x"><img src="assets/images/shapes/faq-v1-shape4.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/* Start Faq One Faq*/} 
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__faq">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="left-line"></div>
                                    <div className="text tg-element-title">
                                        <h4>FAQ</h4>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Frequently asked <br/> Question </h2>
                            </div>

                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What modules does TraqAll include?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>TraqAll includes five core modules: Timecards, Equipment, Materials, Small Tools, and Issues — plus Directory, Company, and Project settings to manage your team and jobs.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Can field crews use TraqAll on mobile devices?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Yes. TraqAll is designed for field use. Crews can submit timecards, log equipment usage, and report issues from any device. Kiosk mode also supports PIN-based punch in/out on shared tablets.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>Does TraqAll support multiple projects and locations?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Yes. You can manage multiple projects and locations, assigning labor, equipment, and materials to the right job site so every cost is tracked where it belongs.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>How do cost codes work in TraqAll?</h4>
                                    </div>

                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Cost codes let you allocate labor and production costs to the right phase of work. They are configured during onboarding and can be managed at the company level for accurate job costing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Faq One Faq*/} 

                    {/* Start Faq One Img*/} 
                    <div className="col-xl-7 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="faq-one__img">

                            <ul className="faq-one__img-list1">
                                <li>
                                    <div className="img-box">
                                        <img src={HOME_ASSETS.faq1} alt="Construction site supervisor"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={HOME_ASSETS.faq2} alt="Worker on site with mobile device"/>
                                    </div>
                                </li>
                            </ul>

                            <ul className="faq-one__img-list2">
                                <li>
                                    <div className="img-box">
                                        <img src={HOME_ASSETS.faq3} alt="Construction safety officer"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src={HOME_ASSETS.faq4} alt="Crane operator at construction site"/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Faq One Img*/} 
                </div>
            </div>
        </section>
        {/* End Faq One*/} 
        
            
        </>
    )
}
