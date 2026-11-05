import Link from 'next/link'
import BlogCard from '@/components/blog/BlogCard'
import { BLOG_POSTS } from '@/lib/blog-posts.mjs'

export default function Blog() {
    return (
        <section className="journal-home">
            <div className="container">
                <div className="journal-heading">
                    <div><p className="journal-eyebrow">THE FIELD JOURNAL</p><h2>Better habits. Better jobs.</h2><p>Practical reads for the people keeping construction moving.</p></div>
                    <Link href="/blog" className="journal-all">View all blogs <span aria-hidden="true">↗</span></Link>
                </div>
                <div className="journal-grid journal-grid--home">{BLOG_POSTS.slice(0, 4).map(post => <BlogCard key={post.slug} post={post} />)}</div>
            </div>
        </section>
    )
}
