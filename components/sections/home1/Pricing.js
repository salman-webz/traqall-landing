import Link from 'next/link'
import { PRICING_PLANS } from '@/lib/pricing-plans'

const dollars = (value) => `$${value.toLocaleString('en-US')}`

export default function Pricing() {
    return (
        <section className="traqall-pricing" aria-labelledby="pricing-title">
            <div className="container">
                <div className="sec-title center text-center">
                    <p className="product-hero__eyebrow">PRICING PLANS</p>
                    <h2 id="pricing-title" className="sec-title__title">Plans That Scale With Your Crew</h2>
                    <p className="traqall-pricing__intro">Choose your plan, with or without the assistant. All prices are monthly.</p>
                </div>
                <div className="traqall-pricing__grid">
                    {PRICING_PLANS.map((plan) => (
                        <article className="traqall-pricing__card" key={plan.name}>
                            <h3>{plan.name}</h3>
                            <p className="traqall-pricing__price"><strong>{dollars(plan.monthly)}</strong><span>/ month</span></p>
                            <p className="traqall-pricing__alternative">{`${dollars(plan.withAssistant)}/month with assistant`}</p>
                            <ul>{plan.features.map((feature) => <li key={feature}><span className="icon-check" aria-hidden="true" />{feature}</li>)}</ul>
                            <Link className="thm-btn" href="https://app.traqall.com/en/auth/register" target="_blank" rel="noopener noreferrer">Choose {plan.name}<i className="icon-next" aria-hidden="true" /></Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
