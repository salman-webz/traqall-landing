import Link from 'next/link'

const ACCENTS = {
    timecards: '#22a775', equipment: '#4585ed', materials: '#8b65d8',
    'small-tools': '#df9244', issues: '#e06b75',
}

/** Presentation only: original product screenshots remain unmodified. */
export default function PortalPreview({ service, compact = false }) {
    const desktop = service.portalScreenshot
    // Hero previews must never substitute the mobile app for the desktop portal.
    if (!desktop) return null
    const src = desktop
    return (
        <figure className={`portal-preview${compact ? ' portal-preview--compact' : ''}${desktop ? '' : ' portal-preview--mobile'}`}
            style={{ '--portal-accent': ACCENTS[service.slug] || '#4585ed' }}>
            <div className="portal-preview__heading">
                <span><i aria-hidden="true" />TRAQALL / {service.title.toUpperCase()}</span>
                <span>{desktop ? 'Portal workspace' : 'Mobile workspace'}</span>
            </div>
            <Link className="portal-preview__window" href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${service.title} screenshot at full size in a new tab`}>
                {desktop && <div className="portal-preview__chrome" aria-hidden="true"><span /><span /><span /><b>TraqAll · {service.title}</b></div>}
                <img src={src} alt={`Actual TraqAll ${service.title} ${desktop ? 'portal' : 'mobile'} screen`} />
            </Link>
            {!compact && <figcaption>One workspace. Every detail in view.<span>{service.title} in TraqAll</span></figcaption>}
        </figure>
    )
}
