import ServiceDetail from "@/components/sections/ServiceDetail"
import { SMALL_ISSUES } from "@/lib/small-issues"

export const metadata = {
    title: "Small issues | TraqAll",
    description: "Keep minor site defects, punch-list items, and everyday follow-ups organized with clear ownership and resolution tracking.",
}

export default function SmallIssuesPage() {
    return <ServiceDetail service={SMALL_ISSUES} />
}
