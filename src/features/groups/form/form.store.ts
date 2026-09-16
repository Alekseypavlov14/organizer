import type { ColorModel } from '@/entities/shared'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { defaultGroupEntity, type GroupEntity } from '@/entities/groups'
import { create } from 'zustand'

interface GroupFormState {
  group: GroupEntity
}

interface GroupFormActions {
  updateGroup: (group: GroupEntity) => void

  updateParentId: (id: Nullable<Id>) => void
  updateTitle: (title: string) => void
  updateColor: (color: ColorModel) => void
}

export interface GroupFormStore extends GroupFormState, GroupFormActions {}

export const useGroupFormStore = create<GroupFormStore>(set => ({
  group: defaultGroupEntity,

  updateGroup: (group) => set(state => ({ ...state, group })),
  updateParentId: (parentId) => set(state => ({ ...state, group: { ...state.group, parentId }})),
  updateTitle: (title) => set(state => ({ ...state, group: { ...state.group, title } })),
  updateColor: (color) => set(state => ({ ...state, group: { ...state.group, color } })),
}))
