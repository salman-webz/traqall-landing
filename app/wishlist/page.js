'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Wishlist">
        {/* Start Wishlist Page*/} 
        <section className="wishlist-page">
            <div className="container">
                <div className="table-responsive-box">
                    <table className="wishlist-table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/wishlist-page-img-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Classy chair</h4>
                                            <p>$50.00</p>
                                        </div>
                                        <div className="product-select">
                                            <Link className="thm-btn wishlist-page__btn" href="wishlist">Select
                                                Product
                                                <i className="icon-right-arrow"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/wishlist-page-img-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Comfy chair</h4>
                                            <p>$90.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <Link className="thm-btn wishlist-page__btn" href="wishlist">Select
                                                    Product
                                                    <i className="icon-right-arrow"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/wishlist-page-img-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Boss chair</h4>
                                            <p>$60.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <Link className="thm-btn wishlist-page__btn" href="wishlist">Select
                                                    Product
                                                    <i className="icon-right-arrow"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/wishlist-page-img-4.jpg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Sofa chair</h4>
                                            <p>$170.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <Link className="thm-btn wishlist-page__btn" href="wishlist">Select
                                                    Product
                                                    <i className="icon-right-arrow"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        {/* End Wishlist Page*/} 
        </Layout>
        </>
    )
}