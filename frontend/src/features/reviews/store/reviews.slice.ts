import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Review } from '../../../types/review.types'
import { createReview, fetchReviews } from './reviews.thunks'

export interface ReviewsState {
  items: Review[]
  selectedId: string | null
  isLoading: boolean
  error: string | null
}

const initialState: ReviewsState = {
  items: [],
  selectedId: null,
  isLoading: false,
  error: null,
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<Review[]>) {
      state.items = action.payload
    },
    addReview(state, action: PayloadAction<Review>) {
      state.items.unshift(action.payload)
    },
    selectReview(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload
    },
    setReviewsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setReviewsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Не удалось загрузить отзывы.'
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.items.unshift(action.payload)
      })
  },
})

export const { setReviews, addReview, selectReview, setReviewsLoading, setReviewsError } =
  reviewsSlice.actions

export const reviewsReducer = reviewsSlice.reducer
