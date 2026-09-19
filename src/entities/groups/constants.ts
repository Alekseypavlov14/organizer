import type { GroupEntity } from './group.entity'
import { defaultColorModel } from '../shared'

export const rootGroupTitle = '(root)'

export const defaultGroupEntity: GroupEntity = {
  id: 0,

  parentId: null,
  
  title: '',
  color: defaultColorModel,

  notionIds: [],

  savedAt: 0,
}