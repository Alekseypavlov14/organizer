import { NotionFeed } from '@/features/notions/feed'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Main } from '@/shared/components/Main'

export function NotionFeedPage() {
  return (
    <Wrapper>
      <Main>
        <Container stretch>
          <NotionFeed 
            notions={[]}
          />
        </Container>
      </Main>
    </Wrapper>
  )
}
