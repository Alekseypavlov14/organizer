import { NotionDisplay, useNotionDisplay } from '@/features/notions/display'
import { useNotionByIdFromQueryParams } from '@/features/notions/shared'
import { useNotifications } from '@/app/notifications'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { Main } from '@/shared/components/Main'

export function NotionDisplayPage() {
  const { createErrorNotification } = useNotifications()
  const { navigateBack } = useNavigation()

  const { updateNotionDisplay } = useNotionDisplay()

  useNotionByIdFromQueryParams({
    success: (notion) => updateNotionDisplay(notion),
    failure: () => {
      createErrorNotification('The notion is not found')
      navigateBack()
    }
  })

  return (
    <PageLayout>
      <Main>
        <Container stretch>
          <NotionDisplay />
        </Container>
      </Main>
    </PageLayout>
  )
}
