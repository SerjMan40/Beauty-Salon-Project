export { ServiceCard } from './components/ServiceCard/ServiceCard'
export { ServiceCategoryTabs } from './components/ServiceCategoryTabs/ServiceCategoryTabs'
export { ServiceDetails } from './components/ServiceDetails/ServiceDetails'
export { ServicesList } from './components/ServicesList/ServicesList'
export {
  selectService,
  servicesReducer,
  setActiveServiceCategory,
  setServices,
  setServicesError,
  setServicesLoading,
} from './store/services.slice'
export {
  selectActiveServiceCategory,
  selectFilteredServices,
  selectSelectedService,
  selectServiceById,
  selectServiceCategories,
  selectServices,
  selectServicesError,
  selectServicesLoading,
  selectServicesState,
} from './store/services.selectors'
export type { Service } from './types/service.types'
export { fetchServices } from './store/services.thunks'
