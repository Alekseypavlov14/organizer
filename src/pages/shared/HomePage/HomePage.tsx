import { notionPriorityImportant, notionPriorityUrgent, useNotionsStoreFilter } from '@/entities/notions'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { NotionFeed, NotionFeedHeader, NotionFeedItems } from '@/features/notions/feed'
import { useNotionImportantFeed, useNotionUrgentFeed } from './feed.feature'
import { CalendarWeekControl } from '@/features/shared/calendars'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { FloatingAction } from '@/shared/components/FloatingAction'
import { useNavigation } from '@/app/navigation'
import { AppGreeting } from '@/widgets/AppGreeting'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { useEffect } from 'react'
import { Icon } from '@/shared/components/Icon'
import { Main } from '@/shared/components/Main'
import { Text } from '@/shared/components/Text'

export function HomePage() {
  const { navigateNotionFeedPage } = useNavigation()

  const notionImportantFeed = useNotionImportantFeed()
  const notionsImportant = useNotionsStoreFilter(notion => notion.priority === notionPriorityImportant)

  const notionUrgentFeed = useNotionUrgentFeed()
  const notionsUrgent = useNotionsStoreFilter(notion => notion.priority === notionPriorityUrgent)

  useEffect(() => notionImportantFeed.updateNotions(notionsImportant), [notionsImportant])
  useEffect(() => notionUrgentFeed.updateNotions(notionsUrgent), [notionsUrgent])

  return (
    <PageLayout>
      <AppHeader />
      
      <Main>
        <Container>
          <Flex
            direction={flexDirectionVertical}
            gap={flexGapMedium}
          >
            <AppGreeting />

            <CalendarWeekControl 
              value={Date.now()}
              weekStart={Date.now()}
            />

            <NotionFeed store={notionImportantFeed.store}>
              <NotionFeedHeader>
                <Text size='l'>Important</Text>
              </NotionFeedHeader>

              <NotionFeedItems />
            </NotionFeed>

            <NotionFeed store={notionUrgentFeed.store}>
              <NotionFeedHeader>
                <Text size='l'>Urgent</Text>
              </NotionFeedHeader>
              
              <NotionFeedItems />
            </NotionFeed>
          </Flex>
        </Container>
      </Main>

      <FloatingActions>
        <FloatingAction onClick={navigateNotionFeedPage}>
          <Icon name="list" size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
