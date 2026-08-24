import { useNotionActions } from '@/entities/notions'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { useNotionFeed } from './feed.feature'
import { NotionFeed } from '@/features/notions/feed'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { Main } from '@/shared/components/Main'

export function NotionFeedPage() {
  const notionActions = useNotionActions()
  const notionFeed = useNotionFeed()

  useOnPageOpened(() => {
    notionFeed.updateNotions(notionActions.getNotions())
  })

  return (
    <PageLayout>
      <Main>
        <Container stretch>
          <NotionFeed store={notionFeed.store}/>
        </Container>
      </Main>
    </PageLayout>
  )
}
