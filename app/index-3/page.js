
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Blog from "@/components/sections/home3/Blog"
import Service from "@/components/sections/home3/Service"
import About from "@/components/sections/home3/About"
import Features from "@/components/sections/home3/Features"
import Team from "@/components/sections/home3/Team"
import Testimonial from "@/components/sections/home3/Testimonial"
import Portfolio from "@/components/sections/home3/Portfolio"
import Work from "@/components/sections/home3/Work"
import Subscribe from "@/components/sections/home3/Subscribe"
import Video from "@/components/sections/home3/Video"
import Whychoose from "@/components/sections/home3/Whychoose"
import Brand from "@/components/sections/home3/Brand"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />                
                <Features />
                <About />
                <Service />
                <Portfolio />
                <Video />
                <Team />
                <Work />
                <Whychoose />
                <Brand />
                <Testimonial />
                <Subscribe />
                <Blog />
            </Layout>
        </>
    )
}