import { DateFormatter, DateTime } from '@oleksii-pavlov/date-time'

export type Timestamp = number

export const MILLISECONDS_PER_SECOND = 1000
export const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * 60
export const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * 60
export const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * 24

export const DAYS_PER_WEEK = 7

export const MONDAY_WEEKDAY_INDEX = 1

export const baseFormatter = new DateFormatter()

export function getFirstDayOfWeek(date: Timestamp): DateTime {
  return new DateTime(date).getFirstDayOfWeek(MONDAY_WEEKDAY_INDEX).normalizeDate()
}
export function getLastDayOfWeek(date: Timestamp): DateTime {
  return new DateTime(date).getLastDayOfWeek(MONDAY_WEEKDAY_INDEX).normalizeDate()
}

export function getWeekDates(weekStart: Timestamp): DateTime[] {
  const firstDateOfWeek = getFirstDayOfWeek(weekStart).normalizeDate().getTimeInMilliseconds()

  const dates = new Array(DAYS_PER_WEEK).fill(null).map<DateTime>((_, index) => {
    return new DateTime(firstDateOfWeek + index * MILLISECONDS_PER_DAY).normalizeDate()
  })

  return dates
}
