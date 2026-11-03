import { HOME_ASSETS } from '@/lib/home-assets'

export const MODULE_SLIDER_IMAGES = {
    timecards: HOME_ASSETS.sliderTimecardMain,
    equipment: HOME_ASSETS.sliderEquipment,
    materials: HOME_ASSETS.sliderMaterials,
    'small-tools': HOME_ASSETS.sliderTools,
    budget: "/assets/images/slider/generated/budget-slide-portal.png",
    issues: HOME_ASSETS.sliderIssues,
}

// Product copy verified against the portal; see docs/product-content-evidence.md.
const MODULE_CONTENT = [
    {
        "slug": "timecards",
        "title": "Timecards",
        "icon": "icon-engineer",
        "shortDescription": "Record crew hours, allocate cost codes, and move timecards from draft through supervisor review.",
        "intro": "Keep daily labor records organized by worker and project. Enter start and end times or total hours, record lunch, and review regular, overtime, and double-time hours alongside cost codes.",
        "introSecondary": "Create individual or bulk entries and copy previous timecards when work repeats. Filter the list by date, worker, project, status, cost code, or overtime to find the records that need attention.",
        "qualityText": "Give reviewers the hours and work context they need before approving an entry. Export selected timecard fields for your office reporting process.",
        "capabilitiesIntro": "Move from daily entry to review with clear statuses and reusable entry tools.",
        "features": [
            "Individual and bulk entry, with copy-previous tools",
            "Project Kiosk with PIN-based crew check-in and check-out",
            "Draft submission and approval or rejection of submitted entries",
            "Worker, project, cost-code, overtime, and double-time filters",
            "Configurable export columns and timecard reports"
        ],
        "detailSummary": "Open a timecard to review the worker, work date, project, time span, lunch, hour breakdown, and cost allocation. Available review actions depend on the record status and your permissions.",
        "workflow": [
            {
                "title": "Record the work",
                "description": "Create entries for the relevant workers and project, then review times, lunch, and cost codes."
            },
            {
                "title": "Submit for review",
                "description": "Submit eligible drafts with a time span or positive total hours. Reviewers approve or reject submitted entries."
            },
            {
                "title": "Review and export",
                "description": "Filter the records you need and choose export fields for reporting and further office processing."
            }
        ],
        "kiosk": {
            "title": "Kiosk Time Clock",
            "intro": "Turn a shared jobsite tablet or field device into a project time clock. Workers select their name and enter their PIN to record check-in or check-out against the selected project.",
            "steps": [
                { "title": "Start a project kiosk", "description": "A company or project admin signs in with email and PIN, then selects the project and opens its crew roster." },
                { "title": "Select your name and enter your PIN", "description": "Workers select their roster entry and enter their PIN. The kiosk automatically submits check-in or check-out based on their current status." },
                { "title": "See who is checked in", "description": "The checked-in roster shows workers and their check-in times. Successful check-out removes the worker from that list, with punches recorded through Timecards." }
            ]
        },
        "faqs": [
            {
                "question": "How does the Kiosk Time Clock work?",
                "answer": "A company or project admin starts the kiosk for a selected project on a shared device. Workers select their name and enter their PIN; check-in or check-out submits automatically based on their current status. The roster shows who is checked in and when they started."
            },
            {
                "question": "How do timecard statuses work?",
                "answer": "Submission starts from Draft. Reviewers can approve or reject Submitted entries, subject to permissions and valid hours."
            },
            {
                "question": "Can I reuse previous entries?",
                "answer": "Yes. Copy-previous and bulk entry tools help prepare repeated crew entries. Review the dates and hours before submitting."
            },
            {
                "question": "Can I choose what to export?",
                "answer": "Yes. The export dialog supports field selection and saved column layouts. Review the exported data for your downstream reporting requirements."
            }
        ],
        "capabilitiesHeading": "Timecards Capabilities",
        "imageIndex": 1
    },
    {
        "slug": "equipment",
        "title": "Equipment",
        "icon": "icon-construction-2",
        "shortDescription": "Track equipment readiness, project assignments, usage hours, and maintenance history.",
        "intro": "Keep asset records with model and serial details, status, and project context. See what is available, in use, reserved, under maintenance, out of service, or lost/stolen before assigning equipment.",
        "introSecondary": "Record checkouts and returns, log usage against a project, operator, and cost code, and keep maintenance activity alongside the asset record.",
        "qualityText": "Review the asset’s current meter, recent activity, and maintenance history in one place to plan equipment use with better context.",
        "capabilitiesIntro": "Connect equipment records with the people, projects, and service activity behind them.",
        "features": [
            "Six fleet statuses with quick status filters",
            "Checkout and return records with assignment and due-back details",
            "Usage logging with project, operator, and cost-code context",
            "Maintenance history, asset attachments, and equipment reports"
        ],
        "detailSummary": "The equipment detail view brings together asset information, current meter, rates when recorded, attachments, usage activity, and maintenance history. Linked issues help you follow up on equipment problems.",
        "workflow": [
            {
                "title": "Register and assign",
                "description": "Add the asset details and choose its status. Record the project and person responsible when checking it out."
            },
            {
                "title": "Record usage and service",
                "description": "Log usage with date, hours, operator, and cost code. Add maintenance records as service work happens."
            },
            {
                "title": "Review readiness",
                "description": "Check history and linked issues before returning equipment or updating its availability."
            }
        ],
        "faqs": [
            {
                "question": "Which equipment statuses are available?",
                "answer": "Available, In Use, Maintenance, Out of Service, Reserved, and Lost/Stolen."
            },
            {
                "question": "What can I record against usage?",
                "answer": "Usage records support project, operator, cost code, and a description alongside the usage details."
            },
            {
                "question": "Where can I review maintenance?",
                "answer": "Open the equipment detail view for maintenance history and related activity. This keeps service records with the asset rather than in a separate spreadsheet."
            }
        ],
        "capabilitiesHeading": "Equipment Capabilities",
        "imageIndex": 2
    },
    {
        "slug": "materials",
        "title": "Materials",
        "icon": "icon-raw-materials",
        "shortDescription": "Manage material catalogs, project stock, alert quantities, and the movements that change inventory.",
        "intro": "Organize materials in a company catalog and assign stock to projects. Track quantities in the material’s unit, storage locations, vendors, and unit costs, with stock indicators to highlight shortages.",
        "introSecondary": "Log receipts, usage, returns, waste, transfers, and adjustments. Keep each movement connected to the project and cost code, with purchase-order references where applicable.",
        "qualityText": "See available stock and alert thresholds alongside received and used totals. Review recorded costs and inventory activity before planning the next delivery.",
        "capabilitiesIntro": "Follow materials from catalog setup to project stock and daily consumption.",
        "features": [
            "Company catalog and project stock assignment",
            "In Stock, Low Stock, and Out of Stock quick filters",
            "Receive, use, return, waste, transfer, and adjustment logs",
            "Unit costs, alert quantities, purchase-order references, and activity history"
        ],
        "detailSummary": "Material details show available quantity, unit, alert quantity, storage location, vendor, and cost information when recorded. Review received and used totals, project stock, and the activity behind quantity changes.",
        "workflow": [
            {
                "title": "Set up the material",
                "description": "Record the material, unit, vendor, and cost, then assign stock to the relevant project."
            },
            {
                "title": "Log stock movements",
                "description": "Record receipts and consumption, and capture returns, waste, transfers, or adjustments with the appropriate context."
            },
            {
                "title": "Check stock and costs",
                "description": "Use stock filters and alert quantities to identify shortages. Open the detail view to review movements and cost information."
            }
        ],
        "faqs": [
            {
                "question": "How do stock alerts appear?",
                "answer": "The materials list provides In Stock, Low Stock, and Out of Stock filters. Records include an alert quantity so teams can review items that need replenishment."
            },
            {
                "question": "Which movements can I record?",
                "answer": "Receive, Used, Return, Waste, Transfer, and Adjustment. Adjustments require a reason to explain the change."
            },
            {
                "question": "Can I keep purchasing context with a material?",
                "answer": "Yes. Material details include vendor and cost information, and the logging workflow supports purchase-order references where applicable."
            }
        ],
        "capabilitiesHeading": "Materials Capabilities",
        "imageIndex": 3
    },
    {
        "slug": "small-tools",
        "title": "Tools",
        "icon": "icon-helmet",
        "shortDescription": "Manage portable tools by company inventory, project quantity, checkout, and return date.",
        "intro": "Keep tool codes, models, serial numbers, quantities, and locations together. Separate company inventory condition from project assignments so teams can see what is available and what is already on a job.",
        "introSecondary": "Check tools out and in, return or transfer quantities, extend due dates, and record lost or damaged units. Project filters highlight overdue and returned tools.",
        "qualityText": "Review assigned, checked-out, and available quantities before issuing more tools. Project activity and inventory history make movements easier to follow.",
        "capabilitiesIntro": "Track quantities and responsibility throughout a tool’s time on a project.",
        "features": [
            "Tool registry with codes, models, serial numbers, and quantities",
            "Project assignments, checkouts, check-ins, and returns",
            "Transfers, due-date extensions, and overdue filters",
            "Lost, damaged, maintenance, and retirement actions with history"
        ],
        "detailSummary": "Open a tool to review its code, category, vendor, model, serial number, location, and status. Project views include assigned, checked-out, and available quantities, with project activity and inventory history.",
        "workflow": [
            {
                "title": "Register and allocate",
                "description": "Add tools to company inventory and assign the required quantities to a project."
            },
            {
                "title": "Track daily movement",
                "description": "Check quantities out and in. Transfer tools to another project or extend the due date when plans change."
            },
            {
                "title": "Close the assignment",
                "description": "Record returns or account for lost and damaged units. Review overdue tools and the history of inventory changes."
            }
        ],
        "faqs": [
            {
                "question": "Why do company and project statuses differ?",
                "answer": "Company inventory tracks conditions such as Available, Maintenance, Lost, Damaged, and Retired. Project filters highlight Overdue and Returned assignments."
            },
            {
                "question": "Can I return only part of a tool quantity?",
                "answer": "Quantity actions let you record how many units are checked in, returned, transferred, lost, or damaged."
            },
            {
                "question": "Can I move tools to another project?",
                "answer": "Yes. The transfer action captures quantity, destination project, due-back date, and notes. You can also extend an existing due date."
            }
        ],
        "capabilitiesHeading": "Tools Capabilities",
        "imageIndex": 4
    },
{
    "slug": "budget",
    "title": "Budget",
    "icon": "icon-cost",
    "shortDescription": "Plan project costs by cost code and compare budgets with actual spending across labor, equipment, and materials.",
    "intro": "Build a project budget around your cost codes. Set separate labor, equipment, and materials amounts in the Editor, then save the plan for your team to review.",
    "introSecondary": "Switch to Performance to compare budget, actual costs, remaining amounts, and percentage used. Category summaries and a total project view help you see where spending stands.",
    "qualityText": "Search cost codes, sort performance columns, and expand a row to review its category breakdown before deciding where to focus.",
    "capabilitiesIntro": "Keep planned costs and recorded project spending together in one project view.",
    "features": [
        "Labor, equipment, and materials budgets by cost code",
        "Project and category totals with actual and remaining costs",
        "Searchable, sortable performance table with expandable breakdowns",
        "Budget editing with save, cancel, and unsaved-change protection"
    ],
    "detailSummary": "Review planned and actual costs by project and cost code.",
    "workflow": [
        {
            "title": "Choose your project",
            "description": "Select a project with cost codes to open its budget workspace."
        },
        {
            "title": "Set the budget",
            "description": "Enter labor, equipment, and materials budgets for each cost code in the Editor. Save changes when the plan is ready."
        },
        {
            "title": "Review performance",
            "description": "Compare actual costs against the plan. Sort by percentage used or remaining budget and expand a cost code for its category breakdown."
        }
    ],
    "faqs": [
        {
            "question": "Which costs can I budget?",
            "answer": "The Editor supports separate labor, equipment, and materials budgets for each project cost code."
        },
        {
            "question": "What does Performance show?",
            "answer": "It shows budget, actual spending, remaining amounts, and percentage used for the project and its cost codes, with category summaries and expandable details."
        },
        {
            "question": "Who can view and edit budgets?",
            "answer": "Viewing requires access to project financials. Editing is available to users with project update or settings management permission."
        },
        {
            "question": "Can I discard changes before saving?",
            "answer": "Yes. Cancel restores the saved budget, and an unsaved-change guard helps prevent accidental loss of edits."
        }
    ],
    "capabilitiesHeading": "Budget Capabilities",
    "imageIndex": 6
},
    {
        "slug": "issues",
        "title": "Issues",
        "icon": "icon-support",
        "shortDescription": "Capture site problems, set priorities and due dates, and follow ownership through resolution.",
        "intro": "Report equipment breakdowns, material shortages, missing tools, safety hazards, quality defects, and other site problems. Give each issue a project, location, priority, and responsible person.",
        "introSecondary": "Move work through Open, In progress, Blocked, Resolved, and Closed. Add photos or attachments, link related people and assets, and keep discussion with the issue.",
        "qualityText": "Use status, Mine, and Critical filters to focus follow-up. Comments and activity provide context for the next person reviewing a problem.",
        "capabilitiesIntro": "Connect the problem, the responsible person, and the records needed to follow it up.",
        "features": [
            "Issue types with Low, Medium, High, and Critical priorities",
            "Assignment, location, and due-date fields",
            "Related people, equipment, materials, and tools",
            "Attachments, comments, activity, and resolution statuses"
        ],
        "detailSummary": "Issue details bring together type, project, location, reporter, assignee, priority, due date, and status. Related records, attachments, comments, and activity keep the supporting context accessible.",
        "workflow": [
            {
                "title": "Capture the problem",
                "description": "Choose the issue type, describe what happened, and add the location and supporting attachments."
            },
            {
                "title": "Assign the follow-up",
                "description": "Set priority, an owner, and a due date. Link the people, equipment, materials, or tools involved."
            },
            {
                "title": "Track resolution",
                "description": "Update status as work progresses, add comments, and review activity before resolving or closing the issue."
            }
        ],
        "faqs": [
            {
                "question": "What types of issues can I report?",
                "answer": "Safety hazards, equipment breakdowns, material shortages, missing tools, quality defects, inspection failures, site obstructions, delays, weather impacts, and general issues."
            },
            {
                "question": "Which priorities and statuses are supported?",
                "answer": "Priorities are Low, Medium, High, and Critical. The issue workflow offers Open, In progress, Blocked, Resolved, and Closed."
            },
            {
                "question": "Can I connect an issue to other records?",
                "answer": "Yes. Link related people, equipment, materials, and tools, then use attachments, comments, and activity to retain the follow-up context."
            }
        ],
        "capabilitiesHeading": "Issues Capabilities",
        "imageIndex": 5
    }
]

