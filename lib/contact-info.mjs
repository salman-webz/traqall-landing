/** Edit contact details here; displayed values and links share this source. */
export const CONTACT_INFO = {
    email: 'team@traqall.com',
    phones: ['+1 (646) 342 7488'],
    address: 'Brooklyn, New York',
    addressNote: 'Field Operations Support',
    hours: '6:00 am - 08:20 pm - Mon - Sun',
    website: 'traqall.com',
    defaultCountry: 'US',
    departments: {
        product: 'product@traqall.com',
        fieldops: 'fieldops@traqall.com',
        success: 'success@traqall.com',
        engineering: 'engineering@traqall.com',
    },
}

export const emailHref = (email = CONTACT_INFO.email) => `mailto:${email}`
export const phoneHref = (phone = CONTACT_INFO.phones[0]) => `tel:${phone.replace(/[^+\d]/g, '')}`
