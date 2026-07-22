import type { NotionFeedVariant } from '../../constants'
import type { NotionEntity } from '@/entities/notions'
import { mapNotionFeedVariantToClassName } from './constants'
import { NotionItem } from '../NotionItem/NotionItem'
import styles from './NotionItems.module.css'
import clsx from 'clsx'

interface NotionItemsProps {
  notions: NotionEntity[]
  onNotionClick: (notion: NotionEntity) => void
  variant: NotionFeedVariant
}

export function NotionItems({
  notions,
  onNotionClick,
  variant,
}: NotionItemsProps) {
  return (
    <div className={clsx(styles.NotionItems, mapNotionFeedVariantToClassName[variant])}>
      {notions.map(notion => (
        <NotionItem 
          notion={notion} 
          onClick={() => onNotionClick(notion)} 
          variant={variant} 
          key={notion.id}
        />
      ))}
    </div>
  )
}
