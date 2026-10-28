export class ApiError extends Error {
    constructor(message, { status = 0, code = 'HTTP_ERROR', fields = {} } = {}) {
        super(message)
        this.name = 'ApiError'
        this.status = status
        this.code = code
        this.fields = fields
    }
}

export async function request(endpoint, { data, signal, timeout = 15000, baseURL = process.env.NEXT_PUBLIC_API_BASE_URL } = {}) {
    if (!baseURL) throw new ApiError('Submissions are not configured yet. Please contact support@traqall.com.', { code: 'CONFIGURATION' })
    let url
    try {
        url = new URL(`${baseURL.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`, globalThis.location?.origin)
        if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) throw new Error()
    } catch {
        throw new ApiError('The submission service is not configured correctly.', { code: 'CONFIGURATION' })
    }
    const controller = new AbortController()
    let timedOut = false
    const abort = () => controller.abort()
    if (signal?.aborted) abort()
    else signal?.addEventListener('abort', abort, { once: true })
    const timer = setTimeout(() => { timedOut = true; controller.abort() }, timeout)
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            signal: controller.signal,
            credentials: 'omit',
        })
        const text = await response.text()
        let body = null
        if (text) {
            try { body = JSON.parse(text) } catch {
                if (response.ok) throw new ApiError('The server returned an invalid response. Please contact support before resubmitting.', { status: response.status, code: 'INVALID_RESPONSE' })
            }
        }
        if (!response.ok || body?.success === false) {
            const fields = body?.errors && typeof body.errors === 'object' && !Array.isArray(body.errors) ? body.errors : {}
            const messages = Array.isArray(body?.messages) ? body.messages.filter(message => typeof message === 'string').join(' ') : ''
            throw new ApiError(typeof body?.message === 'string' ? body.message : messages || 'Your submission could not be completed. Please try again later.', { status: response.status, fields })
        }
        return body
    } catch (error) {
        if (error instanceof ApiError) throw error
        if (controller.signal.aborted) throw new ApiError(timedOut ? 'The request timed out. Delivery could not be confirmed; please contact support before resubmitting.' : 'Submission cancelled.', { code: timedOut ? 'TIMEOUT' : 'CANCELLED' })
        throw new ApiError('Unable to reach the server. Delivery could not be confirmed. Check your connection or contact support.', { code: 'NETWORK' })
    } finally {
        clearTimeout(timer)
        signal?.removeEventListener('abort', abort)
    }
}
