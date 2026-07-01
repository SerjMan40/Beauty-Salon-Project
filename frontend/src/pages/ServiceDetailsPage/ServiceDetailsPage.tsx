import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { EmptyState } from '../../components/sections/EmptyState/EmptyState'
import { Loader } from '../../components/ui'
import {
  fetchServices,
  selectServiceById,
  selectServicesError,
  selectServicesHasLoaded,
  selectServicesLoading,
  ServiceDetails,
} from '../../features/services'
import { useAppDispatch, useAppSelector } from '../../hooks'

import './ServiceDetailsPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

export function ServiceDetailsPage() {
  const dispatch = useAppDispatch()
  const { serviceId = '' } = useParams<{ serviceId: string }>()

  const service = useAppSelector(selectServiceById(serviceId))
  const isLoading = useAppSelector(selectServicesLoading)
  const hasLoaded = useAppSelector(selectServicesHasLoaded)
  const error = useAppSelector(selectServicesError)

  useEffect(() => {
    if (!hasLoaded && !isLoading) {
      void dispatch(fetchServices())
    }
  }, [dispatch, hasLoaded, isLoading])

  if (!hasLoaded || isLoading) {
    return (
      <section className="service-details-page">
        <PageContainer>
          <div className="service-details-page__state">
            <Loader />
          </div>
        </PageContainer>
      </section>
    )
  }

  if (error) {
    return (
      <section className="service-details-page">
        <PageContainer>
          <div className="service-details-page__state">
            <EmptyState title="Не удалось загрузить услугу" description={error} />

            <Link className="service-details-page__link" to={ROUTES.services}>
              Вернуться к услугам
            </Link>
          </div>
        </PageContainer>
      </section>
    )
  }

  if (!service) {
    return (
      <section className="service-details-page">
        <PageContainer>
          <div className="service-details-page__state">
            <EmptyState
              title="Услуга не найдена"
              description="Возможно, она была удалена или ссылка устарела."
            />

            <Link className="service-details-page__link" to={ROUTES.services}>
              Вернуться к услугам
            </Link>
          </div>
        </PageContainer>
      </section>
    )
  }

  return (
    <section className="service-details-page">
      <PageContainer>
        <ServiceDetails service={service} />
      </PageContainer>
    </section>
  )
}
