import Link from "next/link"
import { TRAQALL_SERVICES } from "@/lib/services"

const MODULE_PREVIEWS = {
    timecards: { text: "Crew hours, kiosk check-ins, and approvals.", color: "#16825e", tint: "#eaf7f0", path: "M12 8v4l3 2 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" },
    equipment: { text: "Fleet availability, usage, and maintenance.", color: "#3768bf", tint: "#edf3ff", path: "M3 7h11v10H3z M14 11h4l3 4v2h-7 M5 17v3h3v-3 M16 17v3h3v-3 M6 4h5" },
    materials: { text: "Project stock, quantities, and movements.", color: "#8054b8", tint: "#f4eefb", path: "m12 3 9 5v9l-9 5-9-5V8z M3 8l9 5 9-5 M12 13v9 M7 5.8l9 5" },
    'small-tools': { text: "Tool assignments, checkouts, and returns.", color: "#ac6927", tint: "#fff4e6", path: "M14 4a6 6 0 0 0-7 7l-4 4a3 3 0 0 0 4 4l4-4a6 6 0 0 0 7-7l-4 4-3-3z" },
    budget: { text: "Planned costs, actuals, and remaining budget.", color: "#167c80", tint: "#e8f7f7", path: "M4 3v18h17 M8 16v-4 M13 16V7 M18 16v-7" },
    issues: { text: "Site problems, ownership, and resolution.", color: "#c45160", tint: "#fff0f2", path: "m12 3 10 17H2z M12 9v5 M12 17h.01" },
}

const PLATFORM_LINKS = [
    { label: "All Solutions", href: "/services" },
    { label: "Command Center", href: "/" },
    { label: "Directory & Crews", href: "/services" },
    { label: "FAQ", href: "/faq" },
]

const CAPABILITY_COLUMNS = [
    {
        title: "Field Operations",
        links: [
            { label: "Time tracking", href: "/timecards" },
            { label: "Crew management", href: "/timecards" },
            { label: "Project budgeting", href: "/budget" },
            { label: "Approvals", href: "/timecards" },
        ],
    },
    {
        title: "Assets & Inventory",
        links: [
            { label: "Equipment logs", href: "/equipment" },
            { label: "Maintenance", href: "/equipment" },
            { label: "Materials inventory", href: "/materials" },
            { label: "Material movements", href: "/materials" },
        ],
    },
    {
        title: "Site Management",
        links: [
            { label: "Tools tracking", href: "/small-tools" },
            { label: "Issue reporting", href: "/issues" },
            { label: "Safety hazards", href: "/issues" },
            { label: "Issue follow-up", href: "/issues" },
        ],
    },
]

export default function SolutionsMegaMenu() {
    return (
        <section className="solutions-mega">
            <div className="solutions-mega__inner">
                <div className="solutions-mega__products">
                    <div className="solutions-mega__intro">
                        <div><p className="solutions-mega__label">YOUR FIELD. CONNECTED.</p><h3>One platform. Every part of the job.</h3></div>
                        <Link href="/services" className="solutions-mega__all">Explore all solutions <span aria-hidden="true">↗</span></Link>
                    </div>
                    <div className="solutions-mega__product-grid">
                        {TRAQALL_SERVICES.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/${service.slug}`}
                                className="solutions-mega__product-card"
                                style={{ "--module-color": MODULE_PREVIEWS[service.slug].color, "--module-tint": MODULE_PREVIEWS[service.slug].tint }}
                            >
                                <span className="solutions-mega__product-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={MODULE_PREVIEWS[service.slug].path} /></svg></span>
                                <span className="solutions-mega__product-body">
                                    <strong>
                                        {service.title}
                                    </strong>
                                    <small>{MODULE_PREVIEWS[service.slug].text}</small>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="solutions-mega__bottom">
                    <div className="solutions-mega__capabilities">
                        <p className="solutions-mega__label">Featured capabilities</p>
                        <div className="solutions-mega__cap-grid">
                            {CAPABILITY_COLUMNS.map((col) => (
                                <div key={col.title} className="solutions-mega__cap-col">
                                    <h4>{col.title}</h4>
                                    <ul>
                                        {col.links.map((link) => (
                                            <li key={link.label}>
                                                <Link href={link.href}>{link.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className="solutions-mega__cap-col">
                                <h4>Platform</h4>
                                <ul>
                                    {PLATFORM_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="solutions-mega__sidebar">
                        <Link href="https://app.traqall.com/en/auth/login" target="_blank" rel="noopener noreferrer" className="solutions-mega__promo">
                            <span className="solutions-mega__promo-icon icon-home" />
                            <span className="solutions-mega__promo-text">
                                <strong>
                                    Platform overview
                                    <span className="icon-next" />
                                </strong>
                                <small>
                                    One command center for labor, equipment, materials, and site issues.
                                </small>
                            </span>
                        </Link>
                        <Link href="/contact" className="solutions-mega__promo solutions-mega__promo--accent">
                            <span className="solutions-mega__promo-icon icon-conversation" />
                            <span className="solutions-mega__promo-text">
                                <strong>
                                    Request a demo
                                    <span className="icon-next" />
                                </strong>
                                <small>
                                    See how TraqAll fits your field operations workflow.
                                </small>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
