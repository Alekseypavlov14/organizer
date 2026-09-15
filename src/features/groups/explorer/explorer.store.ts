import type { GroupEntity } from '@/entities/groups'
import type { Nullable } from '@/shared/types/nullable'
import { explorerModeHierarchy, type ExplorerMode } from './constants'
import { create } from 'zustand'

interface GroupExplorerState {
  groups: GroupEntity[]

  currentGroup: Nullable<GroupEntity>
  searchQuery: string

  explorerMode: ExplorerMode
}

interface GroupExplorerActions {
  updateGroups: (groups: GroupEntity[]) => void

  updateCurrentGroup: (group: Nullable<GroupEntity>) => void
  updateSearchQuery: (query: string) => void

  updateExplorerMode: (mode: ExplorerMode) => void
}

export interface GroupExplorerStore extends GroupExplorerState, GroupExplorerActions {}

export function createGroupExplorerStore() {
  return create<GroupExplorerStore>(set => ({
    groups: [],

    currentGroup: null,
    searchQuery: '',

    explorerMode: explorerModeHierarchy,

    updateGroups: (groups) => set(state => ({ ...state, groups })),

    updateCurrentGroup: (currentGroup) => set(state => ({ ...state, currentGroup })),
    updateSearchQuery: (searchQuery) => set(state => ({ ...state, searchQuery })),

    updateExplorerMode: (explorerMode) => set(state => ({ ...state, explorerMode })),
  }))
}

export const groupsSelector = (store: GroupExplorerStore) => store.groups
export const currentGroupSelector = (store: GroupExplorerStore) => store.currentGroup
export const searchQuerySelector = (store: GroupExplorerStore) => store.searchQuery
export const explorerModeSelector = (store: GroupExplorerStore) => store.explorerMode

export const updateGroupsSelector = (store: GroupExplorerStore) => store.updateGroups
export const updateCurrentGroupSelector = (store: GroupExplorerStore) => store.updateCurrentGroup
export const updateSearchQuerySelector = (store: GroupExplorerStore) => store.updateSearchQuery
export const updateExplorerModeSelector = (store: GroupExplorerStore) => store.updateExplorerMode
