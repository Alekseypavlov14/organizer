import { notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import type { NotionEntity } from '@/entities/notions'
import styles from './NotionFeed.module.css'

interface NotionFeedProps {
  notions: NotionEntity[]
  variant?: NotionFeedVariant
  onNotionClick?: () => void
}

export function NotionFeed({
  notions,
  variant = notionFeedVariantList,
  onNotionClick = () => {},
}: NotionFeedProps) {
  return (
    <div className={styles.NotionFeed}>
      <div className={styles.Items}>
        
      </div>
    </div>
  )
}
