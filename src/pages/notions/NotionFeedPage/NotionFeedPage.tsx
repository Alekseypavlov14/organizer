import { FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingAction'
import { notionsSelector, useNotionsStore } from '@/entities/notions'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { useNavigation } from '@/app/navigation'
import { useNotionFeed } from './feed.feature'
import { NotionFeed } from '@/features/notions/feed'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { useEffect } from 'react'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function NotionFeedPage() {
  const { navigateNotionDisplayPage, navigateNotionCreationPage } = useNavigation()

  const notions = useNotionsStore(notionsSelector)
  const notionFeed = useNotionFeed()

  useEffect(() => notionFeed.updateNotions(notions), [notions])

  return (
    <PageLayout>
      <AppHeader />

      <Main>
        <Container stretch>
          <NotionFeed 
            onNotionClick={(notion) => navigateNotionDisplayPage(notion.id)}
            store={notionFeed.store}
          />
        </Container>
      </Main>

      <FloatingActions>
        <FloatingAction 
          variant={floatingActionVariantPrimary}
          onClick={navigateNotionCreationPage}
        >
          <Icon name='plus' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
