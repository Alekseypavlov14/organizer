import { calendarModeDay, calendarModeMonth, calendarModeWeek, type CalendarMode } from './constants'
import { getFirstDayOfMonth, getFirstDayOfWeek, type Timestamp } from '@/shared/utils/datetime'
import { createCalendarStore } from './calendar.store'
import { DateTime } from '@oleksii-pavlov/date-time'

export function createCalendarInstance(mode: CalendarMode) {
  const useCalendarStore = createCalendarStore(mode)

  function useCalendar() {
    const store = useCalendarStore()

    function setCalendarMode(mode: CalendarMode) {
      store.updateMode(mode)
    }

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
    
    function selectToday() {
      const today = new DateTime().normalizeDate()
      updateSelectedDate(today.getTimeInMilliseconds())
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
      selectToday,
      
      setCalendarMode,
      setCalendarMonthMode,
      setCalendarWeekMode,
      setCalendarDayMode,
    })
  }

  return useCalendar
}
