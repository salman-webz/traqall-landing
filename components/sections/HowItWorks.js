'use client'
import { useState } from "react"
import { HOME_ASSETS } from "@/lib/home-assets"
const steps = [
    { title: 'Register', description: 'Create an account to get started with TraqAll.', image: HOME_ASSETS.working1 },
    { title: 'Create a Company', description: 'Set up your company profile and the details your team needs to get started.', image: HOME_ASSETS.working1 },
    { title: 'Create a Project', description: 'Add your project and its location to organize your team’s work.', image: HOME_ASSETS.working3 },
    { title: 'Create Users', description: 'Add supervisors, crew leads, and team members to your company.', image: HOME_ASSETS.working2 },
    { title: 'Create Timecards', description: 'Record your crew’s working hours and assign timecards to the right project.', image: HOME_ASSETS.working4 },
]

export default function HowItWorks() {
    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }
    return (
        <>
        {/* Start Working Process One*/} 
        <section className="working-process-one">
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="left-line"></div>
                        <div className="text tg-element-title">
                            <h4>How it works</h4>
                        </div>
                        <div className="right-line"></div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Get Up and Running in Five Steps</h2>
                </div>

                <div className="working-process-one__inner">

                    <div className="shape1 animation-infinite1"
                        style={{ backgroundImage: 'url(/assets/images/shapes/working-process-v1-shape1.png)' }}></div>

                    <div className="working-process-one__tab-box tabs-box">
                        <ul className="tab-buttons clearfix list-unstyled" aria-label="Setup steps">
                            {steps.map((step, index) => (
                                <li key={step.title} className={activeIndex === index + 1 ? "tab-btn active-btn" : "tab-btn"}>
                                    <button type="button" onClick={() => handleOnClick(index + 1)} aria-label={`Step ${index + 1}: ${step.title}`} aria-pressed={activeIndex === index + 1}>
                                        <h2>{String(index + 1).padStart(2, '0')}</h2>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="tabs-content">
                            {steps.map((step, index) => (
                                <div key={step.title} className={activeIndex === index + 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                    <div className="working-process-one__single-tab">
                                        <div className="working-process-one__single-tab-inner">
                                            <div className="content-box">
                                                <h2>{step.title}</h2>
                                                <p>{step.description}</p>
                                            </div>
                                            <div className="img-box">
                                                <img src={step.image} alt={step.title} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Working Process One*/}
        
            
        </>
    )
}
