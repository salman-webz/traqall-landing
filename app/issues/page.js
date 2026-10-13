import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

export default function IssuesPage() {
    return <ServiceDetail service={getServiceBySlug("issues")} />
}
