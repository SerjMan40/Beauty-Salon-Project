import { ServiceDetails, type Service } from '../../../features/services'
import './ServiceDetailsSection.scss'

export function ServiceDetailsSection({ service }: { service: Service }) {
  return <ServiceDetails service={service} />
}
