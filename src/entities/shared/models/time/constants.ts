import { dateFormatter, MILLISECONDS_PER_DAY } from '@/shared/utils/datetime'
import { Range } from '@oleksii-pavlov/ranges'

export const timeFormatter = dateFormatter.createFormatter('hh:mm')

export const timeRegex = /^\d{1,2}\:\d{2}$/

export const timeRange = new Range({ min: 0, max: MILLISECONDS_PER_DAY })
export const hoursRange = new Range({ min: 0, max: 23 })
export const minutesRange = new Range({ min: 0, max: 59 })
