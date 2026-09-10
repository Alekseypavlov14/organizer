import { useNotionActions } from '@/entities/notions'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { useNavigation } from '@/app/navigation'
import { useNotionFeed } from './feed.feature'
import { NotionFeed } from '@/features/notions/feed'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { Main } from '@/shared/components/Main'

export function NotionFeedPage() {
  const { navigateNotionDisplayPage } = useNavigation()

  const notionActions = useNotionActions()
  const notionFeed = useNotionFeed()

  useOnPageOpened(() => {
    notionFeed.updateNotions(notionActions.getNotions())
  })

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
    </PageLayout>
  )
}
