import type { RootState } from '../../../app/store'

export const selectReviewsState = (state: RootState) => state.reviews
export const selectReviews = (state: RootState) => selectReviewsState(state).items
export const selectReviewsLoading = (state: RootState) => selectReviewsState(state).isLoading
export const selectReviewsError = (state: RootState) => selectReviewsState(state).error
export const selectSelectedReview = (state: RootState) => {
  const { items, selectedId } = selectReviewsState(state)
  return items.find(({ id }) => id === selectedId)
}
export const selectReviewById = (id: string) => (state: RootState) =>
  selectReviews(state).find((review) => review.id === id)
export const selectReviewsByMasterId = (masterId: string) => (state: RootState) =>
  selectReviews(state).filter((review) => review.masterId === masterId)
