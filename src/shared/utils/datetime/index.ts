import { DateFormatter } from '@oleksii-pavlov/date-time'

export const MILLISECONDS_PER_SECOND = 1000
export const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * 60
export const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * 60
export const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * 24

export const dateFormatter = new DateFormatter()
