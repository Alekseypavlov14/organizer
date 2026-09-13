import type { Timestamp } from '@/shared/utils/datetime'
import type { DateModel } from './date.model'

export function createDateModel(value: Timestamp): DateModel {
  return ({ value })
}
