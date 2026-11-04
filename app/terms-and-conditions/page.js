import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import styles from './terms.module.css'

export const metadata = {
    title: 'Terms & Conditions | TraqAll',
    description: 'Read the terms and conditions governing your access to and use of the TraqAll construction project management platform. Effective May 31, 2026.',
}

const sections = [
    ['Acceptance of Terms', 'By creating an account or using TraqAll, you agree to these Terms & Conditions and our Privacy Policy. If you do not agree, do not use the service. These terms apply to all users, including company administrators, project managers, and field staff.'],
    ['Eligibility & Account Registration', 'You must be at least 18 years old and authorized to act on behalf of your organization when registering. You are responsible for providing accurate registration information, keeping your credentials secure, and all activity under your account. Notify us immediately of any unauthorized use.'],
    ['Use of the Service', 'TraqAll provides construction and project-management tools including project tracking, timecards, materials, vendors, documents, and related workflows. You agree to use the platform only for lawful business purposes, in compliance with applicable laws, site safety requirements, and any agreements with your clients or employers.'],
    ['Acceptable Use', 'You may not misuse the service, attempt to gain unauthorized access, interfere with system integrity, upload malicious code, scrape data without permission, or use the platform to harass others or store unlawful content. We may suspend or terminate accounts that violate these rules.'],
    ['Your Data & Content', 'You retain ownership of data you submit to TraqAll. You grant us a limited license to host, process, and display that data solely to operate and improve the service. You are responsible for ensuring you have the right to upload project, employee, vendor, and customer information.'],
    ['Privacy', 'Our handling of personal information is described in our Privacy Policy. By using TraqAll, you consent to the collection and use of information as outlined there, including account details, usage logs, and project-related records needed to deliver the service.'],
    ['Subscription & Fees', 'If your plan includes paid features, fees, billing cycles, and renewal terms will be presented at purchase or in your order form. Unless otherwise stated, subscriptions renew automatically until cancelled. Taxes may apply based on your location.'],
    ['Intellectual Property', 'TraqAll, its software, branding, documentation, and underlying technology are owned by us or our licensors. These Terms do not grant you any rights to our trademarks, source code, or proprietary materials except the limited right to use the service as provided.'],
    ['Availability & Changes', 'We strive for reliable uptime but do not guarantee uninterrupted access. We may modify features, perform maintenance, or update these Terms from time to time. Material changes will be communicated through the app or by email. Continued use after changes take effect constitutes acceptance.'],
    ['Disclaimer of Warranties', 'The service is provided "as is" and "as available" without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement. TraqAll is a software tool and does not replace professional judgment, engineering advice, or on-site safety oversight.'],
    ['Limitation of Liability', 'To the fullest extent permitted by law, TraqAll and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, goodwill, or business interruption arising from your use of the service. Our total liability for any claim is limited to the amount you paid us in the twelve months before the event giving rise to the claim, or one hundred dollars if no fees were paid.'],
    ['Indemnification', 'You agree to indemnify and hold harmless TraqAll from claims, damages, losses, and expenses (including reasonable legal fees) arising from your use of the service, your content, or your violation of these Terms.'],
    ['Termination', 'You may stop using TraqAll at any time. We may suspend or terminate access if you breach these Terms, create security or legal risk, or if required by law. Upon termination, your right to use the service ends, though certain provisions (including liability limits and indemnity) will survive.'],
    ['Governing Law', 'These Terms are governed by the laws applicable in the jurisdiction where TraqAll is established, without regard to conflict-of-law principles. Disputes will be resolved in the courts of that jurisdiction unless otherwise required by mandatory local law.'],
    ['Contact', <>Questions about these Terms may be sent to <a href="mailto:team@traqall.com">team@traqall.com</a> or through the contact options provided within the application.</>],
]

export default function TermsPage() {
    return (
        <Layout headerStyle={2} footerStyle={1}>
            <main className={styles.page}>
                <header className={styles.hero}>
                    <div className="container">
                        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                            <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Terms & Conditions</span>
                        </nav>
                        <div className={styles.heroContent}>
                            <div>
                               
                                <h1>Terms &<br />Conditions<span className={styles.dot}>.</span></h1>
                            </div>
                            <div className={styles.intro}>
                                <span className={styles.date}>Effective date: <time dateTime="2026-05-31">May 31, 2026</time></span>
                                <p>Please read these Terms & Conditions carefully before using TraqAll. They govern your access to and use of our construction project management platform.</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={`container ${styles.layout}`}>
                    <aside className={styles.sidebar}>
                        <nav className={styles.contents} aria-label="On this page">
                            <p className={styles.eyebrow}>ON THIS PAGE</p>
                            <ol>
                                {sections.map(([title], index) => (
                                    <li key={title}><a href={`#term-${index + 1}`}><span>{String(index + 1).padStart(2, '0')}</span>{title}</a></li>
                                ))}
                            </ol>
                        </nav>
                    </aside>
                    <article className={styles.document} aria-label="Terms and conditions">
                        {sections.map(([title, content], index) => (
                            <section className={styles.section} id={`term-${index + 1}`} key={title} aria-labelledby={`heading-${index + 1}`}>
                                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                                <div><h2 id={`heading-${index + 1}`}>{index + 1}. {title}</h2><p>{content}</p></div>
                            </section>
                        ))}
                        <div className={styles.contact}>
                            <div><p className={styles.eyebrow}>LET’S TALK</p><h2>Questions about these terms?</h2><p>Get in touch with the TraqAll team.</p></div>
                            <a href="mailto:team@traqall.com" className={styles.contactButton}>Contact support <span aria-hidden="true">↗</span></a>
                        </div>
                        <a className={styles.backTop} href="#top">Back to top <span aria-hidden="true">↑</span></a>
                    </article>
                </div>
            </main>
        </Layout>
    )
}
