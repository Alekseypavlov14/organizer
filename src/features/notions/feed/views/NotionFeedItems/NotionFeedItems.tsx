import type { NotionEntity } from '@/entities/notions'
import type { ReactNode } from 'react'
import { mapNotionFeedVariantToClassName } from './constants'
import { NotionFeedPlaceholder } from '../../components/NotionFeedPlaceholder'
import { useNotionFeedContext } from '../../hooks/useNotionFeedContext'
import { NotionItem } from '../../components/NotionItem/NotionItem'
import styles from './NotionFeedItems.module.css'
import clsx from 'clsx'

interface NotionItemsProps {
  onNotionClick?: (notion: NotionEntity) => void
  placeholder?: ReactNode
}

export function NotionFeedItems({
  onNotionClick = () => {},
  placeholder,
}: NotionItemsProps) {
  const { notions, variant } = useNotionFeedContext()

  return (
    <div className={clsx(styles.NotionFeedItems, mapNotionFeedVariantToClassName[variant])}>
      {notions.map(notion => (
        <NotionItem 
          notion={notion} 
          onClick={() => onNotionClick(notion)} 
          key={notion.id}
        />
      ))}

      {notions.length === 0 ? (
        <NotionFeedPlaceholder>
          {placeholder}
        </NotionFeedPlaceholder>
      ) : null}
    </div>
  )
}
