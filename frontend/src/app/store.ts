import { configureStore } from '@reduxjs/toolkit'
import { articlesReducer } from '../features/articles/store/articles.slice'
import { authReducer } from '../features/auth/store/auth.slice'
import { appointmentsReducer } from '../features/booking/store/booking.slice'
import { galleryReducer } from '../features/gallery/store/gallery.slice'
import { mastersReducer } from '../features/masters/store/masters.slice'
import { profileReducer } from '../features/profile/store/profile.slice'
import { reviewsReducer } from '../features/reviews/store/reviews.slice'
import { servicesReducer } from '../features/services/store/services.slice'

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
