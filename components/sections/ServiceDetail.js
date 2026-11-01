'use client'
import { CONTACT_INFO, emailHref } from '@/lib/contact-info.mjs'
import PortalPreview from '@/components/elements/PortalPreview'
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
        <Layout headerStyle={2} footerStyle={1}>
            <section className="product-hero" style={{ '--hero-image': `url("${service.image}")` }}>
                <div className="container">
                    <nav className="product-hero__crumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Solutions</Link><span>/</span><span aria-current="page">{service.title}</span></nav>
                    <div className="product-hero__copy">
                        <div><p className="product-hero__eyebrow">YOUR FIELD. CONNECTED.</p><h1>{service.title}</h1></div>
                        <p>{service.shortDescription}</p>
                    </div>
                </div>
            </section>
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="services-details__content">
                                <div className="services-details__content-text1">
                                    <p className="text1">{service.intro}</p>
                                    <p className="text2">{service.introSecondary}</p>
                                </div>

                                <div className="services-details__content-text2">
                                    <p className="text1">{service.qualityText}</p>
                                    {service.portalScreenshot && (
                                        <div className="module-desktop-preview">
                                            <PortalPreview service={service} />
                                        </div>
                                    )}
                                    <h2>{service.capabilitiesHeading}</h2>
                                    <p className="text2">{service.capabilitiesIntro}</p>
                                </div>

                                <div className="services-details__content-text3">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="services-details__content-text3-img">
                                                <div className="product-mobile-preview"><img src={service.screenshot} alt={`TraqAll ${service.title} mobile screen`} loading="lazy" /><span>Stay connected in the field</span></div>
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

                                {service.kiosk && (
                                    <section className="module-kiosk" aria-labelledby="kiosk-title">
                                        <p className="product-hero__eyebrow">BUILT FOR SHARED FIELD DEVICES</p>
                                        <h2 id="kiosk-title">{service.kiosk.title}</h2>
                                        <p>{service.kiosk.intro}</p>
                                        <ol className="module-workflow__steps">
                                            {service.kiosk.steps.map((step) => (
                                                <li key={step.title}>
                                                    <h3>{step.title}</h3>
                                                    <p>{step.description}</p>
                                                </li>
                                            ))}
                                        </ol>
                                    </section>
                                )}

                                <section className="services-details__content-text2 module-workflow" aria-label={`${service.title} workflow`}>
                                    <h2>How {service.title} Works</h2>
                                    <ol className="module-workflow__steps">
                                        {service.workflow.map((step) => (
                                            <li key={step.title}>
                                                <h3>{step.title}</h3>
                                                <p>{step.description}</p>
                                            </li>
                                        ))}
                                    </ol>
                                </section>

                                <section className="module-record-preview" aria-label={`${service.title} record details`}>
                                    <div>
                                        <h2>Inside the Record</h2>
                                        <p>{service.detailSummary}</p>
                                        <Link className="thm-btn" href={`/contact?module=${service.slug}`}>See {service.title} in a demo</Link>
                                    </div>
                                </section>

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
                                            <h3><Link href={emailHref()}>{CONTACT_INFO.email}</Link></h3>
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
