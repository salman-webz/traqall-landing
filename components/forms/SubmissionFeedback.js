export default function SubmissionFeedback({ submission }) {
    return (
        <div id={submission.feedbackId} role={submission.status === 'error' ? 'alert' : 'status'} aria-live={submission.status === 'error' ? 'assertive' : 'polite'} aria-atomic="true" className="submission-feedback">
            {submission.message && <p>{submission.message}</p>}
            {Object.keys(submission.fields).length > 0 && <ul>
                {Object.entries(submission.fields).map(([field, messages]) => <li key={field}>{field}: {Array.isArray(messages) ? messages.filter(m => typeof m === 'string').join(' ') : typeof messages === 'string' ? messages : 'Please check this field.'}</li>)}
            </ul>}
        </div>
    )
}
