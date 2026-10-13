import ServiceDetail from "@/components/sections/ServiceDetail"
import { getServiceBySlug } from "@/lib/services"

export default function TimecardsPage() {
    return <ServiceDetail service={getServiceBySlug("timecards")} />
}
