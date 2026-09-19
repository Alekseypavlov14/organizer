import type { GroupEntity } from '@/entities/groups'
import { defaultColorModel } from '@/entities/shared'
import { generateId } from '@/shared/utils/id'

export function createInitialGroup(): GroupEntity {
  return ({
    id: generateId(),

    parentId: null,
    
    title: '',
    color: defaultColorModel,

    notionIds: [],

    savedAt: Date.now()
  })
}
