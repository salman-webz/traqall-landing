# Form API integration

This repository uses Next.js 15 App Router, React 18 and JavaScript with a root `@/` alias. Native fetch avoids another dependency. Pure API modules use `.mjs`, matching existing testable JavaScript modules. No existing backend contract or API routes were found. `lib/email-templates.js` contains unused email rendering helpers, not an endpoint contract.

## Configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_BASE_URL` to the backend URL, including any path prefix. Restart development after changing it; production must rebuild because Next.js inlines public variables. This URL is public: never put keys, tokens or credentials in it. No default backend URL is provided. An unset URL reports a configuration error and does not claim success. The backend must allow the frontend origin, POST and Content-Type via CORS. Requests omit credentials.

## Provisional contracts

All paths live in `api/endpoints.mjs` and require backend confirmation.

| Form / routes | Endpoint | JSON payload |
| --- | --- | --- |
| Contact Us, `/contact` | POST /contact | `{ "name": "…", "email": "…", "phone": "…", "message": "…" }` |
| Shared Request a Demo (`Appoinment`), `/` and `/index-dark` | POST /contact | `{ "name": "…", "email": "…", "phone": "…", "message": "…" }` |
| Request A Free Estimate (`home3/Banner`), `/index-3` | POST /quotations | `{ "name": "…", "email": "…", "inspectionDate": "…", "location": "…" }` |

Mapping: username → name; form_email → email; phone → phone; message textarea → message; date → inspectionDate; location select → location. All strings are trimmed. Name/email are required in both; phone is required for demo and accepts common punctuation with 7–15 digits. Message, inspection date and location stay optional, matching the original forms. Optional empty values are empty strings. Inspection date remains free text; backend must confirm an accepted format before enforcing a date format. Location is the selected existing option, or empty for the placeholder. No extra type, source, plan or other invented fields are sent.

A demo request is provisionally a contact submission. Confirm that classification with the backend team. Confirm endpoint paths, required fields, length limits, date/phone normalization, optional-value conventions, success schema, validation schema and CORS origins before release.

Expected success: any 2xx with JSON (e.g. `{ "id": "123" }`) or empty body/204. JSON `success: false` is a failure even on 2xx. Non-JSON nonempty success bodies are rejected. Expected errors: non-2xx, optionally `{ "message": "Please check your fields", "errors": { "email": ["Invalid email"] } }`. HTML errors are never rendered. Backend remains responsible for validation, rate limiting, spam protection and durable receipt before reporting success.

## Behavior

15-second timeout covers response body reading. AbortSignal cancellation is supported; unmount cancels requests. No retries or authentication flow. A synchronous ref prevents rapid duplicate submits; the pending fieldset and submit button are disabled. This also prevents edits being lost while an in-flight submission finishes. Values survive failures and reset only after confirmed success. Accessible live feedback announces pending/success/errors, including backend field errors. Timeout/network messages warn that delivery is unconfirmed; client cancellation cannot undo a backend receipt.

## Form inventory

`/contact` includes a Contact Us form using the contact service. Name, email, phone and message are required on this form; the support email link remains available. Header/footer/demo links navigate to that page. There are no quote/contact modals; SearchPopup is search, Sidebar is navigation, and the video modal has no form. Blog comment and product review forms (despite their `contact-form-validated` CSS class), newsletter, account, checkout, coupon, language and search forms are unrelated and unchanged.

## Checks

Run `npm test`, `npm run build`, and `npm run lint`. Browser verification should exercise both service forms using a controlled mock endpoint, delayed responses, 422/500/network errors and 201/204 success; mocks are testing only and are not included in application runtime.
