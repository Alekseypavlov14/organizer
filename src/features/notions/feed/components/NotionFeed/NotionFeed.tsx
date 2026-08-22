import type { NotionEntity } from '@/entities/notions'
import { notionFeedDefaultTitle, notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { Flex, flexAlignCenter, flexDirectionVertical, flexGapMedium, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { NotionItems } from '../NotionItems'
import styles from './NotionFeed.module.css'
import { Text } from '@/shared/components/Text'
import { NotionVariantControl } from '../NotionVariantControl'

interface NotionFeedProps {
  title?: string

  notions: NotionEntity[]
  onNotionClick?: (notion: NotionEntity) => void
  
  variant?: NotionFeedVariant
  onVariantChange?: (variant: NotionFeedVariant) => void
}

export function NotionFeed({
  title = notionFeedDefaultTitle,
  
  notions,
  onNotionClick = () => {},
  
  variant = notionFeedVariantList,
  onVariantChange = () => {},
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
        <Text size='l'>{title}</Text>

        <NotionVariantControl 
          variant={variant}
          onChange={onVariantChange}
        />
      </Flex>

      <NotionItems 
        notions={notions} 
        variant={variant}
        onNotionClick={onNotionClick}
      />
    </Flex>
  )
}
