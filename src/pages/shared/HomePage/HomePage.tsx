import { notionPriorityImportant, notionPriorityUrgent, useNotionsStoreFilter } from '@/entities/notions'
import { useNotionImportantFeed, useNotionOtherFeed, useNotionUrgentFeed } from './feed.feature'
import { Flex, flexDirectionVertical, flexGapLarge, flexGapMedium } from '@/shared/components/Flex'
import { NotionFeed, NotionFeedHeader, NotionFeedItems } from '@/features/notions/feed'
import { CalendarWeekControl } from '@/features/shared/calendars'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { FloatingAction } from '@/shared/components/FloatingAction'
import { isTheSameDate } from '@/shared/utils/datetime'
import { useNavigation } from '@/app/navigation'
import { Placeholder } from '@/shared/components/Placeholder'
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
  const { navigateNotionFeedPage, navigateNotionDisplayPage, navigateGroupFeedPage } = useNavigation()

  const calendar = useCalendar()

  const notionUrgentFeed = useNotionUrgentFeed()
  const notionImportantFeed = useNotionImportantFeed()
  const notionOtherFeed = useNotionOtherFeed()

  const notionsInSelectedDate = useNotionsStoreFilter(notion => (
    !isNull(notion.date) && isTheSameDate(notion.date?.value, calendar.store.selectedDate)
  ), [calendar.store.selectedDate])

  useEffect(() => {
    const notionsUrgentInSelectedDate = notionsInSelectedDate.filter(notion => notion.priority === notionPriorityUrgent)
    notionUrgentFeed.updateNotions(notionsUrgentInSelectedDate)
  }, [notionsInSelectedDate, calendar.store.selectedDate])

  useEffect(() => {
    const notionsImportantInSelectedDate = notionsInSelectedDate.filter(notion => notion.priority === notionPriorityImportant)
    notionImportantFeed.updateNotions(notionsImportantInSelectedDate)
  }, [notionsInSelectedDate, calendar.store.selectedDate])

  useEffect(() => {
    const notionsOtherInSelectedDate = notionsInSelectedDate.filter(notion => (
      notion.priority !== notionPriorityUrgent &&
      notion.priority !== notionPriorityImportant
    ))
    notionOtherFeed.updateNotions(notionsOtherInSelectedDate)
  }, [notionsInSelectedDate, calendar.store.selectedDate])

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

            {notionUrgentFeed.store.notions.length > 0 ? (
              <NotionFeed store={notionUrgentFeed.store}>
                <NotionFeedHeader>
                  <Text size='l'>Urgent</Text>
                </NotionFeedHeader>
                
                <NotionFeedItems onNotionClick={notion => navigateNotionDisplayPage(notion.id)} />
              </NotionFeed>
            ) : null}

            {notionImportantFeed.store.notions.length > 0 ? (
              <NotionFeed store={notionImportantFeed.store}>
                <NotionFeedHeader>
                  <Text size='l'>Important</Text>
                </NotionFeedHeader>

                <NotionFeedItems onNotionClick={notion => navigateNotionDisplayPage(notion.id)} />
              </NotionFeed>
            ) : null}

            {notionOtherFeed.store.notions.length > 0 ? (
              <NotionFeed store={notionOtherFeed.store}>
                <NotionFeedHeader>
                  <Text size='l'>Other</Text>
                </NotionFeedHeader>

                <NotionFeedItems onNotionClick={notion => navigateNotionDisplayPage(notion.id)} />
              </NotionFeed>
            ) : null}

            {notionsInSelectedDate.length <= 0 ? (
              <Placeholder>
                <Text>You are free today</Text>
              </Placeholder>
            ) : null}
          </Flex>
        </Container>
      </Main>

      <FloatingActions>
        <FloatingAction onClick={navigateGroupFeedPage}>
          <Icon name="folder" size='l' />
        </FloatingAction>

        <FloatingAction onClick={navigateNotionFeedPage}>
          <Icon name="list" size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
