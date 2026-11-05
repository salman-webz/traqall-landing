const timecards = { title: 'Timecards', href: '/timecards', screenshot: '/assets/images/portal/timecard.png', description: 'Record crew hours, assign cost codes, and move timecards through review.' }
const materials = { title: 'Materials', href: '/materials', screenshot: '/assets/images/portal/materials.png', description: 'Keep material catalogs, project quantities, and stock movements in one place.' }
export const BLOG_MODULES = {
    Timecards: timecards,
    Equipment: { title: 'Equipment', href: '/equipment', screenshot: '/assets/images/portal/equipments.png', description: 'Track availability, assignments, usage, and maintenance for each asset.' },
    Materials: materials,
    Purchasing: materials,
    Tools: { title: 'Tools', href: '/small-tools', screenshot: '/assets/images/portal/tools.png', description: 'Keep track of tool checkouts, returns, condition, and project inventory.' },
    Issues: { title: 'Issues', href: '/issues', screenshot: '/assets/images/portal/issues.png', description: 'Assign responsibility, set priorities, and follow issues through resolution.' },
    Budget: { title: 'Budget', href: '/budget', screenshot: '/assets/images/portal/budget.png', description: 'Compare budgets, actual spending, and remaining amounts by cost code.' },
    'Team management': { ...timecards, title: 'The platform', href: '/services', description: 'Connect your teams and project records across the TraqAll platform.' },
    'Project setup': { ...materials, title: 'The platform', href: '/services', description: 'Give your people, resources, and daily records a shared project context.' },
}
