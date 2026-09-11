import type { AbstractNotionItemProps } from '../../types/AbstractNotionItemProps'
import { formatNotionDateTime, NotionLevelBadge, NotionPriorityBadge, NotionProgressBadge } from '@/features/notions/shared'
import { useNotionActions } from '@/entities/notions'
import { StopPropagation } from '@/shared/components/StopPropagation'
import { Checkbox } from '@/shared/components/Checkbox'
import { Palette } from '@/shared/components/Palette'
import { isNull } from '@/shared/utils/validation'
import styles from './NotionListItem.module.css'

interface NotionListItemProps extends AbstractNotionItemProps {}

export function NotionListItem({
  notion,
  onClick = () => {}
}: NotionListItemProps) {
  const { saveNotion } = useNotionActions()
  
  const formattedDate = formatNotionDateTime(notion)

  return (
    <Palette 
      className={styles.NotionListItem} 
      onClick={onClick}
    >
      <div className={styles.Header}>
        <div className={styles.Title}>{notion.title}</div>

        {!isNull(notion.done) ? (
          <StopPropagation>
            <Checkbox
              onCheckedChange={(done) => saveNotion({ ...notion, done })}
              checked={notion.done}
            />
          </StopPropagation>
        ) : null}
      </div>

      <div className={styles.Body}>
        {notion.description ? (<div className={styles.Description}>{notion.description}</div>) : null}
      </div>
      
      <div className={styles.Badges}>
        {!isNull(notion.priority) ? <NotionPriorityBadge priority={notion.priority} /> : null}
        {!isNull(notion.progress) ? <NotionProgressBadge progress={notion.progress} /> : null}
        {!isNull(notion.level) ? <NotionLevelBadge level={notion.level} /> : null}
      </div>
        
      {formattedDate ? (<div className={styles.Date}>{formattedDate}</div>) : null}
    </Palette>
  )
}