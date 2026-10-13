import Layout from '@/components/layout/Layout'

export const metadata = {
    title: 'Contact | TraqAll',
    description: 'Contact TraqAll support or request a demonstration of our construction field-operations platform.',
}

export default function ContactPage() {
    return (
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact Us">
            <section className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-page__contact-info">
                                <div className="title-box">
                                    <h2>Get in touch with TraqAll</h2>
                                    <p>Have a question about managing your field operations? Our team is here to help.</p>
                                </div>
                                <div className="contact-page__contact-info-single">
                                    <div className="icon-box" aria-hidden="true">
                                        <span className="icon-conversation" />
                                    </div>
                                    <div className="content-box">
                                        <h3>Email us</h3>
                                        <p><a href="mailto:support@traqall.com">support@traqall.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-page__contact-info-bottom">
                                <div className="text-box">
                                    <h2>Request a demo</h2>
                                    <p>Explore timecards, equipment, materials, small tools, and issue tracking with the TraqAll team.</p>
                                </div>
                                <a className="thm-btn" href="mailto:support@traqall.com?subject=TraqAll%20demo%20request">
                                    Email us for a demo
                                    <span className="hover-btn hover-bx" />
                                    <span className="hover-btn hover-bx2" />
                                    <span className="hover-btn hover-bx3" />
                                    <span className="hover-btn hover-bx4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
