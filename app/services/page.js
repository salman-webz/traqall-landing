'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { TRAQALL_SERVICES, MODULE_SLIDER_IMAGES } from "@/lib/services"

export default function ServicesPage() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Solutions">
        <section className="services-one services-one--services">
            <div className="container">
                <div className="row">
                    {TRAQALL_SERVICES.map((service) => (
                        <div key={service.slug} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="services-one__single">
                                <div className="icon-box">
                                    <span className={service.icon}></span>
                                </div>
                                <div className="services-one__single-inner">
                                    <div className="services-one__single-content">
                                        <h3><Link href={`/${service.slug}`}>{service.title}</Link></h3>
                                        <p>{service.shortDescription}</p>
                                    </div>
                                    <div className="services-one__single-img">
                                        <img src={MODULE_SLIDER_IMAGES[service.slug]} alt={`${service.title} product illustration`} loading="lazy"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </Layout>
        </>
    )
}
