import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

export default function MaterialsPage() {
    return <ServiceDetail service={getServiceBySlug("materials")} />
}
