import { DateSelectionModal, useDateSelectionCalendar, useDateSelectionModal } from '@/widgets/calendars/DateSelectionModal'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { NotionWeekView, useNotionWeekViewCalendar } from '@/widgets/notions/NotionWeekView'
import { FloatingActions, FloatingAction } from '@/shared/components/FloatingActions'
import { useNavigation } from '@/app/navigation'
import { AppGreeting } from '@/widgets/shared/AppGreeting'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { Icon } from '@/shared/components/Icon'
import { Main } from '@/shared/components/Main'

export function HomePage() {
  const { navigateNotionFeedPage, navigateGroupFeedRootPage } = useNavigation()

  const dateSelectionCalendar = useDateSelectionCalendar()
  const dateSelectionModal = useDateSelectionModal()
  
  const notionWeekFeed = useNotionWeekViewCalendar()

  function openDateSelectionModal() {
    dateSelectionCalendar.selectToday()
    dateSelectionModal.open()
  }

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
            <NotionWeekView />
          </Flex>
        </Container>
      </Main>

      <DateSelectionModal onSelect={notionWeekFeed.updateSelectedDate} />

      <FloatingActions>
        <FloatingAction onClick={openDateSelectionModal}>
          <Icon name="search" size='l' />
        </FloatingAction>

        <FloatingAction onClick={navigateGroupFeedRootPage}>
          <Icon name="folder" size='l' />
        </FloatingAction>

        <FloatingAction onClick={navigateNotionFeedPage}>
          <Icon name="list" size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
