export type NotionPriority = 'base' | 'important'

export const notionPriorityBase: NotionPriority = 'base'
export const notionPriorityImportant: NotionPriority = 'important'

export const notionPriorityOptions: NotionPriority[] = [
  notionPriorityBase,
  notionPriorityImportant,
]

export type NotionLevel = 'easy' | 'medium' | 'hard'

export const notionLevelEasy: NotionLevel = 'easy'
export const notionLevelMedium: NotionLevel = 'medium'
export const notionLevelHard: NotionLevel = 'hard'

export const notionLevelOptions: NotionLevel[] = [
  notionLevelEasy,
  notionLevelMedium,
  notionLevelHard,
]

export type NotionProgress = 'created' | 'processing' | 'completed'

export const notionProgressCreated: NotionProgress = 'created'
export const notionProgressProcessing: NotionProgress = 'processing'
export const notionProgressCompleted: NotionProgress = 'completed'

export const notionProgressOptions: NotionProgress[] = [
  notionProgressCreated,
  notionProgressProcessing,
  notionProgressCompleted,
]
