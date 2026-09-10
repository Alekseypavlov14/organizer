import type { NotionEntity } from './notion.entity'
import type { Option } from '@/shared/types/option'

export type NotionPriority = 'base' | 'important'

export const notionPriorityBase: NotionPriority = 'base'
export const notionPriorityImportant: NotionPriority = 'important'

export const notionPriorityList: NotionPriority[] = [
  notionPriorityBase,
  notionPriorityImportant,
]

export const notionPriorityOptions: Option<NotionPriority>[] = [
  { value: notionPriorityBase, label: 'Base' },
  { value: notionPriorityImportant, label: 'Important' },
]

export type NotionProgress = 'created' | 'processing' | 'completed'

export const notionProgressCreated: NotionProgress = 'created'
export const notionProgressProcessing: NotionProgress = 'processing'
export const notionProgressCompleted: NotionProgress = 'completed'

export const notionProgressList: NotionProgress[] = [
  notionProgressCreated,
  notionProgressProcessing,
  notionProgressCompleted,
]

export const notionProgressOptions: Option<NotionProgress>[] = [
  { value: notionProgressCreated, label: 'Created' },
  { value: notionProgressProcessing, label: 'Processing' },
  { value: notionProgressCompleted, label: 'Completed' }, 
]

export type NotionLevel = 'easy' | 'medium' | 'hard'

export const notionLevelEasy: NotionLevel = 'easy'
export const notionLevelMedium: NotionLevel = 'medium'
export const notionLevelHard: NotionLevel = 'hard'

export const notionLevelList: NotionLevel[] = [
  notionLevelEasy,
  notionLevelMedium,
  notionLevelHard,
]

export const notionLevelOptions: Option<NotionLevel>[] = [
  { value: notionLevelEasy, label: 'Easy' },
  { value: notionLevelMedium, label: 'Medium' },
  { value: notionLevelHard, label: 'Hard' },
]

export const defaultNotionEntity: NotionEntity = {
  id: 0,

  title: '',
  description: null,

  date: null,
  time: null,
  duration: null,

  deadline: null,
  done: null,

  priority: null,
  progress: null,
  level: null
}
