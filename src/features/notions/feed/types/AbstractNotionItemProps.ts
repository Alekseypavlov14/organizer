import type { NotionEntity } from '@/entities/notions'

export interface AbstractNotionItemProps {
  notion: NotionEntity
  onClick?: () => void
}
