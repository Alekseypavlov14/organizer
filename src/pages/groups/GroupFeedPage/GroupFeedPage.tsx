import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { GroupFeed, GroupFeedHeader, GroupFeedItems } from '@/features/groups/feed'
import { groupsSelector, useGroupsStore } from '@/entities/groups'
import { useNavigation } from '@/app/navigation'
import { useGroupFeed } from './feed.feature'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { useEffect } from 'react'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'
import { Text } from '@/shared/components/Text'

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
          <GroupFeed store={groupFeed.store}>
            <GroupFeedHeader>
              <Text size='l'>Groups</Text>
            </GroupFeedHeader>

            <GroupFeedItems onGroupClick={(group) => navigateGroupDisplayPage(group.id)} />
          </GroupFeed>
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
