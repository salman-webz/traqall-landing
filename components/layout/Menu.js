'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from "next/link"
import SolutionsMegaMenu from "./SolutionsMegaMenu"

export default function Menu() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)
    const toggleRef = useRef(null)
    const menuId = useId()

    useEffect(() => {
        if (!open) return
        const dismiss = (event) => { if (!menuRef.current?.contains(event.target)) setOpen(false) }
        const escape = (event) => {
            if (event.key === 'Escape') {
                setOpen(false)
                toggleRef.current?.focus()
            }
        }
        document.addEventListener('pointerdown', dismiss)
        document.addEventListener('keydown', escape)
        return () => {
            document.removeEventListener('pointerdown', dismiss)
            document.removeEventListener('keydown', escape)
        }
    }, [open])
    return (
        <>
            <ul className="main-menu__list">

                <li ref={menuRef} className={`dropdown megamenu solutions-megamenu${open ? ' is-open' : ''}`}
                    onPointerEnter={(event) => { if (event.pointerType === 'mouse') setOpen(true) }}
                    onPointerLeave={(event) => { if (event.pointerType === 'mouse' && !menuRef.current?.contains(document.activeElement)) setOpen(false) }}
                    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}>
                    <Link href="/services">Solutions</Link>
                    <button ref={toggleRef} type="button" className="solutions-menu-toggle"
                        aria-label="Toggle Solutions menu" aria-expanded={open} aria-controls={menuId}
                        onClick={() => setOpen((value) => !value)}>
                        <span className="icon-plus-1" aria-hidden="true" />
                    </button>
                    <ul id={menuId} hidden={!open}>
                        <li>
                            <SolutionsMegaMenu />
                        </li>
                    </ul>
                </li>

                <li>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
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
