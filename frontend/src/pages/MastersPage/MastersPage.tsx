import { useEffect } from 'react'


import { EmptyState } from '../../components/sections/EmptyState/EmptyState'
import { Loader, SectionHeader } from '../../components/ui'
import {
  fetchMasters,

  selectMasters,
  selectMastersError,
  selectMastersHasLoaded,
  selectMastersLoading,
} from '../../features/masters'
import { useAppDispatch, useAppSelector } from '../../hooks'

import './MastersPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'
import { MastersList } from '../../features/masters/components/MasterList/MasterList'

export function MastersPage() {
  const dispatch = useAppDispatch()

  const masters = useAppSelector(selectMasters)
  const hasLoaded = useAppSelector(selectMastersHasLoaded)
  const isLoading = useAppSelector(selectMastersLoading)
  const error = useAppSelector(selectMastersError)

  useEffect(() => {
    if (!hasLoaded && !isLoading) {
      void dispatch(fetchMasters())
    }
  }, [dispatch, hasLoaded, isLoading])

  return (
    <section className="masters-page" aria-labelledby="masters-page-title">
      <PageContainer>
        <div className="masters-page__header">
          <SectionHeader
            eyebrow="Команда"
            title="Наши мастера"
            titleId="masters-page-title"
            description="Познакомьтесь с нашими специалистами и выберите мастера, который подходит именно вам."
          />
        </div>

        <div className="masters-page__content">
          {isLoading && <Loader />}

          {!isLoading && error && (
            <EmptyState
              title="Не удалось загрузить мастеров"
              description={error}
            />
          )}

          {!isLoading && !error && (
            <MastersList masters={masters} />
          )}
        </div>
      </PageContainer>
    </section>
  )
}
