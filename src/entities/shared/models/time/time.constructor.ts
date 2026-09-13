import type { Timestamp } from '@/shared/utils/datetime'
import type { TimeModel } from './time.model'

export function createTimeModel(value: Timestamp): TimeModel {
  return ({ value })
}
