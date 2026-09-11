import type { NotionDeleteByIdCallback } from './types/NotionDeleteByIdCallback'
import type { NotionCancelCallback } from './types/NotionCancelCallback'
import type { NotionSaveCallback } from './types/NotionSaveCallback'
import { create } from 'zustand'

export interface NotionEditionState {
  onNotionSave: NotionSaveCallback
  onNotionDeleteById: NotionDeleteByIdCallback
  onNotionCancel: NotionCancelCallback
}

export interface NotionEditionActions {
  updateOnNotionSave: (callback: NotionSaveCallback) => void
  updateOnNotionDeleteById: (callback: NotionDeleteByIdCallback) => void
  updateOnNotionCancel: (callback: NotionCancelCallback) => void
}

export interface NotionEditionStore extends NotionEditionState, NotionEditionActions {}

export const useNotionEditionStore = create<NotionEditionStore>(set => ({
  onNotionSave: () => {},
  onNotionDeleteById: () => {},
  onNotionCancel: () => {},

  updateOnNotionSave: (onNotionSave) => set(state => ({ ...state, onNotionSave })),
  updateOnNotionDeleteById: (onNotionDelete) => set(state => ({ ...state, onNotionDelete })),
  updateOnNotionCancel: (onNotionCancel) => set(state => ({ ...state, onNotionCancel })),
}))

export const onNotionSaveSelector = (store: NotionEditionStore) => store.onNotionSave
export const onNotionDeleteByIdSelector = (store: NotionEditionStore) => store.onNotionDeleteById
export const onNotionCancelSelector = (store: NotionEditionStore) => store.onNotionCancel

export const updateOnNotionSaveSelector = (store: NotionEditionStore) => store.updateOnNotionSave
export const updateOnNotionDeleteByIdSelector = (store: NotionEditionStore) => store.updateOnNotionDeleteById
export const updateOnNotionCancelSelector = (store: NotionEditionStore) => store.updateOnNotionCancel
