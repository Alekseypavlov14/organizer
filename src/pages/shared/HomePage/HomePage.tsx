import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { Calendar, CalendarWeekControl } from '@/features/shared/calendars'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { FloatingAction } from '@/shared/components/FloatingAction'
import { useNavigation } from '@/app/navigation'
import { AppGreeting } from '@/widgets/AppGreeting'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { Icon } from '@/shared/components/Icon'
import { Main } from '@/shared/components/Main'

export function HomePage() {
  const { navigateNotionFeedPage } = useNavigation()

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

            <Calendar monthStart={Date.now()} />
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
