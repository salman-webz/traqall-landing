
import Link from "next/link"
import Menu from "../Menu"

export default function Header2({ scroll, isMobileMenu, handlePopup, handleMobileMenu }) {
    return (
        <>

        {/* Start Main Header Two*/} 
        <header className="main-header-one style2">
            {/* Start Main Header One Top*/} 
            <div className="main-header-one__top">
                <div className="container">
                    <div className="main-header-one__top-inner">
                        <ul className="header-style1__contact">
                            <li>
                                <div className="icon">
                                    <i className="icon-clock"></i>
                                </div>
                                <div className="text">
                                    <p>6:00 am - 4:20 pm - Sat - Sun</p>
                                </div>
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="icon-phone-call"></i>
                                </div>
                                <div className="text">
                                    <p><Link href="mailto:support@traqall.com">support@traqall.com</Link></p>
                                </div>
                            </li>

                            <li>
                                <div className="icon">
                                    <i className="icon-placeholder"></i>
                                </div>
                                <div className="text">
                                    <p>Syracuse, Connecticut- 17A</p>
                                </div>
                            </li>
                        </ul>

                        <div className="main-header-one__top-right">
                            <div className="main-header__language-switcher">
                                <div className="icon">
                                    <span className="icon-globe"></span>
                                </div>

                                <div className="language-switcher clearfix">
                                    <form action="#" className="clearfix">
                                        <div className="select-box clearfix">
                                            <select className="selectmenu wide">
                                                <option >English</option>
                                                <option>France</option>
                                                <option>Germany</option>
                                                <option>Bangladesh</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="header-style1__social-links">
                                <Link href="#"><i className="icon-facebook-app-symbol"></i></Link>
                                <Link href="#"><i className="icon-twitter1"></i></Link>
                                <Link href="#"><i className="icon-linkedin-big-logo"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Main Header One Top*/} 

            {/* Start Main Header One Bottom*/} 
            <div className="main-header-one__bottom">
                <nav className="main-menu main-menu--style2">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-header-one__bottom-left">
                                    <div className="logo-one">
                                        <Link href="/"><img src="assets/images/logo/traqall-logo-light.png" width="160" height="40" alt="TraqAll"/></Link>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-middle">
                                    <div className="main-menu__main-menu-box">
                                        <button
                                            type="button"
                                            className="mobile-nav__toggler"
                                            onClick={handleMobileMenu}
                                            aria-expanded={isMobileMenu}
                                            aria-controls="traqall-mobile-nav-drawer"
                                            aria-label={isMobileMenu ? "Close menu" : "Open menu"}
                                        >
                                            <i className="fa fa-bars" aria-hidden="true" />
                                        </button>
                                        <Menu/>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-right">
                                    <div className="header-search-box">
                                        <Link href="#"
                                            className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}></Link>
                                    </div>

                                    <div className="main-header__btn">
                                        <Link className="thm-btn" href="/contact">Get a Demo
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {/* End Main Header One Bottom*/} 
        </header>
        {/* End Main Header Two*/} 

        <div className={`stricky-header stricky-header--two stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
            <nav className="main-menu main-menu--style2">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-header-one__bottom-left">
                                    <div className="logo-one">
                                        <Link href="/"><img src="assets/images/logo/traqall-logo-light.png" width="160" height="40" alt="TraqAll"/></Link>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-middle">
                                    <div className="main-menu__main-menu-box">
                                        <button
                                            type="button"
                                            className="mobile-nav__toggler"
                                            onClick={handleMobileMenu}
                                            aria-expanded={isMobileMenu}
                                            aria-controls="traqall-mobile-nav-drawer"
                                            aria-label={isMobileMenu ? "Close menu" : "Open menu"}
                                        >
                                            <i className="fa fa-bars" aria-hidden="true" />
                                        </button>
                                        <Menu/>
                                    </div>
                                </div>

                                <div className="main-header-one__bottom-right">
                                    <div className="header-search-box">
                                        <Link href="#"
                                            className="main-menu__search search-toggler icon-search-interface-symbol" onClick={handlePopup}></Link>
                                    </div>

                                    <div className="main-header__btn">
                                        <Link className="thm-btn" href="/contact">Get a Demo
                                            <i className="icon-next"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>{/* /.stricky-header */}

        </>
    )
}
