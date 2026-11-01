import { TRAQALL_SERVICES } from '@/lib/services'

export const FAQ_CATEGORIES = [
    {
        id: 'get-started', label: 'Get Started', icon: 'icon-home',
        description: 'Projects, teams, and daily field records',
        sections: [{ title: 'Getting Started', items: [
            { question: 'What does TraqAll bring together?', answer: 'Timecards, Equipment, Materials, Tools, and Issues connect daily field records with project and company context.' },
            { question: 'How should I organize my records?', answer: 'Choose the relevant company and project, then organize workers, assets, stock, and site issues around the job. Use cost codes on supported entries to identify the work involved.' },
            { question: 'Can everyone perform the same actions?', answer: 'Available actions depend on module permissions and record status. For example, timecard review starts from submitted entries.' },
        ] }],
    },
    ...TRAQALL_SERVICES.map((service) => ({
        id: service.slug, label: service.title, icon: service.icon,
        description: service.shortDescription,
        sections: [{ title: service.capabilitiesHeading, items: service.faqs }],
    })),
    {
        id: 'account', label: 'Access & Support', icon: 'icon-costumer',
        description: 'Permissions and product walkthroughs',
        sections: [{ title: 'Access & Support', items: [
            { question: 'How do I see the workflow for my team?', answer: 'Request a demo through the contact page to discuss your projects, team, and the modules you need.' },
            { question: 'Where can I ask about plans and onboarding?', answer: 'Contact the TraqAll team to confirm current plan availability, onboarding arrangements, and support options for your organization.' },
        ] }],
    },
]

export function getFaqCategory(id) {
    return FAQ_CATEGORIES.find((category) => category.id === id)
}
