import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

const service = getServiceBySlug("issues")

export const metadata = {
    title: `${service.title} | TraqAll`,
    description: service.shortDescription,
}

export default function IssuesPage() {
    return <ServiceDetail service={getServiceBySlug("issues")} />
}
