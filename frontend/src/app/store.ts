import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../features/auth/model/authSlice'
import { appointmentsReducer } from '../features/appointments/model/appointmentsSlice'
import { articlesReducer } from '../features/articles/model/articlesSlice'
import { galleryReducer } from '../features/gallery/model/gallerySlice'
import { mastersReducer } from '../features/masters/model/mastersSlice'
import { profileReducer } from '../features/profile/model/profileSlice'
import { reviewsReducer } from '../features/reviews/model/reviewsSlice'
import { servicesReducer } from '../features/services/model/servicesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentsReducer,
    articles: articlesReducer,
    gallery: galleryReducer,
    masters: mastersReducer,
    profile: profileReducer,
    reviews: reviewsReducer,
    services: servicesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
