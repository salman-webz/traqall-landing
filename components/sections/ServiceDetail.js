'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import { TRAQALL_SERVICES } from "@/lib/services"

export default function ServiceDetail({ service }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false })
        } else {
            setIsActive({ status: true, key })
        }
    }

    return (
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle={service.title}>
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="services-details__content">
                                <div className="services-details__content-img1">
                                    <img src={service.detailImage} alt={service.title}/>
                                </div>

                                <div className="services-details__content-text1">
                                    <h2>{service.title}</h2>
                                    <p className="text1">{service.intro}</p>
                                    <p className="text2">{service.introSecondary}</p>
                                </div>

                                <div className="services-details__content-img2">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="services-details__content-img2-single">
                                                <img src={service.detailImageRow1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="services-details__content-img2-single">
                                                <img src={service.detailImageRow2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="services-details__content-text2">
                                    <p className="text1">{service.qualityText}</p>
                                    <h2>{service.capabilitiesHeading}</h2>
                                    <p className="text2">{service.capabilitiesIntro}</p>
                                </div>

                                <div className="services-details__content-text3">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="services-details__content-text3-img">
                                                <img src={service.detailImageFeature} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="services-details__content-text3-list">
                                                <ul>
                                                    {service.features.map((feature) => (
                                                        <li key={feature}>
                                                            <p><span className="icon-verified"></span> {feature}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="services-details__accrodion">
                                    <div className="faq-one__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            {service.faqs.map((faq, index) => (
                                                <div
                                                    key={faq.question}
                                                    className={isActive.key == index + 1 ? "accrodion active" : "accrodion"}
                                                    onClick={() => handleToggle(index + 1)}
                                                >
                                                    <div className="accrodion-title">
                                                        <h4>{faq.question}</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>{faq.answer}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__services wow fadeInUp" data-wow-delay=".1s">
                                    <div className="title-box">
                                        <h2>All Modules</h2>
                                    </div>
                                    <ul className="sidebar__services-list">
                                        {TRAQALL_SERVICES.map((item) => (
                                            <li key={item.slug} className={item.slug === service.slug ? "active" : ""}>
                                                <Link href={`/${item.slug}`}>
                                                    {item.title}
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="sidebar__single sidebar__emergency-services wow fadeInUp" data-wow-delay=".1s">
                                    <div className="sidebar__emergency-services-inner text-center">
                                        <div className="title">
                                            <h2>Ready to get started?</h2>
                                        </div>
                                        <div className="icon-box">
                                            <span className="icon-old-typical-phone"></span>
                                        </div>
                                        <div className="number-box">
                                            <p>Talk to our team</p>
                                            <h3><Link href="mailto:support@traqall.com">support@traqall.com</Link></h3>
                                        </div>
                                        <div className="text-box">
                                            <p>See how TraqAll can bring timecards, equipment, materials, and more into one command center for your field operations.</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="thm-btn" href="/contact">Request a demo
                                                <i className="icon-next"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
