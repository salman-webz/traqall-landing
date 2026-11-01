import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

const service = getServiceBySlug("equipment")

export const metadata = {
    title: `${service.title} | TraqAll`,
    description: service.shortDescription,
}

export default function EquipmentPage() {
    return <ServiceDetail service={getServiceBySlug("equipment")} />
}
