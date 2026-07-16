import type { NotionEntity } from '@/entities/notions'
import type { Entity } from '@/shared/types/entity'

export interface GroupEntity extends Entity {
  title: string
  notions: NotionEntity[]
}
