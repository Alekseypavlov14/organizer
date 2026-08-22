import type { NotionEntity } from '@/entities/notions'
import { notionFeedDefaultTitle, notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { Flex, flexAlignCenter, flexDirectionVertical, flexGapMedium, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { NotionItems } from '../NotionItems'
import styles from './NotionFeed.module.css'

interface NotionFeedProps {
  title?: string

  notions: NotionEntity[]
  onNotionClick?: (notion: NotionEntity) => void
  
  variant?: NotionFeedVariant
}

export function NotionFeed({
  title = notionFeedDefaultTitle,
  
  notions,
  onNotionClick = () => {},
  
  variant = notionFeedVariantList,
}: NotionFeedProps) {
  return (
    <Flex 
      className={styles.NotionFeed}
      direction={flexDirectionVertical}
      gap={flexGapMedium}
    >
      <Flex
        justify={flexJustifySpaceBetween}
        align={flexAlignCenter}
      >
        <div className={styles.Title}>{title}</div>
      </Flex>

      <NotionItems 
        notions={notions} 
        variant={variant}
        onNotionClick={onNotionClick}
      />
    </Flex>
  )
}
