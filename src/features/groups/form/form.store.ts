import type { ColorModel } from '@/entities/shared'
import { defaultGroupEntity, type GroupEntity } from '@/entities/groups'
import { create } from 'zustand'

interface GroupFormState {
  group: GroupEntity
}

interface GroupFormActions {
  updateTitle: (title: string) => void
  updateColor: (color: ColorModel) => void
}

export interface GroupFormStore extends GroupFormState, GroupFormActions {}

export const useGroupFormStore = create<GroupFormStore>(set => ({
  group: defaultGroupEntity,

  updateTitle: (title) => set(state => ({ ...state, group: { ...state.group, title } })),
  updateColor: (color) => set(state => ({ ...state, group: { ...state.group, color } })),
}))
