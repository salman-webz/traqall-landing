'use client'

import { submitContact } from '@/api/services/contactService.mjs'
import { contactPayload } from '@/api/formPayloads.mjs'
import useFormSubmission from '@/hooks/useFormSubmission'
import SubmissionFeedback from './SubmissionFeedback'

export default function ContactForm() {
    const submission = useFormSubmission(submitContact, contactPayload)
    return (
        <div className="traqall-contact-form">
            <h2>Send us a message</h2>
            <p>Ask a question or tell us about your demo request.</p>
            <form onSubmit={submission.onSubmit} aria-busy={submission.isSubmitting} aria-describedby={submission.feedbackId}>
                <fieldset disabled={submission.isSubmitting}>
                    <label htmlFor="contact-name">Your name *</label>
                    <input id="contact-name" name="username" type="text" autoComplete="name" required />
                    <label htmlFor="contact-email">Email address *</label>
                    <input id="contact-email" name="form_email" type="email" autoComplete="email" required />
                    <label htmlFor="contact-phone">Phone number *</label>
                    <input id="contact-phone" name="phone" type="tel" autoComplete="tel" required />
                    <label htmlFor="contact-message">Message *</label>
                    <textarea id="contact-message" name="message" rows={5} required />
                    <button className="thm-btn" type="submit" disabled={submission.isSubmitting}>
                        {submission.isSubmitting ? 'Sending…' : 'Send message'}
                    </button>
                </fieldset>
                <SubmissionFeedback submission={submission} />
            </form>
        </div>
    )
}
