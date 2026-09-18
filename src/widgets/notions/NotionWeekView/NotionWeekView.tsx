import { useNotionsStoreFilter, notionPriorityUrgent, notionPriorityImportant, type NotionEntity } from '@/entities/notions'
import { useNotionUrgentFeed, useNotionImportantFeed, useNotionOtherFeed } from './view.feed'
import { NotionFeed, NotionFeedHeader, NotionFeedItems, NotionItem } from '@/features/notions/feed'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { useNotionWeekViewCalendar } from './view.calendar'
import { CalendarWeekControl } from '@/features/shared/calendars'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { isTheSameDate } from '@/shared/utils/datetime'
import { useNavigation } from '@/app/navigation'
import { Placeholder } from '@/shared/components/Placeholder'
import { useEffect } from 'react'
import { isNull } from '@/shared/utils/validation'
import { Text } from '@/shared/components/Text'
import styles from './NotionWeekView.module.css'

export function NotionWeekView() {
  const { navigateNotionDisplayPage } = useNavigation()

  const calendar = useNotionWeekViewCalendar()

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

  function onNotionClick(notion: NotionEntity) {
    navigateNotionDisplayPage(notion.id)
  }

  return (
    <Flex 
      className={styles.NotionWeekView}
      direction={flexDirectionVertical}
      gap={flexGapMedium}
    >
      <CalendarWeekControl 
        value={calendar.store.selectedDate}
        onChange={calendar.updateSelectedDate}
        weekStart={calendar.store.anchorDate}
      />

      {notionUrgentFeed.store.notions.length > 0 ? (
        <NotionFeed store={notionUrgentFeed.store}>
          <Flex
            direction={flexDirectionVertical}
            gap={flexGapMedium}
          >
            <NotionFeedHeader>
              <Text size='l'>Urgent</Text>
            </NotionFeedHeader>
            
            <NotionFeedItems>
              {(notion) => (
                <NotionItem 
                  onClick={onNotionClick} 
                  notion={notion}
                />
              )}
            </NotionFeedItems>
          </Flex>
        </NotionFeed>
      ) : null}

      {notionImportantFeed.store.notions.length > 0 ? (
        <NotionFeed store={notionImportantFeed.store}>
          <Flex
            direction={flexDirectionVertical}
            gap={flexGapMedium}
          >
            <NotionFeedHeader>
              <Text size='l'>Important</Text>
            </NotionFeedHeader>
  
            <NotionFeedItems>
              {(notion) => (
                <NotionItem 
                  onClick={onNotionClick} 
                  notion={notion}
                />
              )}
            </NotionFeedItems>
          </Flex>
        </NotionFeed>
      ) : null}

      {notionOtherFeed.store.notions.length > 0 ? (
        <NotionFeed store={notionOtherFeed.store}>
          <Flex
            direction={flexDirectionVertical}
            gap={flexGapMedium}
          >
            <NotionFeedHeader>
              <Text size='l'>Other</Text>
            </NotionFeedHeader>
  
            <NotionFeedItems>
              {(notion) => (
                <NotionItem 
                  onClick={onNotionClick} 
                  notion={notion}
                />
              )}
            </NotionFeedItems>
          </Flex>
        </NotionFeed>
      ) : null}

      {notionsInSelectedDate.length <= 0 ? (
        <Placeholder>
          <Text>You are free today</Text>
        </Placeholder>
      ) : null}
    </Flex>
  )
}
