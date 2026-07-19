import type { AbstractNotionItemProps } from '../../interfaces/AbstractNotionItemProps'
import { Palette } from '@/shared/components/Palette'
import styles from './NotionItem.module.css'

interface NotionItemProps extends AbstractNotionItemProps {}

export function NotionItem({
  notion,
  onClick = () => {}
}: NotionItemProps) {
  return (
    <Palette 
      className={styles.NotionItem} 
      onClick={onClick}
    >
      <div className={styles.Header}>
        <div className={styles.Title}>{notion.title}</div>
      </div>
      <div className={styles.Body}>
        <div className={styles.Description}>
          {notion.description}
        </div>
      </div>
      <div className={styles.Footer}>
        <div className={styles.Date}>22.11.2025</div>
      </div>
    </Palette>
  )
}