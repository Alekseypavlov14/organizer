import type { AbstractNotionItemProps } from '../../interfaces/AbstractNotionItemProps'
import { Palette } from '@/shared/components/Palette'
import styles from './NotionListItem.module.css'

interface NotionListItemProps extends AbstractNotionItemProps {}

export function NotionListItem({
  notion,
  onClick = () => {}
}: NotionListItemProps) {
  return (
    <Palette 
      className={styles.NotionListItem} 
      onClick={onClick}
    >
      <div className={styles.Header}>
        <div className={styles.Title}>{notion.title}</div>
        <div className={styles.Date}>22.11.2025</div>
      </div>
      <div className={styles.Body}>
        <div className={styles.Description}>
          {notion.description}
        </div>
      </div>
    </Palette>
  )
}