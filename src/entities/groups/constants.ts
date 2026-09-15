import type { GroupEntity } from './group.entity'
import { defaultColorModel } from '../shared'

export const defaultGroupEntity: GroupEntity = {
  id: 0,

  parentId: null,
  title: '',
  color: defaultColorModel,
  notions: [],

  savedAt: 0,
}