import { CONTACT_INFO, emailHref, phoneHref } from '@/lib/contact-info.mjs'
import Link from "next/link"

const solutions = [['Timecards', '/timecards'], ['Equipment', '/equipment'], ['Materials', '/materials'], ['Budget', '/budget'], ['Tools', '/small-tools'], ['Issues', '/issues']]
const company = [['About us', '/about'], ['All solutions', '/services'], ['Pricing', '/pricing'], ['Blog', '/blog'], ['Contact us', '/contact']]
const socials = [['Facebook', 'icon-facebook-app-symbol'], ['Twitter', 'icon-twitter1'], ['LinkedIn', 'icon-linkedin-big-logo'], ['Behance', 'icon-behance']]

export default function Footer1() {
    return (
        <footer className="site-footer footer-modern">
            <div className="container">
                <div className="footer-modern__top">
                    <Link href="/" className="footer-modern__logo" aria-label="TraqAll home">
                        <img src="/assets/images/logo/traqall-logo-darke-bg.png" width="160" height="40" alt="TraqAll" />
                    </Link>
                    <div className="footer-modern__statement">
                        <h2>Better connected. Better built.</h2>
                        <p>One platform for your people, projects, and progress.</p>
                    </div>
                    <div className="footer-modern__action">
                        <p className="footer-modern__follow">Follow TraqAll</p>
                        <div className="footer-modern__socials" aria-label="Social media">
                            {socials.map(([name, icon]) => <Link key={name} href="#" aria-label={name}><span className={icon} aria-hidden="true" /></Link>)}
                        </div>
                    </div>
                </div>
                <div className="footer-modern__main">
                    <div className="footer-modern__intro">
                        <p>Less paperwork.<br />More progress.</p>
                        <span>Bring your people, equipment, and project costs together. Keep every job moving with TraqAll.</span>
                        <Link href="/contact" className="footer-modern__cta">Get a demo <span aria-hidden="true">→</span></Link>
                    </div>
                    <nav aria-label="Footer solutions">
                        <h3>Solutions</h3>
                        <ul>{solutions.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
                    </nav>
                    <nav aria-label="Footer company">
                        <h3>Company</h3>
                        <ul>{company.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
                    </nav>
                    <div className="footer-modern__contact">
                        <h3>Let’s connect</h3>
                        <a href={phoneHref()} className="footer-modern__phone">{CONTACT_INFO.phones[0]}</a>
                        <a href={emailHref()}>{CONTACT_INFO.email}</a>
                        <p>{CONTACT_INFO.address}<br /><span>{CONTACT_INFO.addressNote}</span></p>
                        <Link href="/faq" className="footer-modern__support">Visit support center <span aria-hidden="true">↗</span></Link>
                    </div>
                </div>
                <div className="footer-modern__bottom">
                    <p>© {new Date().getFullYear()} TraqAll. All rights reserved.</p>
                    <nav aria-label="Footer legal and help">
                        <Link href="/terms-and-conditions">Terms & conditions</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/contact">Support</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
