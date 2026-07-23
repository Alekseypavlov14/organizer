import type { NotionEntity } from '@/entities/notions'
import { notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { NotionItems } from '../NotionItems'
import styles from './NotionFeed.module.css'

interface NotionFeedProps {
  notions: NotionEntity[]
  onNotionClick?: (notion: NotionEntity) => void
  variant?: NotionFeedVariant
}

export function NotionFeed({
  notions,
  onNotionClick = () => {},
  variant = notionFeedVariantList,
}: NotionFeedProps) {
  return (
    <div className={styles.NotionFeed}>
      <NotionItems 
        notions={notions} 
        variant={variant}
        onNotionClick={onNotionClick}
      />
    </div>
  )
}
