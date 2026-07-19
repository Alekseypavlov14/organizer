import type { AbstractNotionItemProps } from '../../interfaces/AbstractNotionItemProps'
import { notionFeedVariantBlock, notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { NotionBlockItem } from '../NotionBlockItem'
import { NotionListItem } from '../NotionListItem'

interface NotionItemProps extends AbstractNotionItemProps {
  variant: NotionFeedVariant
}

export function NotionItem({ 
  notion, 
  onClick, 
  variant
}: NotionItemProps) {
  if (variant === notionFeedVariantList) return (
    <NotionListItem notion={notion} onClick={onClick} />
  )
  if (variant === notionFeedVariantBlock) return (
    <NotionBlockItem notion={notion} onClick={onClick} />
  )

  return null
}
