import type { NotionFeedVariant } from '../../constants'
import styles from './NotionItems.module.css'

export const mapNotionFeedVariantToClassName: Record<NotionFeedVariant, string> = {
  list: styles.FeedList,
  block: styles.FeedBlock,
}
