import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'

import { EmptyState } from '../../components/sections/EmptyState/EmptyState'
import { Loader } from '../../components/ui'
import {
  fetchMasters,
  MasterProfile,
  selectMasterById,
  selectMastersError,
  selectMastersHasLoaded,
  selectMastersLoading,
} from '../../features/masters'
import { useAppDispatch, useAppSelector } from '../../hooks'

import './MasterDetailsPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

export function MasterDetailsPage() {
  const dispatch = useAppDispatch()

  const { masterId = '' } = useParams<{ masterId: string }>()

  const master = useAppSelector(selectMasterById(masterId))
  const hasLoaded = useAppSelector(selectMastersHasLoaded)
  const isLoading = useAppSelector(selectMastersLoading)
  const error = useAppSelector(selectMastersError)

  useEffect(() => {
    if (!hasLoaded && !isLoading) {
      void dispatch(fetchMasters())
    }
  }, [dispatch, hasLoaded, isLoading])

  if (!hasLoaded || isLoading) {
    return (
      <section className="master-details-page">
        <PageContainer>
          <div className="master-details-page__state">
            <Loader />
          </div>
        </PageContainer>
      </section>
    )
  }

  if (error) {
    return (
      <section className="master-details-page">
        <PageContainer>
          <div className="master-details-page__state">
            <EmptyState
              title="Не удалось загрузить мастера"
              description={error}
            />

            <Link
              className="master-details-page__link"
              to={ROUTES.masters}
            >
              Вернуться к мастерам
            </Link>
          </div>
        </PageContainer>
      </section>
    )
  }

  if (!master) {
    return (
      <section className="master-details-page">
        <PageContainer>
          <div className="master-details-page__state">
            <EmptyState
              title="Мастер не найден"
              description="Возможно, ссылка устарела или мастер больше недоступен."
            />

            <Link
              className="master-details-page__link"
              to={ROUTES.masters}
            >
              Вернуться к мастерам
            </Link>
          </div>
        </PageContainer>
      </section>
    )
  }

  return (
    <section className="master-details-page">
      <PageContainer>
        <MasterProfile master={master} />
      </PageContainer>
    </section>
  )
}
