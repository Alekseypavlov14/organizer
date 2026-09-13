import { baseFormatter } from '@/shared/utils/datetime'

export type NotionFeedVariant = 'list' | 'block'

export const notionFeedVariantList: NotionFeedVariant = 'list'
export const notionFeedVariantBlock: NotionFeedVariant = 'block'

export const notionFeedDefaultPlaceholder = 'No items here'

export const notionSavedAtFormat = baseFormatter.createFormatter('DD.MM.YYYY hh:mm')
