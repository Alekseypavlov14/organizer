import { getFirstDayOfMonth, getNormalizedToday, type Timestamp } from '@/shared/utils/datetime'
import { type CalendarMode } from './constants'
import { create } from 'zustand'

interface CalendarState {
  mode: CalendarMode
  anchorDate: Timestamp
  selectedDate: Timestamp
}

interface CalendarActions {
  updateMode: (mode: CalendarMode) => void
  updateAnchorDate: (date: Timestamp) => void
  updateSelectedDate: (date: Timestamp) => void
}

export interface CalendarStore extends CalendarState, CalendarActions {}

export function createCalendarStore(mode: CalendarMode) {
  return create<CalendarStore>(set => ({
    mode: mode,
    anchorDate: getFirstDayOfMonth(Date.now()).getTimeInMilliseconds(),
    selectedDate: getNormalizedToday().getTimeInMilliseconds(),

    updateMode: (mode) => set(state => ({ ...state, mode })),
    updateAnchorDate: (anchorDate) => set(state => ({ ...state, anchorDate })),
    updateSelectedDate: (selectedDate) => set(state => ({ ...state, selectedDate })),
  }))
}
