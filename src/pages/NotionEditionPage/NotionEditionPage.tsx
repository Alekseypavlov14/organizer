import { NotionContentForm, NotionSettingsForm } from '@/features/notions/form'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'

export function NotionEditionPage() {
  return (
    <Wrapper>
      <Container>
        <NotionContentForm />
        <NotionSettingsForm />
      </Container>
    </Wrapper>
  )
}
