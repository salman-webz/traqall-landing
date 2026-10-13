import { HOME_ASSETS } from '@/lib/home-assets'

const v = 'v=5'
const detail = (file) => `assets/images/services/${file}?${v}`

export const TRAQALL_SERVICES = [
    {
        slug: "timecards",
        title: "Timecards",
        shortDescription: "Track crew hours, cost codes, and approvals from the field or office in one place.",
        icon: "icon-engineer",
        image: HOME_ASSETS.serviceImg1,
        detailImage: detail('services-details-timecards-main.jpg'),
        detailImageRow1: detail('services-details-timecards-a.jpg'),
        detailImageRow2: detail('services-details-timecards-b.jpg'),
        detailImageFeature: detail('services-details-timecards-feature.jpg'),
        intro: "TraqAll Timecards gives your team a single source of truth for labor hours across every project. Supervisors approve entries, crews log time by cost code, and payroll-ready data is always a click away.",
        introSecondary: "From daily punch-ins to weekly reports, timecard workflows are built for construction teams who need speed in the field and accuracy in the office.",
        qualityText: "Reduce manual timesheet errors, speed up approvals, and give project managers real-time visibility into labor costs by location and cost code.",
        capabilitiesHeading: "Timecard Capabilities",
        capabilitiesIntro: "Designed for field crews, supervisors, and payroll teams that need accurate labor data without chasing paper or spreadsheets.",
        features: [
            "Crew-based time entry with cost code allocation",
            "Supervisor review and approval workflows",
            "Bulk create, copy, and update timecards",
            "Reports and exports for payroll and job costing",
        ],
        faqs: [
            {
                question: "Can field crews submit timecards from mobile devices?",
                answer: "Yes. TraqAll is built for field use. Crews can log hours from any device, and kiosk mode supports PIN-based punch in/out on shared tablets at the job site.",
            },
            {
                question: "How do cost codes work with timecards?",
                answer: "Each time entry can be tied to a cost code so labor is allocated to the right phase of work. Cost codes are configured during onboarding and can be managed at the company level.",
            },
            {
                question: "Can supervisors approve timecards in bulk?",
                answer: "Absolutely. Review entries by date range, filter by crew or project, and approve multiple timecards at once to keep payroll cycles on schedule.",
            },
        ],
    },
    {
        slug: "equipment",
        title: "Equipment",
        shortDescription: "Monitor fleet status, maintenance logs, and utilization across every job site.",
        icon: "icon-construction-2",
        image: HOME_ASSETS.serviceImg2,
        detailImage: detail('services-details-equipment-main.jpg'),
        detailImageRow1: detail('services-details-equipment-a.jpg'),
        detailImageRow2: detail('services-details-equipment-b.jpg'),
        detailImageFeature: detail('services-details-equipment-feature.jpg'),
        intro: "TraqAll Equipment helps you know where every asset is, what condition it is in, and who is using it. Track statuses from Available to Maintenance, log usage by project, and stay ahead of service schedules.",
        introSecondary: "Whether you manage excavators or pickup trucks, equipment tracking keeps your fleet productive and your projects moving without surprises.",
        qualityText: "Cut downtime with proactive maintenance tracking, reduce lost assets, and assign equipment to the right job with full audit history.",
        capabilitiesHeading: "Equipment Capabilities",
        capabilitiesIntro: "Built for fleet visibility across job sites, yards, operators, maintenance teams, and project managers.",
        features: [
            "Real-time status tracking across your fleet",
            "Usage logs tied to projects and locations",
            "Maintenance schedules and service history",
            "CSV import and bulk logging for large fleets",
        ],
        faqs: [
            {
                question: "What equipment statuses does TraqAll support?",
                answer: "Equipment can be marked Available, In Use, Maintenance, Out of Service, Reserved, or Lost/Stolen — giving your team a clear picture of fleet readiness at any moment.",
            },
            {
                question: "Can I log equipment usage to a specific project?",
                answer: "Yes. Every log entry can be tied to a project and location so you know exactly where equipment hours and costs belong.",
            },
            {
                question: "Does TraqAll support maintenance reminders?",
                answer: "Maintenance logs and service history are built in, so your team can track repairs, schedule service, and keep assets in working order.",
            },
        ],
    },
    {
        slug: "materials",
        title: "Materials",
        shortDescription: "Manage inventory, purchase orders, and stock levels with alerts that keep jobs supplied.",
        icon: "icon-raw-materials",
        image: HOME_ASSETS.serviceImg3,
        detailImage: detail('services-details-materials-main.jpg'),
        detailImageRow1: detail('services-details-materials-a.jpg'),
        detailImageRow2: detail('services-details-materials-b.jpg'),
        detailImageFeature: detail('services-details-materials-feature.jpg'),
        intro: "TraqAll Materials gives you control over inventory from the warehouse to the job site. Track stock levels, create purchase orders, log deliveries, and get alerts before you run out of critical supplies.",
        introSecondary: "Stop chasing spreadsheets. Materials management connects your field teams and office staff with live inventory data and purchase order workflows.",
        qualityText: "Avoid costly delays with low-stock alerts, track waste and usage by project, and maintain a clear record of every material movement.",
        capabilitiesHeading: "Materials Capabilities",
        capabilitiesIntro: "Keep warehouse, purchasing, and field teams working from one live view of inventory, deliveries, and project usage.",
        features: [
            "Inventory tracking with low-stock and out-of-stock alerts",
            "Purchase order creation and management",
            "Material logs tied to projects and locations",
            "Reports for inventory value and usage trends",
        ],
        faqs: [
            {
                question: "Will I get notified when stock runs low?",
                answer: "Yes. TraqAll surfaces low stock, out of stock, and high waste alerts so your team can reorder before a shortage stops work on site.",
            },
            {
                question: "Can materials be linked to purchase orders?",
                answer: "Purchase orders are integrated with materials management. Create POs, track deliveries, and keep inventory counts accurate as supplies arrive.",
            },
            {
                question: "Can I see material usage by project?",
                answer: "Material logs record usage by project and location, giving project managers clear visibility into what was consumed and where.",
            },
        ],
    },
    {
        slug: "small-tools",
        title: "Small Tools",
        shortDescription: "Track hand tools and small assets by serial number, status, and assignment.",
        icon: "icon-helmet",
        image: HOME_ASSETS.serviceImg4,
        detailImage: detail('services-details-small-tools-main.jpg'),
        detailImageRow1: detail('services-details-small-tools-a.jpg'),
        detailImageRow2: detail('services-details-small-tools-b.jpg'),
        detailImageFeature: detail('services-details-small-tools-feature.jpg'),
        intro: "Small tools disappear fast on busy job sites. TraqAll Small Tools tracking keeps every hand tool accounted for — from drills to generators — with serial numbers, statuses, and assignment history.",
        introSecondary: "Know who has what, flag missing items early, and reduce the cost of replacing tools that walk off the site.",
        qualityText: "Assign tools to crews, log check-outs and returns, and run reports that show utilization and loss trends across your company.",
        capabilitiesHeading: "Small Tools Capabilities",
        capabilitiesIntro: "Give every portable asset an owner, status, and history so tool rooms and crews stay accountable.",
        features: [
            "Tool registry with serial numbers and statuses",
            "Assignment and usage logging by project",
            "CSV import for fast setup of large inventories",
            "Reports to identify missing or underused tools",
        ],
        faqs: [
            {
                question: "How is small tools tracking different from equipment?",
                answer: "Small Tools is designed for hand tools and portable assets — items that move between crews frequently and are easy to misplace. Equipment covers larger fleet assets with maintenance workflows.",
            },
            {
                question: "Can I import an existing tool list?",
                answer: "Yes. CSV import lets you load your current inventory quickly so your team can start tracking without manual data entry.",
            },
            {
                question: "Can I see which crew has a specific tool?",
                answer: "Usage logs and assignment records show who checked out each tool, on which project, and when — making accountability straightforward.",
            },
        ],
    },
    {
        slug: "issues",
        title: "Issues",
        shortDescription: "Report, assign, and resolve safety incidents and site issues before they escalate.",
        icon: "icon-support",
        image: HOME_ASSETS.serviceImg5,
        detailImage: detail('services-details-issues-main.jpg'),
        detailImageRow1: detail('services-details-issues-a.jpg'),
        detailImageRow2: detail('services-details-issues-b.jpg'),
        detailImageFeature: detail('services-details-issues-feature.jpg'),
        intro: "TraqAll Issues turns site problems into trackable action items. Report safety incidents, equipment failures, and critical blockers, then assign owners and follow up until every issue is resolved.",
        introSecondary: "From open to closed, your team gets a clear record of what happened, who responded, and how long resolution took — essential for safety compliance and project accountability.",
        qualityText: "Filter by severity, equipment type, or safety category. Keep critical issues visible and make sure nothing falls through the cracks.",
        capabilitiesHeading: "Issue Management Capabilities",
        capabilitiesIntro: "Give safety teams, supervisors, and project managers one workflow for capturing, assigning, tracking, and closing site issues.",
        features: [
            "Issue reporting with severity and category tags",
            "Filters for open, critical, safety, and equipment issues",
            "Assignment and follow-up tracking",
            "Reports for incident trends and resolution times",
        ],
        faqs: [
            {
                question: "What types of issues can be reported?",
                answer: "Teams can log safety incidents, equipment problems, critical blockers, and general site issues. Each entry can be categorized and prioritized for the right response.",
            },
            {
                question: "Can I filter issues by status or severity?",
                answer: "Yes. Quick filters show all, open, critical, equipment, safety, assigned to you, and closed issues so the right people see what matters most.",
            },
            {
                question: "Are issue reports available for compliance reviews?",
                answer: "Issue history and reports provide a full audit trail — who reported it, when it was assigned, and when it was closed — supporting safety and compliance documentation.",
            },
        ],
    },
]

export function getServiceBySlug(slug) {
    return TRAQALL_SERVICES.find((service) => service.slug === slug)
}
