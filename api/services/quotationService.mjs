import { request } from '../client.mjs'
import { ENDPOINTS } from '../endpoints.mjs'
export const submitQuotation = (data, options) => request(ENDPOINTS.quotations, { ...options, data })
