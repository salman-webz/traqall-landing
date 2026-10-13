import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

export default function SmallToolsPage() {
    return <ServiceDetail service={getServiceBySlug("small-tools")} />
}
