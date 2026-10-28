import { isPossiblePhoneNumber } from 'react-phone-number-input'

const value = (data, key) => String(data.get(key) || '').trim()
export const contactPayload = data => ({ name: value(data, 'username'), email: value(data, 'form_email'), phone: value(data, 'phone'), message: value(data, 'message') })
export const quotationPayload = data => ({ name: value(data, 'username'), email: value(data, 'form_email'), inspectionDate: value(data, 'date'), location: value(data, 'location') })

export function validatePayload(payload) {
    const errors = {}
    if (!payload.name?.trim()) errors.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = 'Enter a valid email address.'
    if ('phone' in payload && (!payload.phone || !isPossiblePhoneNumber(payload.phone))) errors.phone = payload.phone ? 'Invalid phone number length' : 'You have not entered a phone number'
    if ('message' in payload && !payload.message?.trim()) errors.message = 'Enter your message.'
    return errors
}
