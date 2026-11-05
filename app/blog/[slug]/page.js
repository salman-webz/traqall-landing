import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import BlogCard from '@/components/blog/BlogCard'
import { BLOG_POSTS, getBlogPost } from '@/lib/blog-posts.mjs'
import { BLOG_MODULES } from '@/lib/blog-modules.mjs'

export const dynamicParams = false
export function generateStaticParams() { return BLOG_POSTS.map(post => ({ slug: post.slug })) }

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = getBlogPost(slug)
    if (!post) return { title: 'Article not found | TraqAll' }
    return { title: `${post.title} | TraqAll`, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, type: 'article', images: [{ url: post.image, width: 1200, height: 800, alt: post.imageAlt }] } }
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params
    const post = getBlogPost(slug)
    if (!post) notFound()
    const module = BLOG_MODULES[post.category]
    const related = [...BLOG_POSTS.filter(item => item.slug !== slug && item.category === post.category), ...BLOG_POSTS.filter(item => item.slug !== slug && item.category !== post.category)].slice(0, 3)
    return (
        <Layout headerStyle={2} footerStyle={1}>
            <main className="journal-article">
                <header className="journal-article__header container">
                    <nav className="journal-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog">Blogs</Link><span aria-hidden="true">/</span><span aria-current="page">{post.category}</span></nav>
                    <div className="journal-article__hero"><div className="journal-article__title"><h1>{post.title}</h1><a href="#article-body" className="journal-article__start">Read the story <span aria-hidden="true">↓</span></a></div><figure><img src={post.image} alt={post.imageAlt} width="1200" height="800" fetchPriority="high" /></figure></div>
                </header>
                <div className="container journal-article__layout" id="article-body">
                    <article className="journal-article__content" aria-label={post.title}>
                        <div className="journal-article__prose">{post.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
                        <div className="journal-article__end"><span>TraqAll Journal</span><Link href="/blog">← All articles</Link></div>
                    </article>
                    <aside className="journal-article__aside"><p className="journal-eyebrow">INSIDE TRAQALL</p><h2>{module.title}</h2><p>{module.description}</p><Link href={module.href} className="journal-article__preview" aria-label={`Explore TraqAll ${module.title.toLowerCase()}`}><img src={module.screenshot} alt={`TraqAll ${module.title.toLowerCase()} interface`} width="510" height="248" loading="lazy" /><span>Explore {module.title.toLowerCase()} <span aria-hidden="true">↗</span></span></Link><div className="journal-article__help"><p>See how it fits your day.</p><Link href="/contact">Book a demo <span aria-hidden="true">→</span></Link></div></aside>
                </div>
                <section className="journal-related"><div className="container"><div className="journal-heading"><div><p className="journal-eyebrow">KEEP EXPLORING</p><h2>A little more know-how.</h2></div><Link href="/blog" className="journal-all">All articles <span aria-hidden="true">↗</span></Link></div><div className="journal-grid">{related.map(item => <BlogCard key={item.slug} post={item} />)}</div></div></section>
            </main>
        </Layout>
    )
}
