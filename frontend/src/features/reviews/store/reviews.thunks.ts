import { createAsyncThunk } from '@reduxjs/toolkit'
import { reviewsApi } from '../api/reviews.api'
import type { CreateReviewDto } from '../types/review.types'

export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async () => (await reviewsApi.getAll()).data,
)

export const createReview = createAsyncThunk(
  'reviews/create',
  async (payload: CreateReviewDto) => (await reviewsApi.create(payload)).data,
)
