import { FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingAction'
import { groupsSelector, useGroupsStore } from '@/entities/groups'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { useNavigation } from '@/app/navigation'
import { useGroupFeed } from './feed.feature'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { GroupFeed } from '@/features/groups/feed'
import { AppHeader } from '@/widgets/AppHeader'
import { useEffect } from 'react'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function GroupFeedPage() {
  const { navigateGroupCreationPage, navigateGroupDisplayPage } = useNavigation()

  const groups = useGroupsStore(groupsSelector)
  const groupFeed = useGroupFeed()

  useEffect(() => groupFeed.updateGroups(groups), [groups])

  return (
    <PageLayout>
      <AppHeader />

      <Main>
        <Container stretch>
          <GroupFeed 
            onGroupClick={(group) => navigateGroupDisplayPage(group.id)}
            store={groupFeed.store}
          />
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
