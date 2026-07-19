import type { AbstractNotionItemProps } from '../../interfaces/AbstractNotionItemProps'
import { Palette } from '@/shared/components/Palette'
import styles from './NotionBlockItem.module.css'

interface NotionBlockItemProps extends AbstractNotionItemProps {}

export function NotionBlockItem({
  notion,
  onClick = () => {}
}: NotionBlockItemProps) {
  return (
    <Palette 
      className={styles.NotionBlockItem} 
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