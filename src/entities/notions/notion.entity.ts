import type { NotionLevel, NotionPriority, NotionProgress } from './constants'
import type { Nullable } from '@/shared/types/nullable'
import type { Entity } from '@/shared/types/entity'

export interface NotionEntity extends Entity {
  title: string
  description: Nullable<string>

  deadline: Nullable<number>
  done: Nullable<boolean>

  priority: Nullable<NotionPriority>
  progress: Nullable<NotionProgress>
  level: Nullable<NotionLevel>
}
