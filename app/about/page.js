import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { TRAQALL_SERVICES } from '@/lib/services'

export const metadata = {
    title: 'About TraqAll | Connected Construction Operations',
    description: 'Get to know TraqAll: one platform for construction timecards, equipment, materials, tools, project budgets, and issue tracking.',
}

const moduleDetails = {
    timecards: { heading: 'Make every hour count.', detail: 'Capture individual or crew time, assign cost codes, and review regular and overtime hours. Move entries through submission and approval, with exports for your office reporting.', points: ['Crew time and project kiosk', 'Cost codes and supervisor review'] },
    equipment: { heading: 'Keep your equipment working.', detail: 'See equipment status, record project assignments, and track checkouts and returns. Keep usage hours, operator details, and maintenance history connected to each asset.', points: ['Availability and project assignments', 'Usage and maintenance records'] },
    materials: { heading: 'Know what’s on hand.', detail: 'Organize your material catalog and project stock. Record inventory movements, monitor alert quantities, and keep unit costs and vendor references with your materials.', points: ['Catalogs and project inventory', 'Stock movements and cost details'] },
    'small-tools': { heading: 'Give every tool a trail.', detail: 'Track portable tools from company inventory to the job site. Manage quantities, checkouts, transfers, and returns, with due dates and records of loss or damage.', points: ['Checkout, return, and transfer', 'Condition and inventory history'] },
    budget: { heading: 'Connect the work to the cost.', detail: 'Plan labor, equipment, and material budgets by cost code. Compare budgets with actual spending and review remaining amounts at the category and project level.', points: ['Project budgets by cost code', 'Budget, actual, and remaining costs'] },
    issues: { heading: 'Turn site problems into next steps.', detail: 'Capture issues with the context your team needs. Assign responsibility, set priorities and due dates, and follow comments and status changes through resolution.', points: ['Ownership, priorities, and due dates', 'Related records and activity history'] },
}

export default function AboutPage() {
    return (
        <Layout headerStyle={2} footerStyle={1}>
            <main className="about-platform">
                <section className="about-platform__hero">
                    <div className="container">
                        <div className="about-platform__hero-grid">
                            <div>
                                <p className="about-platform__eyebrow">ABOUT TRAQALL</p>
                                <h1>Every part of the job.<br /><span>Working together.</span></h1>
                                <p className="about-platform__lead">Construction runs on people, equipment, materials, and a thousand daily decisions. We bring the records behind that work into one place.</p>
                                <p>TraqAll connects timecards, equipment, materials, tools, budgets, and issue tracking—helping crews, supervisors, and project managers stay organized from the field to the office.</p>
                                <div className="about-platform__actions"><Link className="about-platform__button" href="/contact">Meet TraqAll <span aria-hidden="true">↗</span></Link><a href="#what-we-do">Explore what we do <span aria-hidden="true">↓</span></a></div>
                            </div>
                            <figure className="about-platform__hero-image">
                                <img src="/assets/images/about/traqall-field-team.webp" alt="Illustration of site supervisors reviewing a tablet beside construction equipment and materials" width="1536" height="1024" fetchPriority="high" />
                                <figcaption><span aria-hidden="true" />Built around the work. Connected through TraqAll.</figcaption>
                            </figure>
                        </div>
                        <div className="about-platform__module-strip" aria-label="Our platform modules">{TRAQALL_SERVICES.map(service => <Link key={service.slug} href={`/${service.slug}`}><span className={service.icon} aria-hidden="true" />{service.title === 'Small Tools' ? 'Tools' : service.title}</Link>)}</div>
                    </div>
                </section>

                <section className="about-platform__purpose container">
                    <div><p className="about-platform__eyebrow">WHY WE EXIST</p><h2>The job is connected.<br />Your information should be, too.</h2></div>
                    <div><p>A crew’s hours affect the budget. Equipment availability shapes the day’s plan. Missing materials or an unresolved issue can hold up the next task. These are all parts of the same job.</p><p>Our focus is to make those daily details easier to record, find, and review. With shared project context across your operations, your team can spend less time piecing together information and more time moving work forward.</p></div>
                </section>

                <section className="about-platform__modules" id="what-we-do">
                    <div className="container">
                        <div className="about-platform__section-heading"><div><p className="about-platform__eyebrow">WHAT WE DO</p><h2>Six essential parts.<br />One connected platform.</h2></div><p>From the first timecard to the latest cost review, TraqAll helps you keep the details of every project in view.</p></div>
                        <div className="about-platform__cards">{TRAQALL_SERVICES.map((service, index) => {
                            const detail = moduleDetails[service.slug]
                            return <article className="about-platform__card" key={service.slug}>
                                <div className="about-platform__card-top"><span className={`about-platform__icon ${service.icon}`} aria-hidden="true" /><span className="about-platform__number">0{index + 1}</span></div>
                                <p className="about-platform__module-name">{service.title}</p><h3>{detail.heading}</h3><p>{detail.detail}</p>
                                <ul>{detail.points.map(point => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
                                <Link href={`/${service.slug}`}>Explore {service.title.toLowerCase()} <span aria-hidden="true">↗</span></Link>
                            </article>
                        })}</div>
                    </div>
                </section>

                <section className="about-platform__people container">
                    <figure><img src="/assets/images/about/traqall-project-planning.webp" alt="Illustration of a project manager reviewing plans in a site office overlooking construction work" width="1536" height="1024" loading="lazy" /></figure>
                    <div><p className="about-platform__eyebrow">FROM FIELD TO OFFICE</p><h2>Different responsibilities.<br />A shared view of the job.</h2>
                        <div className="about-platform__role"><h3>For crews & supervisors</h3><p>Record hours, equipment usage, material movements, and site issues with the project context that makes each entry useful.</p></div>
                        <div className="about-platform__role"><h3>For project managers</h3><p>Review resources, follow open issues, and compare project spending with budgets to understand where attention is needed.</p></div>
                        <div className="about-platform__role"><h3>For office teams</h3><p>Find organized records, review submitted timecards, and use reports and exports to support your next step.</p></div>
                    </div>
                </section>

                <section className="about-platform__closing"><div className="container"><div><p className="about-platform__eyebrow">LET’S TALK ABOUT YOUR WORK</p><h2>Bring the whole job into view.</h2><p>Show us how your team works. We’ll walk you through how TraqAll brings your daily operations together.</p></div><Link className="about-platform__button" href="/contact">Book a demo <span aria-hidden="true">↗</span></Link></div></section>
            </main>
        </Layout>
    )
}
