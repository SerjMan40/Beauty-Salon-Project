import { useEffect } from 'react'

import { EmptyState } from '../../components/sections/EmptyState/EmptyState'

import { Loader, SectionHeader } from '../../components/ui'
import {
  fetchServices,
  selectActiveServiceCategory,
  selectFilteredServices,
  selectServiceCategories,
  selectServicesError,
  selectServicesLoading,
  ServiceCategoryTabs,
  ServicesList,
  setActiveServiceCategory,
} from '../../features/services'
import { useAppDispatch, useAppSelector } from '../../hooks'

import './ServicesPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

export function ServicesPage() {
  const dispatch = useAppDispatch()

  const services = useAppSelector(selectFilteredServices)
  const categories = useAppSelector(selectServiceCategories)
  const activeCategory = useAppSelector(selectActiveServiceCategory)
  const isLoading = useAppSelector(selectServicesLoading)
  const error = useAppSelector(selectServicesError)

  useEffect(() => {
    void dispatch(fetchServices())
  }, [dispatch])

  return (
    <section className="services-page" aria-labelledby="services-page-title">
      <PageContainer>
        <div className="services-page__header">
          <SectionHeader
            eyebrow="Каталог"
            title="Услуги"
            titleId="services-page-title"
            description="Выберите подходящую категорию и найдите услугу для вашего ухода."
          />
        </div>

        <div className="services-page__filters">
          <ServiceCategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={(category) =>
              dispatch(setActiveServiceCategory(category))
            }
          />
        </div>

        <div className="services-page__content">
          {isLoading && <Loader />}

          {!isLoading && error && (
            <EmptyState
              title="Не удалось загрузить услуги"
              description={error}
            />
          )}

          {!isLoading && !error && <ServicesList services={services} />}
        </div>
      </PageContainer>
    </section>
  )
}
