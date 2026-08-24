import type { AbstractNotionItemProps } from '../../types/AbstractNotionItemProps'
import { notionFeedVariantBlock, notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { NotionBlockItem } from '../../variants/NotionBlockItem'
import { NotionListItem } from '../../variants/NotionListItem'

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
