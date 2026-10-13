const value = (data, key) => String(data.get(key) || '').trim()
export const contactPayload = data => ({ name: value(data, 'username'), email: value(data, 'form_email'), phone: value(data, 'phone'), message: value(data, 'message') })
export const quotationPayload = data => ({ name: value(data, 'username'), email: value(data, 'form_email'), inspectionDate: value(data, 'date'), location: value(data, 'location') })

export function validatePayload(payload) {
    const errors = {}
    if (!payload.name?.trim()) errors.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = 'Enter a valid email address.'
    if ('phone' in payload && (!/^[+\d\s().-]+$/.test(payload.phone) || payload.phone.replace(/\D/g, '').length < 7 || payload.phone.replace(/\D/g, '').length > 15)) errors.phone = 'Enter a valid phone number with 7–15 digits.'
    return errors
}
