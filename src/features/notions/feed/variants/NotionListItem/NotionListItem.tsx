import type { AbstractNotionItemProps } from '../../types/AbstractNotionItemProps'
import { formatNotionDateTime, NotionLevelBadge, NotionPriorityBadge, NotionProgressBadge } from '@/features/notions/shared'
import { Palette } from '@/shared/components/Palette'
import { isNull } from '@/shared/utils/validation'
import styles from './NotionListItem.module.css'

interface NotionListItemProps extends AbstractNotionItemProps {}

export function NotionListItem({
  notion,
  onClick = () => {}
}: NotionListItemProps) {
  const formattedDate = formatNotionDateTime(notion)

  const showBadges = !isNull(notion.priority) || !isNull(notion.progress) || !isNull(notion.level)

  return (
    <Palette 
      className={styles.NotionListItem} 
      onClick={onClick}
    >
      <div className={styles.Header}>
        <div className={styles.Title}>{notion.title}</div>
      </div>

      <div className={styles.Body}>
        {notion.description ? (<div className={styles.Description}>{notion.description}</div>) : null}
      </div>
      
      {showBadges ? (
        <div className={styles.Badges}>
          {!isNull(notion.priority) ? <NotionPriorityBadge priority={notion.priority} /> : null}
          {!isNull(notion.progress) ? <NotionProgressBadge progress={notion.progress} /> : null}
          {!isNull(notion.level) ? <NotionLevelBadge level={notion.level} /> : null}
        </div>
      ) : null}
        
      {formattedDate ? (<div className={styles.Date}>{formattedDate}</div>) : null}
    </Palette>
  )
}