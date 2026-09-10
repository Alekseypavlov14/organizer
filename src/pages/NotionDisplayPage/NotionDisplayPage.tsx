import { useNotionByIdFromQueryParams } from '@/features/notions/shared'
import { wrapperVariantWhite } from '@/shared/components/Wrapper'
import { useNotifications } from '@/app/notifications'
import { useNotionDisplay } from './display.feature'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { FloatingAction } from '@/shared/components/FloatingAction'
import { NotionDisplay } from '@/features/notions/display'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function NotionDisplayPage() {
  const { navigatePreviousPage, navigateNotionEditionPage, navigateNotionEditionSettingsPage } = useNavigation()
  const { createErrorNotification } = useNotifications()
  
  const notionDisplay = useNotionDisplay()

  useNotionByIdFromQueryParams({
    success: (notion) => notionDisplay.updateNotion(notion),
    failure: () => {
      navigatePreviousPage()
      createErrorNotification('The notion is not found')
    }
  })

  return (
    <PageLayout variant={wrapperVariantWhite}>
      <AppHeader />

      <Main>
        <Container stretch>
          <NotionDisplay store={notionDisplay.store} />
        </Container>
      </Main>

      <FloatingActions>
        <FloatingAction onClick={() => navigateNotionEditionSettingsPage(notionDisplay.store.notion.id)}>
          <Icon name='settings' size='l' />
        </FloatingAction>

        <FloatingAction onClick={() => navigateNotionEditionPage(notionDisplay.store.notion.id)}>
          <Icon name='pen' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
