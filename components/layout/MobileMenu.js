'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { TRAQALL_SERVICES } from "@/lib/services"

const MobileMenu = ({ isOpen, onClose }) => {
    const pathname = usePathname()
    const closeButtonRef = useRef(null)
    const pathnameRef = useRef(pathname)
    const [mounted, setMounted] = useState(false)
    const [solutionsOpen, setSolutionsOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!isOpen) {
            setSolutionsOpen(false)
            return undefined
        }

        closeButtonRef.current?.focus()

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        document.addEventListener("keydown", onKeyDown)
        return () => document.removeEventListener("keydown", onKeyDown)
    }, [isOpen, onClose])

    useEffect(() => {
        if (pathnameRef.current === pathname) {
            return
        }
        pathnameRef.current = pathname
        onClose()
    }, [pathname, onClose])

    const handleLinkClick = () => {
        onClose()
    }

    const toggleSolutions = () => {
        setSolutionsOpen((prev) => !prev)
    }

    if (!mounted) {
        return null
    }

    return createPortal(
        <div
            className={`traqall-mobile-nav${isOpen ? " traqall-mobile-nav--open" : ""}`}
            aria-hidden={!isOpen}
        >
            <button
                type="button"
                className="traqall-mobile-nav__overlay"
                onClick={onClose}
                aria-label="Close menu"
                tabIndex={isOpen ? 0 : -1}
            />
            <aside
                className="traqall-mobile-nav__panel"
                id="traqall-mobile-nav-drawer"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                aria-hidden={!isOpen}
            >
                <div className="traqall-mobile-nav__header">
                    <Link
                        href="/"
                        className="traqall-mobile-nav__logo"
                        aria-label="TraqAll home"
                        onClick={handleLinkClick}
                    >
                        <img
                            src="/assets/images/logo/traqall-logo-light.png"
                            width="140"
                            height="36"
                            alt="TraqAll"
                        />
                    </Link>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        className="traqall-mobile-nav__close"
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <i className="fa fa-times" aria-hidden="true" />
                    </button>
                </div>

                <nav className="traqall-mobile-nav__menu" aria-label="Main">
                    <ul className="traqall-mobile-nav__list">
                        <li className="traqall-mobile-nav__item">
                            <Link href="/about" className="traqall-mobile-nav__link" onClick={handleLinkClick}>
                                About
                            </Link>
                        </li>

                        <li className={`traqall-mobile-nav__item${solutionsOpen ? " is-open" : ""}`}>
                            <div className="traqall-mobile-nav__row">
                                <Link
                                    href="/services"
                                    className="traqall-mobile-nav__link"
                                    onClick={handleLinkClick}
                                >
                                    Solutions
                                </Link>
                                <button
                                    type="button"
                                    className="traqall-mobile-nav__sub-toggle"
                                    onClick={toggleSolutions}
                                    aria-expanded={solutionsOpen}
                                    aria-label={solutionsOpen ? "Collapse Solutions submenu" : "Expand Solutions submenu"}
                                >
                                    <i className="fa fa-angle-down" aria-hidden="true" />
                                </button>
                            </div>
                            <ul className="traqall-mobile-nav__sublist">
                                <li>
                                    <Link href="/services" className="traqall-mobile-nav__sublink" onClick={handleLinkClick}>
                                        All Solutions
                                    </Link>
                                </li>
                                {TRAQALL_SERVICES.map((service) => (
                                    <li key={service.slug}>
                                        <Link
                                            href={`/${service.slug}`}
                                            className="traqall-mobile-nav__sublink"
                                            onClick={handleLinkClick}
                                        >
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="traqall-mobile-nav__item">
                            <Link href="/faq" className="traqall-mobile-nav__link" onClick={handleLinkClick}>
                                FAQ
                            </Link>
                        </li>
                        <li className="traqall-mobile-nav__item">
                            <Link href="/contact" className="traqall-mobile-nav__link" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="traqall-mobile-nav__cta">
                    <Link className="thm-btn traqall-mobile-nav__demo-btn" href="/contact" onClick={handleLinkClick}>
                        Get a Demo
                        <i className="icon-next" aria-hidden="true" />
                    </Link>
                </div>

                <ul className="traqall-mobile-nav__contact">
                    <li>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <Link href="mailto:support@traqall.com">support@traqall.com</Link>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt" aria-hidden="true" />
                        <Link href="tel:666-888-0000">666 888 0000</Link>
                    </li>
                </ul>
            </aside>
        </div>,
        document.body
    )
}

export default MobileMenu
