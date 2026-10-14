
'use client'
import { useCallback, useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"
import MobileMenu from "./MobileMenu"
import Header1 from "./header/Header1"
import Footer1 from './footer/Footer1'

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
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

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

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

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <DataBg />
            <div
                className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`}
                id="top"
                aria-hidden={isMobileMenu ? true : undefined}
            >
                {hasHeader && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={toggleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}

                {hasHeader ? (
                    <MobileMenu isOpen={isMobileMenu} onClose={closeMobileMenu} />
                ) : null}

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                <Footer1 />
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
