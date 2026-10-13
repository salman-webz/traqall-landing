
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details">
        {/* Start Blog Details*/} 
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    {/* Start Blog Standard Content*/} 
                    <div className="col-xl-8">
                        <div className="blog-details__content">

                            {/* Start Blog Standard Single*/} 
                            <div className="blog-standard__single">
                                <div className="blog-standard__single-img">
                                    <img src="assets/images/blog/blog-details-img1.jpg" alt=""/>
                                </div>

                                <div className="blog-standard__single-content">

                                    <ul className="meta-box">
                                        <li>
                                            <p><span className="icon-calendar"></span> <Link href="#">20 Jun, 2024</Link></p>
                                        </li>
                                        <li>
                                            <p><span className="icon-user"></span> <Link href="#">Admin</Link></p>
                                        </li>
                                        <li>
                                            <p><span className="icon-conversation"></span> <Link href="#">02 Comments</Link></p>
                                        </li>
                                    </ul>
                                    <h2>Ultimate guide construction project manage</h2>
                                    <p>Detailed analyses of successful construction projects, highlighting challenges,
                                        solutions, and outcomes Visual transformations of construction projects,
                                        showcasing the impact of the work Reviews and recommendations of construction
                                        tools and equipment.</p>

                                    <p className="text2">Pellentesque aliquet est massa, sit amet tempor mi auctor nec.
                                        Mauris a nibh sed libero fer mentum aliquet. Quisque sit amet faucibus magna.
                                        Donec purus mi, commodo id commodo vel, imperdiet ut mauris</p>

                                </div>
                            </div>
                            {/* End Blog Standard Single*/} 

                            <div className="blog-details__content-text1">
                                <div className="icon-box">
                                    <span className="icon-quotation"></span>
                                </div>

                                <div className="text-box">
                                    <h4>Good Advice for contractors and clients on navigating contracts and agreements
                                        Histories and insights into famous construction </h4>
                                </div>
                            </div>

                            <div className="blog-details__content-text2">
                                <h2>Ultimate Business Strategy Solution</h2>
                                <p className="text1">How-to articles on specific construction techniques Exploring the
                                    impact of technologies like AI, 3D printing, and as drones on construction
                                    Sustainable practices, materials, and certifications in construction Articles on
                                    best practices for maintaining safety on construction sites Updates on building
                                    codes, </p>
                                <p className="text2">Strategies for keeping construction projects on schedule Interviews
                                    with architects, engineers, and other best professionals in the construction
                                    industry Profiles of local construction </p>
                            </div>

                            <div className="blog-details__content-img1">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="single-img">
                                            <img src="assets/images/blog/blog-details-img2.jpg" alt=""/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="single-img">
                                            <img src="assets/images/blog/blog-details-img3.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>

                                <p>Visual explanations of complex construction processes, techniques, or industry
                                    statistics Tutorials, project interviews showcases, or interviews in video format to
                                    complement written content Conduct interviews with industry experts, architects,
                                    engineers, or construction professionals on releva</p>
                            </div>

                            <div className="blog-details__content-text3">
                                <div className="blog-details__content-text3-tag">
                                    <div className="title-box">
                                        <h2>Tags:</h2>
                                    </div>

                                    <ul>
                                        <li><Link href="#">Landscape</Link></li>
                                        <li><Link href="#">Residences</Link></li>
                                        <li><Link href="#">Home Design</Link></li>
                                    </ul>
                                </div>

                                <div className="blog-details__content-text3-share">
                                    <div className="title-box">
                                        <h2>Share:</h2>
                                    </div>

                                    <ul>
                                        <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                        <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                        <li><Link href="#"><span className="icon-linkedin-big-logo"></span></Link></li>
                                        <li><Link href="#"><span className="icon-twitter-1"></span></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="comment-one">
                                <div className="title-box">
                                    <h2>03 Comments</h2>
                                </div>

                                <div className="comment-one__single">
                                    <div className="comment-one__single-inner">
                                        <div className="comment-one__img">
                                            <img src="assets/images/blog/blog-details-img4.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <div className="comment-one__content-top">
                                                <div className="title-box">
                                                    <h2>Leslie Alexander</h2>
                                                    <p><span className="icon-calendar"></span> 20 Jun, 2024</p>
                                                </div>

                                                <div className="btn-box">
                                                    <Link href="#">Reply</Link>
                                                </div>

                                            </div>

                                            <div className="comment-one__content-text">
                                                <p>Your team's brilliance, determination, and confidence will drive you
                                                    to conquer new frontiers; greatness lies within you. greatnes lies.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-one__single style2">
                                    <div className="comment-one__single-inner">
                                        <div className="comment-one__img">
                                            <img src="assets/images/blog/blog-details-img5.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <div className="comment-one__content-top">
                                                <div className="title-box">
                                                    <h2>Savannah Nguyen</h2>
                                                    <p><span className="icon-calendar"></span> 20 Jun, 2024</p>
                                                </div>

                                                <div className="btn-box">
                                                    <Link href="#">Reply</Link>
                                                </div>

                                            </div>

                                            <div className="comment-one__content-text">
                                                <p>Your team's brilliance, determination, and confidence will drive you
                                                    to conquer new frontiers; greatness lies within you. greatnes lies.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-one__single">
                                    <div className="comment-one__single-inner">
                                        <div className="comment-one__img">
                                            <img src="assets/images/blog/blog-details-img6.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <div className="comment-one__content-top">
                                                <div className="title-box">
                                                    <h2>Jenny Wilson</h2>
                                                    <p><span className="icon-calendar"></span> 20 Jun, 2024</p>
                                                </div>

                                                <div className="btn-box">
                                                    <Link href="#">Reply</Link>
                                                </div>

                                            </div>

                                            <div className="comment-one__content-text">
                                                <p>Your team's brilliance, determination, and confidence will drive you
                                                    to conquer new frontiers; greatness lies within you. greatnes lies.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-form">
                                <div className="title-box">
                                    <h2>Leave a Reply</h2>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                </div>

                                <form className="contact-form-validated" action="assets/inc/sendemail.php" method="post"
                                    >
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" name="name" placeholder="Name" required=""/>
                                                <div className="icon"><span className="icon-user"></span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="email" name="email" placeholder="Email" required=""/>
                                                <div className="icon"><span className="icon-email"></span></div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="input-box">
                                                <textarea name="message" placeholder="Message"></textarea>
                                                <div className="icon style2"><span className="fa fa-pencil"></span></div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">

                                            <div className="comment-form__checkbox">
                                                <input type="checkbox" name="agree " id="agree" />
                                                <label><span></span>Save my name, email, and website in this
                                                    browser for the next time I comment.</label>
                                            </div>

                                            <div className="comment-form__btn">
                                                <button type="submit" className="thm-btn">
                                                    Submit Now
                                                    <i className="icon-next"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                    </div>
                    {/* End Blog Standard Content*/} 

                    {/* Start Sidebar*/} 
                    <div className="col-xl-4">
                        <div className="sidebar">
                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search..."/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                            {/* End Sidebar Single*/} 

                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__services wow fadeInUp" data-wow-delay=".1s">
                                <div className="title-box">
                                    <h2>All Services</h2>
                                </div>

                                <ul className="sidebar__services-list">
                                    <li className="active"><Link href="#">Structural Mastery <span
                                                className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="#">Foundation Forte
                                            <span className="icon-right-arrow"></span></Link></li>
                                    <li><Link href="#">Build Smart Solutions <span className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li><Link href="#">Precision Builds <span className="icon-right-arrow"></span></Link>
                                    </li>
                                    <li><Link href="#">Apex Remodeling <span className="icon-right-arrow"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/} 

                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__recent-post wow fadeInUp" data-wow-delay=".1s">
                                <div className="title-box">
                                    <h2>Recent Post</h2>
                                </div>

                                <ul className="sidebar__recent-post-list">
                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/blog/recent-post-img1.jpg" alt=""/>
                                        </div>

                                        <div className="text-box">
                                            <p><span className="icon-calendar"></span> 20 Jun, 2024</p>
                                            <h3><Link href="#">Building Dreams, One Brick <br/> at a Time</Link></h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/blog/recent-post-img2.jpg" alt=""/>
                                        </div>

                                        <div className="text-box">
                                            <p><span className="icon-calendar"></span> 20 Jun, 2024</p>
                                            <h3><Link href="#">Crafting Tomorrow’s work <br/> Foundations</Link></h3>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/blog/recent-post-img3.jpg" alt=""/>
                                        </div>

                                        <div className="text-box">
                                            <p><span className="icon-calendar"></span> 20 Jun, 2024</p>
                                            <h3><Link href="#">Solid Structures, Solid and <br/> Relationships</Link></h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/} 

                            {/* Start Sidebar Single*/} 
                            <div className="sidebar__single sidebar__tags wow fadeInUp" data-wow-delay=".1s">
                                <div className="title-box">
                                    <h2>Popular Tags</h2>
                                </div>
                                <ul className="sidebar__tags-list">
                                    <li><Link href="#">Business</Link></li>
                                    <li><Link href="#">Digital Agency</Link></li>
                                    <li><Link href="#">Services</Link></li>
                                    <li><Link href="#">Residences</Link></li>
                                    <li><Link href="#">Agency</Link></li>
                                    <li><Link href="#">Plumbing</Link></li>
                                    <li><Link href="#">Home Design</Link></li>
                                </ul>
                            </div>
                            {/* End Sidebar Single*/} 
                        </div>
                    </div>
                    {/* End Sidebar*/} 
                </div>
            </div>
        </section>
        {/* End Blog Standard*/}

        </Layout>
        </>
    )
}