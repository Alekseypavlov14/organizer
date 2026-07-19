import type { AbstractNotionItemProps } from '../../interfaces/AbstractNotionItemProps'
import styles from './NotionListItem.module.css'

interface NotionItemProps extends AbstractNotionItemProps {}

export function NotionListItem({

}: NotionListItemProps) {
  return (
    <div className={styles.NotionListItem}>

    </div>
  )
}
