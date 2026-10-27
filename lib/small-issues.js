import { getServiceBySlug } from "@/lib/services"

const issues = getServiceBySlug("issues")

export const SMALL_ISSUES = {
    slug: "small-issues",
    title: "Small issues",
    detailImage: issues.detailImage,
    detailImageRow1: issues.detailImageRow1,
    detailImageRow2: issues.detailImageRow2,
    detailImageFeature: issues.detailImageFeature,
    intro: "Keep everyday site problems from becoming tomorrow's delays. Use TraqAll's issue workflow to capture minor defects, unfinished tasks, and routine follow-ups in one place, with a clear owner for every action.",
    introSecondary: "From a missing label to a paint touch-up or an incomplete fixture, give crews the context they need to finish the job. Record the project, location, and work required so the next person can pick up the task without chasing messages.",
    qualityText: "Make daily walkthroughs more productive with a shared record of outstanding work. Review open items, follow up with the responsible team, and confirm the fix before closing the issue.",
    capabilitiesHeading: "Keep Small Issues Moving",
    capabilitiesIntro: "Use the existing issue management workflow for everyday corrections and punch-list follow-ups, from the first observation through resolution.",
    features: [
        "Capture minor defects and routine site follow-ups",
        "Categorize issues and set an appropriate severity",
        "Assign an owner and track outstanding work",
        "Review resolution history before project handover",
    ],
    faqs: [
        {
            question: "What belongs on a small issues list?",
            answer: "Examples include paint touch-ups, missing room labels, incomplete finishes, and other routine corrections. Describe what needs attention and where it is located so the assigned team can act on it.",
        },
        {
            question: "How does this relate to the Issues module?",
            answer: "Small issues uses the same reporting, assignment, and status tracking approach as the Issues module, focused on everyday follow-ups. Keep these items categorized and prioritized so supervisors can review them alongside other project work.",
        },
        {
            question: "When should a small issue be escalated?",
            answer: "If an item affects safety, blocks work, or reveals a larger problem, raise its priority and notify the responsible supervisor using your site's reporting procedure. An issue's impact should determine its response, even if the original task seemed minor.",
        },
        {
            question: "What should the team check before closing an item?",
            answer: "Confirm that the requested correction is complete, review the outcome with the responsible person, and record the resolution. This gives the next shift and the handover team a clear history of the work.",
        },
    ],
}
