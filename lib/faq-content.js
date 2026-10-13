export const FAQ_CATEGORIES = [
    {
        id: "get-started",
        label: "Get Started",
        icon: "icon-home",
        description: "Setup, onboarding, and your first project",
        sections: [
            {
                title: "Getting Up and Running",
                items: [
                    {
                        question: "What is TraqAll?",
                        answer: "TraqAll is a construction field-operations platform that brings timecards, equipment, materials, small tools, and site issues into one command center — so your team spends less time chasing spreadsheets and more time building.",
                    },
                    {
                        question: "How long does onboarding take?",
                        answer: "Most teams complete core setup in under an hour. You can configure your company, add a project, invite users, set locations, and define cost codes at your own pace — skip anything you're not ready for and come back anytime.",
                    },
                    {
                        question: "Do I need to set up cost codes and locations?",
                        answer: "Cost codes help allocate labor and production costs to the right phase of work. Locations help track where labor, equipment, and materials are being used. Both are recommended during onboarding but can be added later.",
                    },
                ],
            },
            {
                title: "Projects & Teams",
                items: [
                    {
                        question: "Can I manage multiple projects?",
                        answer: "Yes. TraqAll supports multiple projects and locations. Assign labor, equipment, and materials to the right job site so every cost is tracked where it belongs.",
                    },
                    {
                        question: "How do I invite my crew?",
                        answer: "From the Directory module, invite supervisors, crew leads, and office staff by email. Each user gets role-based access to the modules they need.",
                    },
                    {
                        question: "Is there a field kiosk for time punch?",
                        answer: "Yes. Kiosk mode supports PIN-based punch in/out on shared tablets at the job site — no full login required for field workers.",
                    },
                ],
            },
        ],
    },
    {
        id: "timecards",
        label: "Timecards",
        icon: "icon-engineer",
        description: "Hours, crews, approvals, and payroll-ready data",
        sections: [
            {
                title: "Logging Time",
                items: [
                    {
                        question: "Can crews submit timecards from mobile?",
                        answer: "Absolutely. TraqAll is built for field use. Crews can log hours from any device, tied to cost codes and projects, with supervisor review before approval.",
                    },
                    {
                        question: "How do cost codes work with timecards?",
                        answer: "Each time entry can be allocated to a cost code so labor lands on the correct phase of work. Cost codes are configured at the company level and available across all projects.",
                    },
                    {
                        question: "Can I copy timecards from a previous day?",
                        answer: "Yes. Use copy-previous and bulk create tools to speed up daily entry when crew assignments repeat across the week.",
                    },
                ],
            },
            {
                title: "Approvals & Reports",
                items: [
                    {
                        question: "Can supervisors approve timecards in bulk?",
                        answer: "Yes. Filter by date range, crew, or project and approve multiple entries at once to keep payroll cycles on schedule.",
                    },
                    {
                        question: "What reports are available for timecards?",
                        answer: "TraqAll includes timecard reports with filtering by date, user, crew, and cost code — ready for payroll and job costing exports.",
                    },
                    {
                        question: "Does TraqAll support regular, OT, and DT splits?",
                        answer: "Yes. Timecard settings allow configuration of regular, overtime, and double-time splits based on your company's pay rules.",
                    },
                ],
            },
        ],
    },
    {
        id: "equipment",
        label: "Equipment",
        icon: "icon-construction-2",
        description: "Fleet tracking, logs, and maintenance",
        sections: [
            {
                title: "Fleet Management",
                items: [
                    {
                        question: "What equipment statuses are supported?",
                        answer: "Equipment can be marked Available, In Use, Maintenance, Out of Service, Reserved, or Lost/Stolen — giving you a clear picture of fleet readiness at any moment.",
                    },
                    {
                        question: "Can I log equipment usage to a project?",
                        answer: "Every log entry can be tied to a project and location so you know exactly where equipment hours and costs belong.",
                    },
                    {
                        question: "Can I import my existing fleet list?",
                        answer: "Yes. CSV import lets you load your current equipment inventory quickly without manual data entry.",
                    },
                ],
            },
            {
                title: "Maintenance & Logs",
                items: [
                    {
                        question: "How does maintenance tracking work?",
                        answer: "Maintenance logs and service history are built in. Track repairs, schedule service, and keep assets in working order before breakdowns stop work on site.",
                    },
                    {
                        question: "Can I bulk-log equipment hours?",
                        answer: "Yes. Bulk logging lets you record usage across multiple assets at once — useful for end-of-week fleet reporting.",
                    },
                ],
            },
        ],
    },
    {
        id: "materials",
        label: "Materials",
        icon: "icon-raw-materials",
        description: "Inventory, purchase orders, and stock alerts",
        sections: [
            {
                title: "Inventory",
                items: [
                    {
                        question: "Will I get notified when stock runs low?",
                        answer: "Yes. TraqAll surfaces low stock, out of stock, and high waste alerts so your team can reorder before a shortage stops work on site.",
                    },
                    {
                        question: "Can I track material usage by project?",
                        answer: "Material logs record usage by project and location, giving project managers clear visibility into what was consumed and where.",
                    },
                    {
                        question: "How is inventory value calculated?",
                        answer: "The materials dashboard shows total inventory value and stock status at a glance, with reports for usage trends over time.",
                    },
                ],
            },
            {
                title: "Purchase Orders",
                items: [
                    {
                        question: "Are purchase orders integrated with materials?",
                        answer: "Yes. Create POs, track deliveries, and keep inventory counts accurate as supplies arrive on site.",
                    },
                    {
                        question: "Can vendors be managed in TraqAll?",
                        answer: "Vendors are managed in the Directory module and linked to purchase orders and material deliveries.",
                    },
                ],
            },
        ],
    },
    {
        id: "small-tools",
        label: "Small Tools",
        icon: "icon-helmet",
        description: "Hand tool tracking and accountability",
        sections: [
            {
                title: "Tool Tracking",
                items: [
                    {
                        question: "How is small tools tracking different from equipment?",
                        answer: "Small Tools is designed for hand tools and portable assets that move between crews frequently. Equipment covers larger fleet assets with maintenance workflows.",
                    },
                    {
                        question: "Can I track tools by serial number?",
                        answer: "Yes. Each tool can be registered with a name, serial number, and status so you always know who has what.",
                    },
                    {
                        question: "Can I import an existing tool inventory?",
                        answer: "CSV import lets you load your current tool list quickly so your team can start tracking without manual entry.",
                    },
                ],
            },
        ],
    },
    {
        id: "issues",
        label: "Issues",
        icon: "icon-support",
        description: "Site incidents, safety, and follow-ups",
        sections: [
            {
                title: "Reporting & Resolution",
                items: [
                    {
                        question: "What types of issues can be reported?",
                        answer: "Teams can log safety incidents, equipment problems, critical blockers, and general site issues. Each entry can be categorized and prioritized for the right response.",
                    },
                    {
                        question: "Can I filter issues by severity?",
                        answer: "Quick filters show all, open, critical, equipment, safety, assigned to you, and closed issues so the right people see what matters most.",
                    },
                    {
                        question: "Are issue reports available for compliance?",
                        answer: "Issue history and reports provide a full audit trail — who reported it, when it was assigned, and when it was closed — supporting safety and compliance documentation.",
                    },
                ],
            },
        ],
    },
    {
        id: "account",
        label: "Account & Billing",
        icon: "icon-costumer",
        description: "Plans, permissions, and support",
        sections: [
            {
                title: "Plans & Access",
                items: [
                    {
                        question: "What modules are included in each plan?",
                        answer: "TraqAll offers Starter, Professional, and Enterprise plans. All plans include core field-operations modules — contact us for details on user limits and advanced features.",
                    },
                    {
                        question: "How do user permissions work?",
                        answer: "Permissions are role-based per module — timecards, equipment, materials, small tools, issues, directory, and settings. Admins control who can view, create, edit, or approve.",
                    },
                    {
                        question: "Can I manage multiple companies?",
                        answer: "Enterprise plans support multi-company management. Switch between companies from the dashboard command center.",
                    },
                ],
            },
            {
                title: "Support",
                items: [
                    {
                        question: "How do I contact support?",
                        answer: "Reach our team at support@traqall.com. We respond within 24 hours on business days.",
                    },
                    {
                        question: "Is training available for new teams?",
                        answer: "Yes. We offer onboarding assistance and demo walkthroughs to get your supervisors and crew leads up to speed quickly.",
                    },
                ],
            },
        ],
    },
]

export function getFaqCategory(id) {
    return FAQ_CATEGORIES.find((cat) => cat.id === id)
}
