'use client'
import { useEffect, useRef, useState } from 'react'

export default function Counter({ end, duration = 20 }) {
    // Keep meaningful content visible before hydration and for reduced motion.
    const [count, setCount] = useState(end)
    const countRef = useRef(null)

    useEffect(() => {
        setCount(end)
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        let timer
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()
            setCount(0)
            let step = 0
            const steps = Math.max(1, duration)
            timer = window.setInterval(() => {
                step += 1
                setCount(Math.round(end * Math.min(step / steps, 1)))
                if (step >= steps) window.clearInterval(timer)
            }, 1000 / steps)
        })
        if (countRef.current) observer.observe(countRef.current)
        return () => {
            observer.disconnect()
            window.clearInterval(timer)
        }
    }, [end, duration])

    return <span ref={countRef}>{count}</span>
}
