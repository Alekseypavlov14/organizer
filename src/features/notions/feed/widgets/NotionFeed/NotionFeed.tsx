import type { NotionFeedStore } from '../../feed.store'
import type { NotionEntity } from '@/entities/notions'
import { Flex, flexAlignCenter, flexDirectionVertical, flexGapMedium, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { notionFeedDefaultTitle } from '../../constants'
import { NotionFeedPlaceholder } from '../../components/NotionFeedPlaceholder'
import { NotionVariantControl } from '../NotionVariantControl'
import { NotionFeedProvider } from '../../providers/NotionFeedProvider'
import { NotionItems } from '../../views/NotionItems'
import { Text } from '@/shared/components/Text'

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

        {store.notions.length === 0 ? (
          <NotionFeedPlaceholder />
        ) : null}
      </Flex>
    </NotionFeedProvider>
  )
}
