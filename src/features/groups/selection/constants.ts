import { baseFormatter } from '@/shared/utils/datetime'

export type SelectionMode = 'search' | 'hierarchy'

export const selectionModeSearch: SelectionMode = 'search'
export const selectionModeHierarchy: SelectionMode = 'hierarchy'

export const groupSavedAtFormat = baseFormatter.createFormatter('DD.MM.YYYY hh:mm')
