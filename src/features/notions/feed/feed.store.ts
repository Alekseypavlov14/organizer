import type { NotionEntity } from '@/entities/notions'
import type { Nullable } from '@/shared/types/nullable'
import { notionFeedVariantList, type NotionFeedVariant } from './constants'
import { create } from 'zustand'

export interface NotionFeedState {
  notions: NotionEntity[]
  variant: NotionFeedVariant

  selectedNotion: Nullable<NotionEntity>
}

export interface NotionFeedActions {
  updateNotions: (notions: NotionEntity[]) => void
  updateVariant: (variant: NotionFeedVariant) => void

  updateSelectedNotion: (notion: Nullable<NotionEntity>) => void
}

export interface NotionFeedStore extends NotionFeedState, NotionFeedActions {}

export function createNotionFeedStore() {
  return create<NotionFeedStore>(set => ({
    notions: [],
    variant: notionFeedVariantList,

    selectedNotion: null,

    updateNotions: (notions) => set(state => ({ ...state, notions })),
    updateVariant: (variant) => set(state => ({ ...state, variant })),

    updateSelectedNotion: (selectedNotion) => set(state => ({ ...state, selectedNotion })),
  }))
}

export const notionsSelector = (store: NotionFeedStore) => store.notions
export const variantSelector = (store: NotionFeedStore) => store.variant
export const selectedNotionSelector = (store: NotionFeedStore) => store.selectedNotion

export const updateNotionsSelector = (store: NotionFeedStore) => store.updateNotions
export const updateVariantSelector = (store: NotionFeedStore) => store.updateVariant
export const updateSelectedNotionSelector = (store: NotionFeedStore) => store.updateSelectedNotion
