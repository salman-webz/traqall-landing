import Link from 'next/link'

export default function BlogCard({ post }) {
    return (
        <article className="journal-card">
            <Link href={`/blog/${post.slug}`} className="journal-card__image" tabIndex={-1} aria-hidden="true">
                <img src={post.image} alt="" width="1200" height="800" loading="lazy" />
                <span className="journal-card__image-arrow" aria-hidden="true">↗</span>
            </Link>
            <div className="journal-card__body">
                <p className="journal-card__category">{post.category}</p>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p className="journal-card__excerpt">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="journal-card__link" aria-label={`Read article: ${post.title}`}>Read the story <span aria-hidden="true">→</span></Link>
            </div>
        </article>
    )
}
