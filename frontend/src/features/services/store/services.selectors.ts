import type { RootState } from '../../../app/store'

export const selectServicesState = (state: RootState) => state.services
export const selectServices = (state: RootState) => selectServicesState(state).items
export const selectServicesLoading = (state: RootState) => selectServicesState(state).isLoading
export const selectServicesHasLoaded = (state: RootState) => selectServicesState(state).hasLoaded
export const selectServicesError = (state: RootState) => selectServicesState(state).error
export const selectActiveServiceCategory = (state: RootState) =>
  selectServicesState(state).activeCategory
export const selectServiceCategories = (state: RootState) => {
  const categories = selectServices(state)
    .map((service) => service.category)
    .filter((category): category is string => Boolean(category))

  return Array.from(new Set(categories))
}
export const selectFilteredServices = (state: RootState) => {
  const activeCategory = selectActiveServiceCategory(state)
  const services = selectServices(state)

  if (!activeCategory) return services

  return services.filter((service) => service.category === activeCategory)
}
export const selectSelectedService = (state: RootState) => {
  const { items, selectedId } = selectServicesState(state)
  return items.find(({ id }) => id === selectedId)
}
export const selectServiceById = (id: string) => (state: RootState) =>
  selectServices(state).find((service) => service.id === id)
