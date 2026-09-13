import { notionPriorityImportant, notionPriorityUrgent, useNotionsStoreFilter } from '@/entities/notions'
import { Flex, flexDirectionVertical, flexGapLarge, flexGapMedium } from '@/shared/components/Flex'
import { NotionFeed, NotionFeedHeader, NotionFeedItems } from '@/features/notions/feed'
import { useNotionImportantFeed, useNotionUrgentFeed } from './feed.feature'
import { CalendarWeekControl } from '@/features/shared/calendars'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { FloatingAction } from '@/shared/components/FloatingAction'
import { isTheSameDate } from '@/shared/utils/datetime'
import { useNavigation } from '@/app/navigation'
import { AppGreeting } from '@/widgets/AppGreeting'
import { useCalendar } from './calendar.feature'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { useEffect } from 'react'
import { isNull } from '@/shared/utils/validation'
import { Icon } from '@/shared/components/Icon'
import { Main } from '@/shared/components/Main'
import { Text } from '@/shared/components/Text'

export function HomePage() {
  const { navigateNotionFeedPage } = useNavigation()

  const calendar = useCalendar()

  const notionImportantFeed = useNotionImportantFeed()
  const notionsImportant = useNotionsStoreFilter(notion => notion.priority === notionPriorityImportant)

  const notionUrgentFeed = useNotionUrgentFeed()
  const notionsUrgent = useNotionsStoreFilter(notion => notion.priority === notionPriorityUrgent)

  useEffect(() => {
    const notionsImportantInSelectedDate = notionsImportant.filter(notion => (
      !isNull(notion.date) && 
      isTheSameDate(notion.date?.value, calendar.store.selectedDate)
    ))

    notionImportantFeed.updateNotions(notionsImportantInSelectedDate)
  }, [notionsImportant, calendar.store.selectedDate])

  useEffect(() => {
    const notionsUrgentInSelectedDate = notionsUrgent.filter(notion => (
      !isNull(notion.date) && 
      isTheSameDate(notion.date?.value, calendar.store.selectedDate)
    ))

    notionUrgentFeed.updateNotions(notionsUrgentInSelectedDate)
  }, [notionsUrgent, calendar.store.selectedDate])

  useOnPageOpened(() => calendar.setCalendarWeekMode())

  return (
    <PageLayout>
      <AppHeader />
      
      <Main>
        <Container>
          <Flex
            direction={flexDirectionVertical}
            gap={flexGapLarge}
          >
            <Flex 
              direction={flexDirectionVertical}
              gap={flexGapMedium}
            >
              <AppGreeting />
  
              <CalendarWeekControl 
                value={calendar.store.selectedDate}
                onChange={calendar.updateSelectedDate}
                weekStart={calendar.store.anchorDate}
              />
            </Flex>

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
