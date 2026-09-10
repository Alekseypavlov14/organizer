import type { NotionEntity } from '@/entities/notions'
import type { Nullable } from '@/shared/types/nullable'
import { dateFormat, timeFormat } from '@/entities/shared'

export function formatNotionDateTime(notion: NotionEntity): Nullable<string> {
  if (!notion.date) return null
  const date = dateFormat.displayModel(notion.date)

  if (!notion.time) return date
  const time = timeFormat.displayModel(notion.time)

  return `${date} ${time}`
}
