import type { ColorModel } from '../shared'
import type { Nullable } from '@/shared/types/nullable'
import type { Entity } from '@/shared/types/entity'
import type { Id } from '@/shared/types/id'

export interface GroupEntity extends Entity {
  parentId: Nullable<Id>

  title: string
  color: ColorModel
  
  notionIds: Id[]
}
