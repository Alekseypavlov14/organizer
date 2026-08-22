import { NotionDisplay, useNotionDisplay } from '@/features/notions/display'
import { useNotionByIdFromQueryParams } from '@/features/notions/shared'
import { useNotifications } from '@/app/notifications'
import { useNavigation } from '@/app/navigation'
import { Container } from '@/shared/components/Container'
import { Wrapper } from '@/shared/components/Wrapper'
import { Main } from '@/shared/components/Main'

export function NotionDisplayPage() {
  const { navigateHomePage } = useNavigation()
  const { createErrorNotification } = useNotifications()

  const { updateNotionDisplay } = useNotionDisplay()

  useNotionByIdFromQueryParams({
    success: (notion) => updateNotionDisplay(notion),
    failure: () => {
      navigateHomePage()
      createErrorNotification('The notion is not found')
    }
  })

  return (
    <Wrapper>
      <Main>
        <Container stretch>
          <NotionDisplay />
        </Container>
      </Main>
    </Wrapper>
  )
}
