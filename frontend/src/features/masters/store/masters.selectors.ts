import type { RootState } from '../../../app/store'

export const selectMastersState = (state: RootState) => state.masters
export const selectMasters = (state: RootState) => selectMastersState(state).items
export const selectMastersLoading = (state: RootState) => selectMastersState(state).isLoading
export const selectMastersError = (state: RootState) => selectMastersState(state).error
export const selectSelectedMaster = (state: RootState) => {
  const { items, selectedId } = selectMastersState(state)
  return items.find(({ id }) => id === selectedId)
}
export const selectMasterById = (id: string) => (state: RootState) =>
  selectMasters(state).find((master) => master.id === id)
