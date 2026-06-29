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
} from './model/servicesSlice'
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
} from './model/servicesSelectors'
export type { Service } from './types/service.types'
