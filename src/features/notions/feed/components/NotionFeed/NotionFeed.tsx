import type { NotionEntity } from '@/entities/notions'
import { notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { NotionItems } from '../NotionItems'
import styles from './NotionFeed.module.css'

interface NotionFeedProps {
  notions: NotionEntity[]
  variant?: NotionFeedVariant
  onNotionClick?: (notion: NotionEntity) => void
}

export function NotionFeed({
  notions,
  variant = notionFeedVariantList,
  onNotionClick = () => {},
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
