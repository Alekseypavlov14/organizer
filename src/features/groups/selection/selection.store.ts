import type { GroupEntity } from '@/entities/groups'
import type { Nullable } from '@/shared/types/nullable'
import { selectionModeHierarchy, type SelectionMode } from './constants'
import { create } from 'zustand'

interface GroupSelectionState {
  groups: GroupEntity[]

  currentGroup: Nullable<GroupEntity>
  searchQuery: string

  selectionMode: SelectionMode
}

interface GroupSelectionActions {
  updateGroups: (groups: GroupEntity[]) => void

  updateCurrentGroup: (group: Nullable<GroupEntity>) => void
  updateSearchQuery: (query: string) => void

  updateSelectionMode: (mode: SelectionMode) => void
}

export interface GroupSelectionStore extends GroupSelectionState, GroupSelectionActions {}

export const useGroupSelectionStore = create<GroupSelectionStore>(set => ({
  groups: [],

  currentGroup: null,
  searchQuery: '',

  selectionMode: selectionModeHierarchy,

  updateGroups: (groups) => set(state => ({ ...state, groups })),

  updateCurrentGroup: (currentGroup) => set(state => ({ ...state, currentGroup })),
  updateSearchQuery: (searchQuery) => set(state => ({ ...state, searchQuery })),

  updateSelectionMode: (selectionMode) => set(state => ({ ...state, selectionMode })),
}))

export const groupsSelector = (store: GroupSelectionStore) => store.groups
export const currentGroupSelector = (store: GroupSelectionStore) => store.currentGroup
export const searchQuerySelector = (store: GroupSelectionStore) => store.searchQuery
export const selectionModeSelector = (store: GroupSelectionStore) => store.selectionMode

export const updateGroupsSelector = (store: GroupSelectionStore) => store.updateGroups
export const updateCurrentGroupSelector = (store: GroupSelectionStore) => store.updateCurrentGroup
export const updateSearchQuerySelector = (store: GroupSelectionStore) => store.updateSearchQuery
export const updateSelectionModeSelector = (store: GroupSelectionStore) => store.updateSelectionMode
