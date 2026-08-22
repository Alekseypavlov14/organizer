import { NotionContentForm, useNotionForm } from '@/features/notions/form'
import { useNotionByIdFromQueryParams } from '@/features/notions/shared'
import { useNotifications } from '@/app/notifications'
import { useNavigation } from '@/app/navigation'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Main } from '@/shared/components/Main'

export function NotionEditionPage() {
  const { navigateHomePage } = useNavigation()
  const { createErrorNotification } = useNotifications()

  const { updateFormNotion } = useNotionForm()

  useNotionByIdFromQueryParams({
    success: (notion) => updateFormNotion(notion),
    failure: () => {
      navigateHomePage()
      createErrorNotification('The notion is not found')
    }
  })

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
