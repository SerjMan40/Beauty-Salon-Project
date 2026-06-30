export { ActiveAppointment } from './components/ActiveAppointment/ActiveAppointment'
export { PersonalOffer } from './components/PersonalOffer/PersonalOffer'
export { ProfileInfo } from './components/ProfileInfo/ProfileInfo'
export { VisitHistory } from './components/VisitHistory/VisitHistory'
export {
  profileReducer,
  setActiveAppointment,
  setPersonalOffers,
  setProfile,
  setProfileError,
  setProfileLoading,
  setVisitHistory,
} from './store/profile.slice'
export {
  selectActiveAppointment,
  selectPersonalOffers,
  selectProfile,
  selectProfileError,
  selectProfileLoading,
  selectProfileState,
  selectVisitHistory,
} from './store/profile.selectors'
export { profileSchema, type ProfileFormValues } from './schemas/profile.schema'
export type {
  PersonalOffer as PersonalOfferModel,
  Profile,
  VisitHistoryItem,
} from './types/profile.types'
export { fetchProfile, updateProfile } from './store/profile.thunks'
