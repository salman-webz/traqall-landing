'use client'
import Link from "next/link"
import { useMemo, useState } from "react"
import { FAQ_CATEGORIES } from "@/lib/faq-content"

export default function FaqHub() {
    const [activeCategory, setActiveCategory] = useState(FAQ_CATEGORIES[0].id)
    const [expandedId, setExpandedId] = useState(null)
    const [search, setSearch] = useState("")

    const category = FAQ_CATEGORIES.find((c) => c.id === activeCategory)

    const filteredSections = useMemo(() => {
        if (!category) return []
        const q = search.trim().toLowerCase()
        if (!q) return category.sections

        return category.sections
            .map((section) => ({
                ...section,
                items: section.items.filter(
                    (item) =>
                        item.question.toLowerCase().includes(q) ||
                        item.answer.toLowerCase().includes(q)
                ),
            }))
            .filter((section) => section.items.length > 0)
    }, [category, search])

    const totalQuestions = filteredSections.reduce(
        (sum, s) => sum + s.items.length,
        0
    )

    const toggleQuestion = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section className="faq-hub">
            <div className="faq-hub__bg-pattern" aria-hidden="true" />

            <div className="container">
                {/* Hero strip */}
                <div className="faq-hub__hero">
                    <div className="faq-hub__hero-text">
                        <span className="faq-hub__eyebrow">Help Center</span>
                        <h1>How can we help?</h1>
                        <p>
                            Find answers about TraqAll modules, setup, and field
                            operations — or reach out to our team directly.
                        </p>
                    </div>
                    <div className="faq-hub__search-wrap">
                        <span className="icon-search-interface-symbol faq-hub__search-icon" />
                        <input
                            type="search"
                            placeholder="Search questions…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            aria-label="Search FAQ"
                        />
                        {search && (
                            <button
                                type="button"
                                className="faq-hub__search-clear"
                                onClick={() => setSearch("")}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>
                </div>

                <div className="faq-hub__layout">
                    {/* Sidebar */}
                    <aside className="faq-hub__sidebar">
                        <p className="faq-hub__sidebar-label">Browse topics</p>
                        <nav aria-label="FAQ categories">
                            <ul className="faq-hub__nav">
                                {FAQ_CATEGORIES.map((cat) => (
                                    <li key={cat.id}>
                                        <button
                                            type="button"
                                            className={
                                                activeCategory === cat.id
                                                    ? "faq-hub__nav-btn active"
                                                    : "faq-hub__nav-btn"
                                            }
                                            onClick={() => {
                                                setActiveCategory(cat.id)
                                                setExpandedId(null)
                                                setSearch("")
                                            }}
                                        >
                                            <span className={`faq-hub__nav-icon ${cat.icon}`} />
                                            <span className="faq-hub__nav-text">
                                                <strong>{cat.label}</strong>
                                                <small>{cat.description}</small>
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    {/* Main content */}
                    <div className="faq-hub__main">
                        <div className="faq-hub__main-header">
                            <div className="faq-hub__breadcrumb">
                                <Link href="/">Home</Link>
                                <span>/</span>
                                <span>FAQ</span>
                                <span>/</span>
                                <span>{category?.label}</span>
                            </div>
                            <h2>{category?.label}</h2>
                            <p className="faq-hub__main-desc">{category?.description}</p>
                            <div className="faq-hub__count">
                                {totalQuestions}{" "}
                                {totalQuestions === 1 ? "article" : "articles"}
                                {search && ` matching "${search}"`}
                            </div>
                        </div>

                        {filteredSections.length === 0 ? (
                            <div className="faq-hub__empty">
                                <span className="icon-support faq-hub__empty-icon" />
                                <h3>No results found</h3>
                                <p>
                                    Try a different search term or browse another
                                    topic from the sidebar.
                                </p>
                                <button
                                    type="button"
                                    className="thm-btn"
                                    onClick={() => setSearch("")}
                                >
                                    Clear search
                                </button>
                            </div>
                        ) : (
                            filteredSections.map((section) => (
                                <div key={section.title} className="faq-hub__section">
                                    <h3 className="faq-hub__section-title">
                                        {section.title}
                                    </h3>
                                    <div className="faq-hub__grid">
                                        {section.items.map((item) => {
                                            const id = `${activeCategory}-${item.question}`
                                            const isOpen = expandedId === id
                                            return (
                                                <div
                                                    key={id}
                                                    className={
                                                        isOpen
                                                            ? "faq-hub__card open"
                                                            : "faq-hub__card"
                                                    }
                                                >
                                                    <button
                                                        type="button"
                                                        className="faq-hub__card-trigger"
                                                        onClick={() => toggleQuestion(id)}
                                                        aria-expanded={isOpen}
                                                    >
                                                        <span className="faq-hub__card-q">
                                                            {item.question}
                                                        </span>
                                                        <span className="faq-hub__card-chevron">
                                                            {isOpen ? "−" : "+"}
                                                        </span>
                                                    </button>
                                                    {isOpen && (
                                                        <div className="faq-hub__card-answer">
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))
                        )}

                        {/* Support CTA */}
                        <div className="faq-hub__cta">
                            <div className="faq-hub__cta-accent" aria-hidden="true" />
                            <div className="faq-hub__cta-inner">
                                <div className="faq-hub__cta-text">
                                    <h3>Still need help?</h3>
                                    <p>
                                        Our team is ready to walk you through TraqAll
                                        setup, demos, and anything not covered here.
                                    </p>
                                </div>
                                <div className="faq-hub__cta-actions">
                                    <Link className="thm-btn" href="contact">
                                        Get Support
                                        <i className="icon-next" />
                                        <span className="hover-btn hover-bx" />
                                        <span className="hover-btn hover-bx2" />
                                        <span className="hover-btn hover-bx3" />
                                        <span className="hover-btn hover-bx4" />
                                    </Link>
                                    <Link className="faq-hub__cta-link" href="mailto:support@traqall.com">
                                        support@traqall.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
