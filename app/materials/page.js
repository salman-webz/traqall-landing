import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

const service = getServiceBySlug("materials")

export const metadata = {
    title: `${service.title} | TraqAll`,
    description: service.shortDescription,
}

export default function MaterialsPage() {
    return <ServiceDetail service={getServiceBySlug("materials")} />
}
