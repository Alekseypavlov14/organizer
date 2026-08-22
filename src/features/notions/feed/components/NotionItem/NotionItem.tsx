import type { AbstractNotionItemProps } from '../../interfaces/AbstractNotionItemProps'
import { notionFeedVariantBlock, notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { NotionBlockItem } from '../NotionBlockItem'
import { NotionListItem } from '../NotionListItem'

interface NotionItemProps extends AbstractNotionItemProps {
  variant: NotionFeedVariant
}

export function NotionItem({ 
  variant,
  ...props
}: NotionItemProps) {
  if (variant === notionFeedVariantList) return (
    <NotionListItem {...props} />
  )
  if (variant === notionFeedVariantBlock) return (
    <NotionBlockItem {...props} />
  )

  return null
}
