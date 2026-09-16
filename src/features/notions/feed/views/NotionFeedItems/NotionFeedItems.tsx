import type { NotionEntity } from '@/entities/notions'
import { mapNotionFeedVariantToClassName } from './constants'
import { useNotionFeedContext } from '../../hooks/useNotionFeedContext'
import { NotionItem } from '../../components/NotionItem/NotionItem'
import styles from './NotionFeedItems.module.css'
import clsx from 'clsx'

interface NotionItemsProps {
  onNotionClick?: (notion: NotionEntity) => void
}

export function NotionFeedItems({
  onNotionClick = () => {},
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
    </div>
  )
}
