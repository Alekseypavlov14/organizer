import type { NotionEntity } from '@/entities/notions'
import type { ColorModel } from '@/entities/shared/models/color'
import type { Entity } from '@/shared/types/entity'
import type { Id } from '@/shared/types/id'

export interface GroupEntity extends Entity {
  title: string
  color: ColorModel
  notions: NotionEntity[]
}

export interface GroupRecord extends Omit<GroupEntity, 'notions'> {
  notions: Id[]
}
