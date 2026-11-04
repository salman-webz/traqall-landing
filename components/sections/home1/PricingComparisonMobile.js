import { PRICING_PLANS, PRICING_MODULES } from '@/lib/pricing-plans'
import styles from './PricingComparisonMobile.module.css'

const differences = [
    { label: 'People', field: 'people' },
    { label: 'Projects', field: 'projects' },
    { label: 'Feature requests', field: 'featureRequests' },
    { label: 'Onboarding', field: 'onboarding' },
]

export default function PricingComparisonMobile() {
    return (
        <section className={styles.comparison} aria-labelledby="mobile-comparison-title">
            <header className={styles.heading}>
                <p className={styles.eyebrow}>FIND YOUR FIT</p>
                <h2 id="mobile-comparison-title">Compare all features</h2>
                <p>The same core tools. The right capacity and support for your crew.</p>
            </header>

            <div className={styles.differences}>
                {differences.map(({ label, field }) => (
                    <div className={styles.difference} key={field}>
                        <h3>{label}</h3>
                        <dl className={styles.values}>
                            {PRICING_PLANS.map((plan) => (
                                <div key={plan.name}>
                                    <dt>{plan.name}</dt>
                                    <dd className={typeof plan[field] === 'number' ? styles.number : undefined}>{plan[field]}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                ))}
            </div>

            <section className={styles.included} aria-labelledby="mobile-included-title">
                <header className={styles.includedHeading}>
                    <span className={styles.check} aria-hidden="true">✓</span>
                    <div>
                        <p className={styles.eyebrow}>BASIC · PRO · BUSINESS</p>
                        <h3 id="mobile-included-title">Included in every plan</h3>
                        <p>All {PRICING_MODULES.length} core modules, including AI Assistant.</p>
                    </div>
                </header>
                <ul className={styles.features}>
                    {PRICING_MODULES.map((module) => (
                        <li key={module.name}>
                            <span className={styles.featureCheck} aria-hidden="true">✓</span>
                            <div><h4>{module.name}</h4><p>{module.description}</p></div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}
