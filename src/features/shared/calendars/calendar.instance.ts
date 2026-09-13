import { getFirstDayOfMonth, getFirstDayOfWeek, type Timestamp } from '@/shared/utils/datetime'
import { calendarModeDay, calendarModeMonth, calendarModeWeek } from './constants'
import { createCalendarStore } from './calendar.store'
import { DateTime } from '@oleksii-pavlov/date-time'

export function createCalendarInstance() {
  const useCalendarStore = createCalendarStore()

  function useCalendar() {
    const store = useCalendarStore()

    function setCalendarDayMode() {
      store.updateMode(calendarModeDay)
      store.updateAnchorDate(store.selectedDate)
    }

    function setCalendarWeekMode() {
      const anchor = getFirstDayOfWeek(store.selectedDate).getTimeInMilliseconds()

      store.updateMode(calendarModeWeek)
      store.updateAnchorDate(anchor)
    }

    function setCalendarMonthMode() {
      const anchor = getFirstDayOfMonth(store.selectedDate).getTimeInMilliseconds()

      store.updateMode(calendarModeMonth)
      store.updateAnchorDate(anchor) 
    }

    function updateSelectedDate(date: Timestamp) {
      store.updateSelectedDate(date)
      store.updateAnchorDate(getAnchorDate(date))
    }

    function getAnchorDate(date: Timestamp): Timestamp {
      return ({
        [calendarModeDay]: new DateTime(date).normalizeDate().getTimeInMilliseconds(),
        [calendarModeWeek]: getFirstDayOfWeek(date).getTimeInMilliseconds(),
        [calendarModeMonth]: getFirstDayOfMonth(date).getTimeInMilliseconds(),
      })[store.mode]
    }

    return ({ 
      store,

      updateSelectedDate,
      
      setCalendarMonthMode,
      setCalendarWeekMode,
      setCalendarDayMode,
    })
  }

  return useCalendar
}
