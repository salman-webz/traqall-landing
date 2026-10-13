import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

export default function EquipmentPage() {
    return <ServiceDetail service={getServiceBySlug("equipment")} />
}
