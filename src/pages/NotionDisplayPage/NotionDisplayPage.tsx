import { NotionDisplay, useNotionDisplay } from '@/features/notions/display'
import { useNotionByIdFromQueryParams } from '@/features/notions/shared'
import { wrapperVariantWhite } from '@/shared/components/Wrapper'
import { useNotifications } from '@/app/notifications'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { Main } from '@/shared/components/Main'

export function NotionDisplayPage() {
  const { createErrorNotification } = useNotifications()
  const { navigateHomePage } = useNavigation()

  const { updateNotionDisplay } = useNotionDisplay()

  useNotionByIdFromQueryParams({
    success: (notion) => updateNotionDisplay(notion),
    failure: () => {
      navigateHomePage()
      createErrorNotification('The notion is not found')
    }
  })

  return (
    <PageLayout variant={wrapperVariantWhite}>
      <Main>
        <Container stretch>
          <NotionDisplay />
        </Container>
      </Main>
    </PageLayout>
  )
}
