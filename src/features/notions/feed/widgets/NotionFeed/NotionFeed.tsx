import type { NotionFeedStore } from '../../feed.store'
import type { NotionEntity } from '@/entities/notions'
import { Flex, flexAlignCenter, flexDirectionVertical, flexGapMedium, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { notionFeedDefaultTitle } from '../../constants'
import { NotionVariantControl } from '../NotionVariantControl'
import { NotionFeedProvider } from '../../providers/NotionFeedProvider'
import { NotionItems } from '../../views/NotionItems'
import { Text } from '@/shared/components/Text'
import styles from './NotionFeed.module.css'

interface NotionFeedProps {
  store: NotionFeedStore

  title?: string
  onNotionClick?: (notion: NotionEntity) => void
}

export function NotionFeed({
  store,

  title = notionFeedDefaultTitle,
  onNotionClick = () => {},
}: NotionFeedProps) {
  return (
    <NotionFeedProvider store={store}>
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
  
          <NotionVariantControl />
        </Flex>
  
        <NotionItems onNotionClick={onNotionClick} />
      </Flex>
    </NotionFeedProvider>
  )
}
