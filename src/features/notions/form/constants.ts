import type { Option } from '@/shared/types/option'
import { notionLevelEasy, notionLevelHard, notionLevelMedium, notionPriorityBase, notionPriorityImportant, notionProgressCompleted, notionProgressCreated, notionProgressProcessing, type NotionLevel, type NotionPriority, type NotionProgress } from '@/entities/notions'

export const notionPriorityOptions: Option<NotionPriority>[] = [
  { value: notionPriorityBase, label: 'Base' },
  { value: notionPriorityImportant, label: 'Important' },
]

export const notionProgressOptions: Option<NotionProgress>[] = [
  { value: notionProgressCreated, label: 'Created' },
  { value: notionProgressProcessing, label: 'Processing' },
  { value: notionProgressCompleted, label: 'Completed' }, 
]

export const notionLevelOptions: Option<NotionLevel>[] = [
  { value: notionLevelEasy, label: 'Easy' },
  { value: notionLevelMedium, label: 'Medium' },
  { value: notionLevelHard, label: 'Hard' },
]
