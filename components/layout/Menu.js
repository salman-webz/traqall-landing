import Link from "next/link"
import SolutionsMegaMenu from "./SolutionsMegaMenu"

export default function Menu() {
    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/about">About</Link>
                </li>

                <li className="dropdown megamenu solutions-megamenu">
                    <Link href="/services">Solutions</Link>
                    <ul>
                        <li>
                            <SolutionsMegaMenu />
                        </li>
                    </ul>
                </li>

                <li>
                    <Link href="/small-issues">Small issues</Link>
                </li>
                <li>
                    <Link href="/faq">FAQ</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
