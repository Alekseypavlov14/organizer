import { BaseEditionContext, EditionContext } from './edition.context'
import { create } from 'zustand'

export interface NotionEditionState {
  context: EditionContext
}

export interface NotionEditionActions {
  updateContext: (context: EditionContext) => void
}

export interface NotionEditionStore extends NotionEditionState, NotionEditionActions {}

export const useNotionEditionStore = create<NotionEditionStore>(set => ({
  context: new BaseEditionContext(),
  updateContext: (context) => set(state => ({ ...state, context }))
}))

export const contextSelector = (store: NotionEditionStore) => store.context
export const updateContextSelector = (store: NotionEditionStore) => store.updateContext
