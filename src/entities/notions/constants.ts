import type { NotionEntity } from './notion.entity'
import type { Option } from '@/shared/types/option'

export type NotionPriority = 'important' | 'urgent'

export const notionPriorityImportant: NotionPriority = 'important'
export const notionPriorityUrgent: NotionPriority = 'urgent'

export const notionPriorityList: NotionPriority[] = [
  notionPriorityImportant,
  notionPriorityUrgent,
]

export const notionPriorityImportantOption: Option<NotionPriority> = { value: notionPriorityImportant, label: 'Important' }
export const notionPriorityUrgentOption: Option<NotionPriority> = { value: notionPriorityUrgent, label: 'Urgent' }

export const notionPriorityOptions: Option<NotionPriority>[] = [
  notionPriorityImportantOption,
  notionPriorityUrgentOption,
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

export const notionProgressCreatedOption: Option<NotionProgress> = { value: notionProgressCreated, label: 'Created' }
export const notionProgressProcessingOption: Option<NotionProgress> = { value: notionProgressProcessing, label: 'Processing' }
export const notionProgressCompletedOption: Option<NotionProgress> = { value: notionProgressCompleted, label: 'Completed' }

export const notionProgressOptions: Option<NotionProgress>[] = [
  notionProgressCreatedOption,
  notionProgressProcessingOption,
  notionProgressCompletedOption, 
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

export const notionLevelEasyOption: Option<NotionLevel> = { value: notionLevelEasy, label: 'Easy' }
export const notionLevelMediumOption: Option<NotionLevel> = { value: notionLevelMedium, label: 'Medium' }
export const notionLevelHardOption: Option<NotionLevel> = { value: notionLevelHard, label: 'Hard' }


export const notionLevelOptions: Option<NotionLevel>[] = [
  notionLevelEasyOption,
  notionLevelMediumOption,
  notionLevelHardOption,
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
