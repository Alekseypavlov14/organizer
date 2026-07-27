import type { Option } from '@/shared/types/option'
import { notionLevelEasy, notionLevelHard, notionLevelMedium, notionPriorityBase, notionPriorityImportant, notionProgressCompleted, notionProgressCreated, notionProgressProcessing, type NotionLevel, type NotionPriority, type NotionProgress } from '@/entities/notions'

export function useNotionSettingsOptions() {
  const notionPriorityOptions: Option<NotionPriority>[] = [
    { value: notionPriorityBase, label: 'Base' },
    { value: notionPriorityImportant, label: 'Important' },
  ]

  const notionProgressOptions: Option<NotionProgress>[] = [
    { value: notionProgressCreated, label: 'Created' },
    { value: notionProgressProcessing, label: 'Processing' },
    { value: notionProgressCompleted, label: 'Completed' }, 
  ]

  const notionLevelOptions: Option<NotionLevel>[] = [
    { value: notionLevelEasy, label: 'Easy' },
    { value: notionLevelMedium, label: 'Medium' },
    { value: notionLevelHard, label: 'Hard' },
  ]

  return ({
    notionPriorityOptions,
    notionProgressOptions,
    notionLevelOptions,
  })
}
