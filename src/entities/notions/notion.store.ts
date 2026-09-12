import type { NotionEntity } from './notion.entity'
import { notionEntityStorage } from './notion.storage'
import { create } from 'zustand'

export interface NotionsState {
  notions: NotionEntity[]
}

export interface NotionsActions {
  updateNotions: (notions: NotionEntity[]) => void
}

export interface NotionsStore extends NotionsState, NotionsActions {}

export const useNotionsStore = create<NotionsStore>(set => ({
  notions: notionEntityStorage.getAll(),
  updateNotions: (notions: NotionEntity[]) => set(state => ({ ...state, notions }))
}))

export const notionsSelector = (store: NotionsStore) => store.notions
export const updateNotionsSelector = (store: NotionsStore) => store.updateNotions
