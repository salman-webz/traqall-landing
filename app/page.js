import Layout from "@/components/layout/Layout"
import HomeLandingFlow from "@/components/sections/home1/HomeLandingFlow"
import Service from "@/components/sections/home1/Service"
import Pricing from "@/components/sections/home1/Pricing"
import Appoinment from "@/components/sections/home1/appointment"
import HowItWorks from "@/components/sections/HowItWorks"
import Faq from "@/components/sections/home1/Faq"
import Blog from "@/components/sections/home1/Blog"

export default function Home() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <HomeLandingFlow />

            <div className="home-page-main">
                <Service />
                <Pricing />
                <Appoinment />
                <HowItWorks />
                <Faq />
                <Blog />
            </div>
        </Layout>
    )
}
