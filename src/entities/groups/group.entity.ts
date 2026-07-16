import type { NotionEntity } from '@/entities/notions'
import type { Entity } from '@/shared/types/entity'
import type { Id } from '@/shared/types/id'

export interface GroupEntity extends Entity {
  title: string
  notions: NotionEntity[]
}

export interface GroupRecord extends Omit<GroupEntity, 'notions'> {
  notions: Id[]
}
