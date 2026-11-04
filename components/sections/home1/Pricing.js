import Link from 'next/link'
import PricingComparisonMobile from './PricingComparisonMobile'
import { PRICING_PLANS, PRICING_MODULES } from '@/lib/pricing-plans'

const dollars = (value) => `$${value.toLocaleString('en-US')}`

export default function Pricing({ showComparison = false }) {
    return (
        <section className="traqall-pricing" aria-labelledby="pricing-title">
            <div className="container">
                <div className="sec-title center text-center">
                    <p className="product-hero__eyebrow">PRICING PLANS</p>
                    <h2 id="pricing-title" className="sec-title__title">Plans That Scale With Your Crew</h2>
                    <p className="traqall-pricing__intro">All plans include every core module and AI Assistant. All prices are monthly.</p>
                </div>
                <div className="traqall-pricing__grid">
                    {PRICING_PLANS.map((plan) => (
                        <article className="traqall-pricing__card" key={plan.name}>
                            <h3>{plan.name}</h3>
                            <p className="traqall-pricing__description">{plan.description}</p>
                            <p className="traqall-pricing__price"><strong>{dollars(plan.monthly)}</strong><span>/ month</span></p>
                            <ul>{plan.features.map((feature) => <li key={feature}><span className="icon-check" aria-hidden="true" />{feature}</li>)}</ul>
                            <Link className="thm-btn" href="https://app.traqall.com/en/auth/register" target="_blank" rel="noopener noreferrer">Select {plan.name}<i className="icon-next" aria-hidden="true" /></Link>
                        </article>
                    ))}
                </div>
                {showComparison ? (
                    <>
                    <PricingComparisonMobile />
                    <div className="traqall-pricing__comparison" role="region" aria-label="Compare all features" tabIndex={0}>
                        <table>
                            <caption>Compare all features</caption>
                            <thead>
                                <tr><th scope="col">Feature</th>{PRICING_PLANS.map((plan) => <th scope="col" key={plan.name}>{plan.name}</th>)}</tr>
                            </thead>
                            <tbody>
                                <tr><th scope="row">People</th>{PRICING_PLANS.map((plan) => <td key={plan.name}>{plan.people}</td>)}</tr>
                                <tr><th scope="row">Projects</th>{PRICING_PLANS.map((plan) => <td key={plan.name}>{plan.projects}</td>)}</tr>
                                {PRICING_MODULES.map((module) => (
                                    <tr key={module.name}>
                                        <th scope="row">{module.name}<span className="traqall-pricing__feature-description">{module.description}</span></th>
                                        {PRICING_PLANS.map((plan) => <td key={plan.name}><span role="img" aria-label="Included">✓</span></td>)}
                                    </tr>
                                ))}
                                <tr><th scope="row">Feature requests</th>{PRICING_PLANS.map((plan) => <td key={plan.name}>{plan.featureRequests}</td>)}</tr>
                                <tr><th scope="row">Onboarding</th>{PRICING_PLANS.map((plan) => <td key={plan.name}>{plan.onboarding}</td>)}</tr>
                            </tbody>
                        </table>
                    </div>
                    </>
                ) : (
                    <div className="traqall-pricing__all-plans">
                        <Link className="thm-btn" href="/pricing">See all plans<i className="icon-next" aria-hidden="true" /></Link>
                    </div>
                )}
            </div>
        </section>
    )
}
