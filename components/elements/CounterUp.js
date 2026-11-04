'use client'
import Counter from './Counter'

export default function CounterUp({ end }) {
    return <span className="count-text"><Counter end={end} duration={20} /></span>
}
