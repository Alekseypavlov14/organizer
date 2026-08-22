import { defaultNotionEntity, type NotionEntity } from '@/entities/notions'
import { create } from 'zustand'

export interface NotionDisplayState {
  notion: NotionEntity
}

export interface NotionDisplayActions {
  updateNotion: (notion: NotionEntity) => void
}

export interface NotionDisplayStore extends NotionDisplayState, NotionDisplayActions {}

export const useNotionDisplayStore = create<NotionDisplayStore>(set => ({
  notion: defaultNotionEntity,
  updateNotion: (notion) => set(state => ({ ...state, notion })),
}))

export const notionSelector = (store: NotionDisplayStore) => store.notion
export const updateNotionSelector = (store: NotionDisplayStore) => store.updateNotion
