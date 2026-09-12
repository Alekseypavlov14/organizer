import type { GroupEntity } from '@/entities/groups'
import { create } from 'zustand'

interface GroupFeedState {
  groups: GroupEntity[]
}

interface GroupFeedActions {
  updateGroups: (groups: GroupEntity[]) => void
}

export interface GroupFeedStore extends GroupFeedState, GroupFeedActions {}

export function createGroupFeedStore() {
  return create<GroupFeedStore>(set => ({
    groups: [],
    updateGroups: (groups) => set(state => ({ ...state, groups }))
  }))
}

export const groupsSelector = (store: GroupFeedStore) => store.groups
export const updateGroupsSelector = (store: GroupFeedStore) => store.updateGroups
