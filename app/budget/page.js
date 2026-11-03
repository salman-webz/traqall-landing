import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

const service = getServiceBySlug("budget")

export const metadata = {
    title: `${service.title} | TraqAll`,
    description: service.shortDescription,
}

export default function BudgetPage() {
    return <ServiceDetail service={getServiceBySlug("budget")} />
}
