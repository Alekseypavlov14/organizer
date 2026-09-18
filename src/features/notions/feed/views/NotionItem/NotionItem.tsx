import { NotionLevelBadge, NotionPriorityBadge, NotionProgressBadge } from '@/features/notions/shared'
import { Flex, flexAlignCenter, flexGapSmall } from '@/shared/components/Flex'
import { useNotionActions, type NotionEntity } from '@/entities/notions'
import { notionSavedAtFormat } from '../../constants'
import { StopPropagation } from '@/shared/components/StopPropagation'
import { Checkbox } from '@/shared/components/Checkbox'
import { Palette } from '@/shared/components/Palette'
import { isNull } from '@/shared/utils/validation'
import { Icon } from '@/shared/components/Icon'
import styles from './NotionItem.module.css'
import clsx from 'clsx'

interface NotionItemProps {
  notion: NotionEntity
  onClick?: (notion: NotionEntity) => void
  onDetailsClick?: (notion: NotionEntity) => void
  showDetails?: boolean
}

export function NotionItem({ 
  notion,
  onClick = () => {},
  onDetailsClick = () => {},
  showDetails
}: NotionItemProps) {
  const { saveNotion } = useNotionActions()
  
  const formattedDate = notionSavedAtFormat(notion.savedAt)

  const classNames = clsx(
    styles.NotionItem,
    notion.done && styles.Done
  )

  function clickHandler() {
    onClick(notion)
  }

  function clickDetailsHandler() {
    onDetailsClick && onDetailsClick(notion)
  }

  return (
    <Palette 
      className={classNames} 
      onClick={clickHandler}
    >
      <div className={styles.Header}>
        <div className={styles.Title}>{notion.title}</div>

        <Flex
          align={flexAlignCenter}
          gap={flexGapSmall}
        >
          {!isNull(notion.done) ? (
            <StopPropagation>
              <Checkbox
                onCheckedChange={(done) => saveNotion({ ...notion, done })}
                checked={notion.done}
              />
            </StopPropagation>
          ) : null}

          {showDetails ? (
            <StopPropagation>
              <div className={styles.Details}>
                <Icon 
                  onClick={clickDetailsHandler} 
                  name='ellipsis-vertical' 
                />
              </div>
            </StopPropagation>
          ) : null}
        </Flex>
      </div>

      <div className={styles.Body}>
        {notion.description ? (<div className={styles.Description}>{notion.description}</div>) : null}
      </div>
      
      <div className={styles.Badges}>
        {!isNull(notion.priority) ? <NotionPriorityBadge priority={notion.priority} /> : null}
        {!isNull(notion.progress) ? <NotionProgressBadge progress={notion.progress} /> : null}
        {!isNull(notion.level) ? <NotionLevelBadge level={notion.level} /> : null}
      </div>
        
      <div className={styles.Date}>{formattedDate}</div>
    </Palette>
  )
}
