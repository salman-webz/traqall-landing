'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { useState } from "react"
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Account">
        
        {/* Start Account*/} 
        <section className="account">
            <div className="container">
                <div className="account__main-tab-box tabs-box">
                    <ul className="tab-buttons clearfix list-unstyled">
                        <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                        <span>Login</span>
                                </li>
                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                <span>Register</span>
                                </li>
                    </ul>
                    <div className="tabs-content">
                        {/* tab*/} 
                        <div className={activeIndex == 1 ? "tab active-tab" : "tab"}>
                            <div className="account__main-tab-inner">
                                <form className="account__form">
                                    <div className="account__form-input-box">
                                        <input type="text" placeholder="Username"/>
                                    </div>
                                    <div className="account__form-input-box">
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                    <div className="account__form-btn-box">
                                        <button type="submit" className="thm-btn account__form-btn">Login now
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </button>
                                        <div className="checked-box">
                                            <input type="checkbox" name="skipper2" id="skipper2"/>
                                            <label><span></span>Remember me?</label>
                                        </div>
                                    </div>
                                    <div className="account__form-forgot-password">
                                        <Link href="#">Forgot your password?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* tab*/} 
                        <div className={activeIndex == 2 ? "tab active-tab" : "tab"}>
                            <div className="account__main-tab-inner">
                                <form className="account__form">
                                    <div className="account__form-input-box">
                                        <input type="text" placeholder="Username"/>
                                    </div>
                                    <div className="account__form-input-box">
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                    <div className="account__form-input-box">
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                    <div className="account__form-btn-box">
                                        <button type="submit" className="thm-btn account__form-btn">Register
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </button>
                                        <div className="checked-box">
                                            <input type="checkbox" name="skipper3" id="skipper3"/>
                                            <label><span></span>Remember me?</label>
                                        </div>
                                    </div>
                                    <div className="account__form-forgot-password">
                                        <Link href="#">Forgot your password?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* tab*/} 
                    </div>
                </div>
            </div>
        </section>
        {/* End Account*/}

        </Layout>
        </>
    )
}