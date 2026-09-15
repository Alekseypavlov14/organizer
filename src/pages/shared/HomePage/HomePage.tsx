import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { FloatingActions, FloatingAction } from '@/shared/components/FloatingActions'
import { NotionWeekView } from '@/widgets/notions/NotionWeekView'
import { useNavigation } from '@/app/navigation'
import { AppGreeting } from '@/widgets/shared/AppGreeting'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { Icon } from '@/shared/components/Icon'
import { Main } from '@/shared/components/Main'

export function HomePage() {
  const { navigateNotionFeedPage, navigateGroupFeedPage } = useNavigation()

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
