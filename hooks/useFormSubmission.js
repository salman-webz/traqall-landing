'use client'
import { useEffect, useId, useRef, useState } from 'react'
import { validatePayload } from '@/api/formPayloads.mjs'

export default function useFormSubmission(service, buildPayload) {
    const [state, setState] = useState({ status: 'idle', message: '', fields: {} })
    const pending = useRef(null)
    const feedbackId = useId()
    useEffect(() => () => { pending.current?.abort(); pending.current = null }, [])

    async function onSubmit(event) {
        event.preventDefault()
        if (pending.current) return
        const form = event.currentTarget
        if (!form.reportValidity()) return
        const payload = buildPayload(new FormData(form))
        const fields = validatePayload(payload)
        if (Object.keys(fields).length) {
            setState({ status: 'error', message: 'Please correct the following fields.', fields })
            return
        }
        const controller = new AbortController()
        pending.current = controller
        setState({ status: 'pending', message: 'Sending your request…', fields: {} })
        try {
            await service(payload, { signal: controller.signal })
            if (pending.current !== controller) return
            form.reset()
            setState({ status: 'success', message: 'Thank you. Your request was received.', fields: {} })
        } catch (error) {
            if (pending.current !== controller) return
            setState({ status: 'error', message: error.message || 'Unable to submit your request.', fields: error.fields || {} })
        } finally {
            if (pending.current === controller) pending.current = null
        }
    }
    return { ...state, feedbackId, onSubmit, isSubmitting: state.status === 'pending' }
}
