import type { NotionLevel, NotionPriority, NotionProgress } from './constants'
import type { DurationModel } from '@/entities/shared/models/duration'
import type { MomentModel } from '@/entities/shared/models/moment'
import type { TimeModel } from '@/entities/shared/models/time'
import type { DateModel } from '@/entities/shared/models/date'
import type { Nullable } from '@/shared/types/nullable'
import type { Entity } from '@/shared/types/entity'

export interface NotionEntity extends Entity {
  title: string
  description: Nullable<string>

  // for plans
  date: Nullable<DateModel>
  time: Nullable<TimeModel>
  duration: Nullable<DurationModel>

  // for todos
  deadline: Nullable<MomentModel>
  done: Nullable<boolean>

  // for meta info
  priority: Nullable<NotionPriority>
  progress: Nullable<NotionProgress>
  level: Nullable<NotionLevel>
}
