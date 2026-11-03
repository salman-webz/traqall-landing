import Layout from '@/components/layout/Layout'
import Pricing from '@/components/sections/home1/Pricing'

export const metadata = {
    title: 'Pricing | TraqAll',
    description: 'Compare Basic, Pro, and Business monthly plans, with optional assistant pricing.',
}

export default function PricingPage() {
    return <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Pricing"><Pricing /></Layout>
}
