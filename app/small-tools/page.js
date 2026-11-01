import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

const service = getServiceBySlug("small-tools")

export const metadata = {
    title: `${service.title} | TraqAll`,
    description: service.shortDescription,
}

export default function SmallToolsPage() {
    return <ServiceDetail service={getServiceBySlug("small-tools")} />
}
