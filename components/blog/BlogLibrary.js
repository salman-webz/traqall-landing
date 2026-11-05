'use client'
import { useState } from 'react'
import Link from 'next/link'
import BlogCard from './BlogCard'

export default function BlogLibrary({ posts }) {
    const [category, setCategory] = useState('All topics')
    const [query, setQuery] = useState('')
    const categories = ['All topics', ...new Set(posts.map(post => post.category))]
    const showFeatured = category === 'All topics' && !query.trim()
    const filtered = posts.filter(post => (category === 'All topics' || category === post.category) && `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query.trim().toLowerCase()))
    const visible = showFeatured ? filtered.slice(1) : filtered
    const featured = posts[0]
    return (
        <main className="journal-library">
            <div className="container">
                <header className="journal-library__header">
                    <nav className="journal-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Blogs</span></nav>
                    <div className="journal-library__intro"><div><p className="journal-eyebrow"><span aria-hidden="true" />THE TRAQALL JOURNAL</p><h1>Small habits.<br /><span>Stronger operations.</span></h1></div><p>Practical ideas for the work behind the work. Explore better ways to manage your time, resources, and project costs.</p></div>
                </header>
                {showFeatured && <article className="journal-featured">
                    <Link href={`/blog/${featured.slug}`} className="journal-featured__image" aria-hidden="true" tabIndex={-1}><img src={featured.image} alt="" width="1200" height="800" fetchPriority="high" /></Link>
                    <div className="journal-featured__body"><p className="journal-eyebrow">FEATURED READ</p><h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.excerpt}</p><Link href={`/blog/${featured.slug}`} className="journal-featured__link">Read the story <span aria-hidden="true">↗</span></Link></div>
                </article>}
                <section className="journal-library__browse" aria-labelledby="journal-browse-title">
                    <div className="journal-library__toolbar"><div><h2 id="journal-browse-title">{showFeatured ? 'More to explore' : 'Explore the journal'}</h2><p role="status">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}{category !== 'All topics' ? ` in ${category.toLowerCase()}` : ' across your daily operations'}</p></div><label className="journal-search"><span className="journal-sr-only">Search articles</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a topic or idea…" /></label></div>
                    <div className="journal-topics" role="group" aria-label="Filter articles by topic">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
                    {visible.length ? <div className="journal-grid">{visible.map(post => <BlogCard key={post.slug} post={post} />)}</div> : <div className="journal-empty"><h3>No articles found</h3><p>Try a different search or browse all topics.</p><button onClick={() => { setQuery(''); setCategory('All topics') }}>Clear filters</button></div>}
                </section>
                <section className="journal-library__cta"><div><p className="journal-eyebrow">PUT IT INTO PRACTICE</p><h2>Good habits need a good home.</h2><p>Bring your field records and project costs together with TraqAll.</p></div><Link href="/contact">See TraqAll in action <span aria-hidden="true">↗</span></Link></section>
            </div>
        </main>
    )
}
