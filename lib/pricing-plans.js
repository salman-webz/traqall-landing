// Monthly pricing shared by every pricing section.
export const PRICING_PLANS = [
    {
        name: 'Basic', monthly: 299, description: 'For a single crew.',
        people: 25, projects: 5, featureRequests: 'Within A Week', onboarding: 'Self-Service',
        features: ['25 people', '5 projects', 'All core Traqall modules', 'Feature requests we try to ship within a week', 'Standard support'],
    },
    {
        name: 'Pro', monthly: 599, description: 'For companies running several projects.',
        people: 75, projects: 15, featureRequests: 'Within A Week', onboarding: 'Self-Service',
        features: ['75 people', '15 projects', 'Everything in Basic', 'Priority support'],
    },
    {
        name: 'Business', monthly: 999, description: 'For larger companies.',
        people: 200, projects: 'Unlimited', featureRequests: 'Priority', onboarding: 'Hands-On',
        features: ['200 people', 'Unlimited projects', 'Everything in Pro', 'Hands-on company and project setup', 'Priority weekly feature requests', 'Dedicated onboarding'],
    },
]

export const PRICING_MODULES = [
    { name: 'Timecards', description: 'Approvals, overtime, cost codes, kiosk and mobile check-in' },
    { name: 'Equipment', description: 'Check-out, transfers, maintenance, photos, and QR labels' },
    { name: 'Materials', description: 'Project stock, receive and issue, vendors, and photos' },
    { name: 'Tools', description: 'Check-out, due dates, transfers, lost or damaged' },
    { name: 'Issues', description: 'Photos, comments, and linked people or equipment' },
    { name: 'Budget', description: 'Labor, equipment, and materials by cost code' },
    { name: 'Directory', description: 'People, crews, vendors, and who can see each tool' },
    { name: 'Reports', description: 'Hours, missing timecards, utilization, stock, and tool condition' },
    { name: 'Purchase Orders', description: 'Email the vendor directly to order materials' },
    { name: 'AI Assistant', description: 'Type or speak to command every tool' },
]
