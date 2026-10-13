
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Brand from "@/components/sections/home2/Brand"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
import About from "@/components/sections/home2/About"
import Service from "@/components/sections/home2/Service"
import Funfact from "@/components/sections/home2/Funfact"
import Whychoose from "@/components/sections/home2/Whychoose"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <About />
                <Service />
                <Team />
                <Funfact />
                <Testimonial />
                <Brand />
                
                <Whychoose />
                <Blog />
            </Layout>
        </>
    )
}