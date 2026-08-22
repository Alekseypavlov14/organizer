import { NotionContentForm } from '@/features/notions/form'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Main } from '@/shared/components/Main'

export function NotionEditionPage() {
  return (
    <Wrapper>
      <Main>
        <Container stretch>
          <NotionContentForm />
        </Container>
      </Main>
    </Wrapper>
  )
}
