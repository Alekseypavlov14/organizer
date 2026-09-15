import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { GroupExplorerFeed } from '@/widgets/groups/GroupExplorerFeed'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function GroupFeedPage() {
  const { navigateGroupCreationPage } = useNavigation()

  return (
    <PageLayout>
      <AppHeader />

      <Main>
        <Container stretch>
          <GroupExplorerFeed />
        </Container>
      </Main>

      <FloatingActions>
        <FloatingAction 
          variant={floatingActionVariantPrimary}
          onClick={navigateGroupCreationPage}
        >
          <Icon name='plus' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
