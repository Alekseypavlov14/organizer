import { NotionFeed, NotionFeedHeader, NotionFeedItems, NotionFeedPlaceholder, NotionVariantControl } from '@/features/notions/feed'
import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { notionsSelector, useNotionsStore } from '@/entities/notions'
import { useNavigation } from '@/app/navigation'
import { useNotionFeed } from './feed.feature'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { useEffect } from 'react'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'
import { Text } from '@/shared/components/Text'

export function NotionFeedPage() {
  const { navigateNotionDisplayPage, navigateNotionCreationPage } = useNavigation()

  const notions = useNotionsStore(notionsSelector)
  const notionFeed = useNotionFeed()

  useEffect(() => notionFeed.updateNotions(notions), [notions])

  return (
    <PageLayout>
      <AppHeader />

      <Main>
        <Container stretch>
          <NotionFeed store={notionFeed.store}>
            <Flex
              direction={flexDirectionVertical}
              gap={flexGapMedium}
            >
              <NotionFeedHeader>
                <Text size='l'>Notions</Text>
  
                <NotionVariantControl />
              </NotionFeedHeader>
  
              <NotionFeedItems onNotionClick={(notion) => navigateNotionDisplayPage(notion.id)} />

              <NotionFeedPlaceholder>
                No items here
              </NotionFeedPlaceholder>
            </Flex>
          </NotionFeed>
        </Container>
      </Main>

      <FloatingActions>
        <FloatingAction 
          variant={floatingActionVariantPrimary}
          onClick={navigateNotionCreationPage}
        >
          <Icon name='plus' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
