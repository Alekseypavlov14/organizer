import type { GroupEntity } from './group.entity'
import { groupEntityStorage } from './group.storage'
import { create } from 'zustand'

export interface GroupsState {
  groups: GroupEntity[]
}

export interface GroupsActions {
  updateGroups: (groups: GroupEntity[]) => void
}

export interface GroupsStore extends GroupsState, GroupsActions {}

export const useGroupsStore = create<GroupsStore>(set => ({
  groups: groupEntityStorage.getAll(),
  updateGroups: (groups: GroupEntity[]) => set(state => ({ ...state, groups }))
}))

export const groupsSelector = (store: GroupsStore) => store.groups
export const updateGroupsSelector = (store: GroupsStore) => store.updateGroups
