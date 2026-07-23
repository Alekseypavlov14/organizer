import type { NotionEntity, NotionLevel, NotionPriority, NotionProgress } from '@/entities/notions'
import type { DurationModel } from '@/entities/shared/models/duration'
import type { MomentModel } from '@/entities/shared/models/moment'
import type { TimeModel } from '@/entities/shared/models/time'
import type { DateModel } from '@/entities/shared/models/date'
import type { Nullable } from '@/shared/types/nullable'
import { defaultNotionFormData } from './constants'
import { create } from 'zustand'

export interface NotionFormState {
  notion: NotionEntity
}

export interface NotionFormActions {
  updateTitle: (title: string) => void
  updateDescription: (description: Nullable<string>) => void

  updateDate: (date: Nullable<DateModel>) => void
  updateTime: (time: Nullable<TimeModel>) => void
  updateDuration: (duration: Nullable<DurationModel>) => void
  
  updateDeadline: (deadline: Nullable<MomentModel>) => void
  updateDone: (done: Nullable<boolean>) => void

  updatePriority: (priority: NotionPriority) => void
  updateProgress: (progress: Nullable<NotionProgress>) => void
  updateLevel: (level: Nullable<NotionLevel>) => void
}

export interface NotionFormStore extends NotionFormState, NotionFormActions {}

export const useNotionFormStore = create<NotionFormStore>(set => ({
  notion: defaultNotionFormData,

  updateTitle: (title: string) => set(state => ({ ...state, notion: { ...state.notion, title } })),
  updateDescription: (description: Nullable<string>) => set(state => ({ ...state, notion: { ...state.notion, description } })),

  updateDate: (date: Nullable<DateModel>) => set(state => ({ ...state, notion: { ...state.notion, date } })),
  updateTime: (time: Nullable<TimeModel>) => set(state => ({ ...state, notion: { ...state.notion, time } })),
  updateDuration: (duration: Nullable<DurationModel>) => set(state => ({ ...state, notion: { ...state.notion, duration } })),

  updateDeadline: (deadline: Nullable<MomentModel>) => set(state => ({ ...state, notion: { ...state.notion, deadline } })),
  updateDone: (done: Nullable<boolean>) => set(state => ({ ...state, notion: { ...state.notion, done } })),

  updatePriority: (priority: NotionPriority) => set(state => ({ ...state, notion: { ...state.notion, priority } })),
  updateProgress: (progress: Nullable<NotionProgress>) => set(state => ({ ...state, notion: { ...state.notion, progress } })),
  updateLevel: (level: Nullable<NotionLevel>) => set(state => ({ ...state, notion: { ...state.notion, level } })),
}))

export const notionSelector = (store: NotionFormStore) => store.notion

export const updateTitleSelector = (store: NotionFormStore) => store.updateTitle
export const updateDescriptionSelector = (store: NotionFormStore) => store.updateDescription

export const updateDateSelector = (store: NotionFormStore) => store.updateDate
export const updateTimeSelector = (store: NotionFormStore) => store.updateTime
export const updateDurationSelector = (store: NotionFormStore) => store.updateDuration

export const updateDeadlineSelector = (store: NotionFormStore) => store.updateDeadline
export const updateDoneSelector = (store: NotionFormStore) => store.updateDone

export const updatePrioritySelector = (store: NotionFormStore) => store.updatePriority
export const updateProgressSelector = (store: NotionFormStore) => store.updateProgress
export const updateLevelSelector = (store: NotionFormStore) => store.updateLevel
