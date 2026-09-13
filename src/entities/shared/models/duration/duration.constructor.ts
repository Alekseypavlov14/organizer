import type { DurationModel } from './duration.model'
import type { Timestamp } from '@/shared/utils/datetime'

export function createDurationModel(value: Timestamp): DurationModel {
  return ({ value })
}
