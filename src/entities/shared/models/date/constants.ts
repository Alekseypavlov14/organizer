import { baseFormatter } from '@/shared/utils/datetime'
import { Range } from '@oleksii-pavlov/ranges'

export const dateFormatter = baseFormatter.createFormatter('DD.MM.YYYY')

export const dateRegex = /^\d{2}\.\d{2}.\d{4}/

export const dateRange = new Range({ min: 1, max: 31 })
export const monthRange = new Range({ min: 1, max: 12 })
