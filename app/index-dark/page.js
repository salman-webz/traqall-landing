import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Service from "@/components/sections/home1/Service"
import Pricing from "@/components/sections/home1/Pricing"
import Testimonial from "@/components/sections/home1/Testimonial"
import Team from "@/components/sections/home1/Team"
import Appoinment from "@/components/sections/home1/Appoinment"
import Blog from "@/components/sections/home1/Blog"
import HowItWorks from "@/components/sections/HowItWorks"
import Faq from "@/components/sections/home1/Faq"

export default function Home() {

    return (
        <>
        <div className="dark-version">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <Service />
                <Team />
                <Pricing />
                <Testimonial />
                <Appoinment />
                <HowItWorks />
                <Faq />
                <Blog />
            </Layout>
        </div>
        </>
    )
}