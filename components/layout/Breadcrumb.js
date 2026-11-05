import Link from 'next/link'
import { SITE_ASSETS } from '@/lib/site-assets'

export default function Breadcrumb({ breadcrumbTitle, breadcrumbDescription }) {
    return (
        <section className="product-hero" style={{ '--hero-image': `url("${SITE_ASSETS.pageHeaderBg}")` }}>
            <div className="container">
                <nav className="product-hero__crumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">{breadcrumbTitle}</span>
                </nav>
                <div className="product-hero__copy">
                    <div>
                        <p className="product-hero__eyebrow">YOUR FIELD. CONNECTED.</p>
                        <h1>{breadcrumbTitle}</h1>
                    </div>
                    {breadcrumbDescription && <p>{breadcrumbDescription}</p>}
                </div>
            </div>
        </section>
    )
}
