import type { DateModel } from '@/entities/shared/models/date'
import type { TimeModel } from '@/entities/shared/models/time'

export interface MomentModel {
  date: DateModel
  time: TimeModel
}
