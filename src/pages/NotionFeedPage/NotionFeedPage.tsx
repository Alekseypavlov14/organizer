import { NotionFeed } from '@/features/notions/feed'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { Main } from '@/shared/components/Main'

export function NotionFeedPage() {
  return (
    <PageLayout>
      <Main>
        <Container stretch>
          <NotionFeed 
            notions={[]}
          />
        </Container>
      </Main>
    </PageLayout>
  )
}
