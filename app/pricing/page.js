import Layout from '@/components/layout/Layout'
import Pricing from '@/components/sections/home1/Pricing'

export const metadata = {
    title: 'Pricing | TraqAll',
    description: 'Compare Basic, Pro, and Business monthly plans, starting at $299/month. Every plan includes all core modules and AI Assistant.',
}

export default function PricingPage() {
    return <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Pricing" breadcrumbDescription="Choose a plan that fits your crew. Bring timecards, equipment, materials, tools, budgets, and issue tracking together in one platform."><Pricing showComparison /></Layout>
}