const PORTAL_SCREENSHOTS = {
    timecards: '/assets/images/portal/timecard.png',
    equipment: '/assets/images/portal/equipments.png',
    materials: '/assets/images/portal/materials.png',
    'small-tools': '/assets/images/portal/tools.png',
    budget: '/assets/images/portal/budget.png',
    issues: '/assets/images/portal/issues.png',
}

export const TRAQALL_SERVICES = MODULE_CONTENT.map(({ imageIndex, ...service }) => ({
    ...service,
    image: service.slug === "budget" ? "/assets/images/slider/generated/budget.png" : HOME_ASSETS[`serviceImg${imageIndex}`],
    detailImage: `/assets/images/services/services-details-${service.slug}-main.jpg?v=5`,
    detailImageRow1: `/assets/images/services/services-details-${service.slug}-a.jpg?v=5`,
    detailImageRow2: `/assets/images/services/services-details-${service.slug}-b.jpg?v=5`,
    detailImageFeature: `/assets/images/services/services-details-${service.slug}-feature.jpg?v=5`,
    screenshot: HOME_ASSETS.modulePhones[service.slug],
    portalScreenshot: PORTAL_SCREENSHOTS[service.slug],
    illustration: service.slug === "budget" ? "/assets/images/slider/generated/budget.png" : undefined,
}))

export function getServiceBySlug(slug) {
    return TRAQALL_SERVICES.find((service) => service.slug === slug)
}
