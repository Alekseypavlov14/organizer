import { DateFormatter, DateTime } from '@oleksii-pavlov/date-time'

export type Timestamp = number

export const MILLISECONDS_PER_SECOND = 1000
export const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * 60
export const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * 60
export const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * 24

export const DAYS_PER_WEEK = 7

export const MONDAY_WEEKDAY_INDEX = 1

export const baseFormatter = new DateFormatter()

export function getNormalizedToday(): DateTime {
  return new DateTime(Date.now())
}

export function getFirstDayOfWeek(date: Timestamp): DateTime {
  return new DateTime(date).getFirstDayOfWeek(MONDAY_WEEKDAY_INDEX).normalizeDate()
}
export function getLastDayOfWeek(date: Timestamp): DateTime {
  return new DateTime(date).getLastDayOfWeek(MONDAY_WEEKDAY_INDEX).normalizeDate()
}

export function getFirstDayOfMonth(date: Timestamp): DateTime {
  const dateTime = new DateTime(date).normalizeDate()
  const firstDayOfMonth = dateTime.getDateTimeBefore({ days: dateTime.getTimeData().days - 1 })
  return firstDayOfMonth
}
export function getLastDayOfMonth(date: Timestamp): DateTime {
  const firstDayOfMonth = getFirstDayOfMonth(date)
  const lastDayOfMonth = firstDayOfMonth.getDateTimeAfter({ months: 1 }).getDateTimeBefore({ days: 1 })
  return lastDayOfMonth
}

export function getWeekDates(weekStart: Timestamp): DateTime[] {
  const firstDateOfWeek = getFirstDayOfWeek(weekStart).normalizeDate().getTimeInMilliseconds()

  const dates = new Array(DAYS_PER_WEEK).fill(null).map<DateTime>((_, index) => {
    return new DateTime(firstDateOfWeek + index * MILLISECONDS_PER_DAY).normalizeDate()
  })

  return dates
}
export function getMonthDates(monthStart: Timestamp): DateTime[] {
  const monthEndDate = getLastDayOfMonth(monthStart)
  const datesInMonth = monthEndDate.getTimeData().days

  const dates = new Array(datesInMonth).fill(null).map((_, index) => {
    return monthEndDate.getDateTimeBefore({ days: datesInMonth - index - 1 })
  })

  return dates
}

export function getMonthOffsetBeforeDates(monthStart: Timestamp): DateTime[] {
  const monthStartDate = getFirstDayOfMonth(monthStart)
  const daysBeforeInCurrentWeek = monthStartDate.getWeekDay(MONDAY_WEEKDAY_INDEX)

  const dates = new Array(daysBeforeInCurrentWeek).fill(null).map((_, index) => {
    return monthStartDate.getDateTimeBefore({ days: index + 1 })
  })

  return dates
}
export function getMonthOffsetAfterDates(monthStart: Timestamp): DateTime[] {
  const monthEndDate = getLastDayOfMonth(monthStart)
  const daysAfterInCurrentWeek = DAYS_PER_WEEK - monthEndDate.getWeekDay(MONDAY_WEEKDAY_INDEX) - 1

  const dates = new Array(daysAfterInCurrentWeek).fill(null).map((_, index) => {
    return monthEndDate.getDateTimeAfter({ days: index + 1 })
  })

  return dates
}

export function isTheSameDate(date1: Timestamp, date2: Timestamp) {
  const normalized1 = new DateTime(date1).normalizeDate().getTimeInMilliseconds()
  const normalized2 = new DateTime(date2).normalizeDate().getTimeInMilliseconds()

  return normalized1 === normalized2
}
