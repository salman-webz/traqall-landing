
'use client'
import { useCallback, useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import Sidebar from "./Sidebar"
import MobileMenu from "./MobileMenu"
import Header1 from "./header/Header1"
import Footer1 from './footer/Footer1'

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, breadcrumbDescription, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0)
    const [isMobileMenu, setMobileMenu] = useState(false)

    const closeMobileMenu = useCallback(() => {
        setMobileMenu(false)
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setMobileMenu((prev) => !prev)
    }, [])

    useEffect(() => {
        document.body.classList.toggle("mobile-menu-visible", isMobileMenu)
        return () => document.body.classList.remove("mobile-menu-visible")
    }, [isMobileMenu])


    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    const hasHeader = !headerStyle || headerStyle === 1 || headerStyle === 2

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        const syncScroll = () => setScroll(window.scrollY > 100)
        let viewportWidth = window.innerWidth
        const closeOnDesktop = () => {
            const nextWidth = window.innerWidth
            // Scrollbar removal and the virtual keyboard must not dismiss a drawer.
            if (nextWidth !== viewportWidth && nextWidth >= 1200) closeMobileMenu()
            viewportWidth = nextWidth
        }
        syncScroll()
        document.addEventListener('scroll', syncScroll, { passive: true })
        window.addEventListener('resize', closeOnDesktop)
        return () => {
            document.removeEventListener('scroll', syncScroll)
            window.removeEventListener('resize', closeOnDesktop)
            window.wow?.stop()
        }
    }, [])
    return (
        <>
            <DataBg />
            <div
                className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`}
                id="top"
                aria-hidden={isMobileMenu ? true : undefined}
            >
                {hasHeader && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={toggleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />}

                {hasHeader ? (
                    <MobileMenu isOpen={isMobileMenu} onClose={closeMobileMenu} />
                ) : null}

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbDescription={breadcrumbDescription} />}

                {children}

                <Footer1 />
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
