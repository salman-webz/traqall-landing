import Link from "next/link"
import { TRAQALL_SERVICES } from "@/lib/services"

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
            { label: "Cost codes", href: "/timecards" },
            { label: "Approvals", href: "/timecards" },
        ],
    },
    {
        title: "Assets & Inventory",
        links: [
            { label: "Equipment logs", href: "/equipment" },
            { label: "Maintenance", href: "/equipment" },
            { label: "Materials inventory", href: "/materials" },
            { label: "Purchase orders", href: "/materials" },
        ],
    },
    {
        title: "Site Management",
        links: [
            { label: "Small tools tracking", href: "/small-tools" },
            { label: "Issue reporting", href: "/issues" },
            { label: "Safety incidents", href: "/issues" },
            { label: "Reports", href: "/issues" },
        ],
    },
]

export default function SolutionsMegaMenu() {
    return (
        <section className="solutions-mega">
            <div className="solutions-mega__inner">
                <div className="solutions-mega__products">
                    <p className="solutions-mega__label">Modules</p>
                    <div className="solutions-mega__product-grid">
                        {TRAQALL_SERVICES.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/${service.slug}`}
                                className="solutions-mega__product-card"
                            >
                                <span className={`solutions-mega__product-icon ${service.icon}`} />
                                <span className="solutions-mega__product-body">
                                    <strong>
                                        {service.title}
                                        <span className="icon-next" />
                                    </strong>
                                    <small>{service.shortDescription}</small>
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
                        <Link href="/services" className="solutions-mega__view-all">
                            View all solutions <span className="icon-next" />
                        </Link>
                    </div>

                    <div className="solutions-mega__sidebar">
                        <Link href="/" className="solutions-mega__promo">
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
