import Layout from '@/components/layout/Layout'
import Appoinment from '@/components/sections/home1/appointment'

export const metadata = {
    title: 'Contact | TraqAll',
    description: 'Contact TraqAll support or request a demonstration of our construction field-operations platform.',
}

export default function ContactPage() {
    return (
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact Us">
            <Appoinment contactPage />
        </Layout>
    )
}
