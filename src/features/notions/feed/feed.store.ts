import type { NotionEntity } from '@/entities/notions'
import { notionFeedVariantList, type NotionFeedVariant } from './constants'
import { create } from 'zustand'

export interface NotionFeedState {
  notions: NotionEntity[]
  variant: NotionFeedVariant
}

export interface NotionFeedActions {
  updateNotions: (notions: NotionEntity[]) => void
  updateVariant: (variant: NotionFeedVariant) => void
}

export interface NotionFeedStore extends NotionFeedState, NotionFeedActions {}

export function createNotionFeedStore() {
  return create<NotionFeedStore>(set => ({
    notions: [],
    variant: notionFeedVariantList,

    updateNotions: (notions) => set(state => ({ ...state, notions })),
    updateVariant: (variant) => set(state => ({ ...state, variant })),
  }))
}

export const notionsSelector = (store: NotionFeedStore) => store.notions
export const variantSelector = (store: NotionFeedStore) => store.variant

export const updateNotionsSelector = (store: NotionFeedStore) => store.updateNotions
export const updateVariantSelector = (store: NotionFeedStore) => store.updateVariant
