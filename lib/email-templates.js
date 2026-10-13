const RECIPIENT_EMAIL = "salman.webz@gmail.com"

const labels = {
    name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    subject: "Subject",
    role: "Role",
    crewSize: "Crew Size",
    interest: "Primary Interest",
    timeline: "Timeline",
    message: "Message",
}

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}

function textRow(label, value) {
    if (!value) return ""

    return `
        <tr>
            <td style="padding:14px 0;border-bottom:1px solid #e8edf3;color:#7a8798;font-size:13px;width:34%;">${escapeHtml(label)}</td>
            <td style="padding:14px 0;border-bottom:1px solid #e8edf3;color:#16181d;font-size:15px;font-weight:700;">${escapeHtml(value)}</td>
        </tr>
    `
}

function plainTextRows(fields) {
    return fields
        .filter(([key, value]) => value)
        .map(([key, value]) => `${labels[key] || key}: ${value}`)
        .join("\n")
}

function layout({ badge, title, intro, fields, accent = "#e32626" }) {
    const rows = fields.map(([key, value]) => textRow(labels[key] || key, value)).join("")

    return `
        <!doctype html>
        <html>
        <body style="margin:0;background:#f4f6f8;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 24px 80px rgba(18,24,38,.12);">
                <tr>
                    <td style="background:#16181d;padding:30px 34px;color:#ffffff;">
                        <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#f6b4b4;font-weight:800;">${escapeHtml(badge)}</div>
                        <h1 style="margin:10px 0 0;font-size:30px;line-height:1.18;color:#ffffff;">${escapeHtml(title)}</h1>
                        <p style="margin:14px 0 0;color:#d7dee8;font-size:15px;line-height:1.7;">${escapeHtml(intro)}</p>
                    </td>
                </tr>
                <tr>
                    <td style="padding:28px 34px 10px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            ${rows}
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:26px 34px 34px;">
                        <div style="background:#fff4f4;border-left:5px solid ${accent};padding:18px 20px;border-radius:12px;color:#4d5b6c;font-size:14px;line-height:1.7;">
                            This inquiry was submitted from the TraqAll website. Reply directly to the sender email above to continue the conversation.
                        </div>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `
}

export function buildLeadEmail(payload) {
    const type = payload.type === "demo" ? "demo" : "contact"

    if (type === "demo") {
        const fields = [
            ["name", payload.name],
            ["email", payload.email],
            ["phone", payload.phone],
            ["company", payload.company],
            ["role", payload.role],
            ["crewSize", payload.crewSize],
            ["interest", payload.interest],
            ["timeline", payload.timeline],
            ["message", payload.message],
        ]

        return {
            to: RECIPIENT_EMAIL,
            subject: `TraqAll demo request from ${payload.name || "website visitor"}`,
            text: `New TraqAll Demo Request\n\n${plainTextRows(fields)}`,
            html: layout({
                badge: "Request a Demo",
                title: "New TraqAll Demo Request",
                intro: "A construction operations team wants to see how TraqAll can help manage labor, equipment, materials, small tools, and site issues from one command center.",
                fields,
            }),
        }
    }

    const fields = [
        ["name", payload.name],
        ["email", payload.email],
        ["phone", payload.phone],
        ["company", payload.company],
        ["subject", payload.subject],
        ["message", payload.message],
    ]

    return {
        to: RECIPIENT_EMAIL,
        subject: `TraqAll contact message from ${payload.name || "website visitor"}`,
        text: `New TraqAll Contact Message\n\n${plainTextRows(fields)}`,
        html: layout({
            badge: "Contact Us",
            title: "New TraqAll Contact Message",
            intro: "A website visitor reached out about TraqAll field operations, support, partnerships, or platform questions.",
            fields,
        }),
    }
}
