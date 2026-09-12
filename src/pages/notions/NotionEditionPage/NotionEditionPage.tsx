import { FloatingAction, floatingActionVariantDanger, floatingActionVariantPrimary } from '@/shared/components/FloatingAction'
import { NotionContentForm, useNotionForm } from '@/features/notions/form'
import { useNotionByIdFromQueryParams } from '@/features/notions/shared'
import { useNotionEdition } from '@/features/notions/edition'
import { useNotifications } from '@/app/notifications'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function NotionEditionPage() {
  const { navigatePreviousPage, navigateBeforePreviousPage } = useNavigation()
  const { createErrorNotification } = useNotifications()

  const { notion, updateFormNotion } = useNotionForm()
  const notionEdition = useNotionEdition()

  useNotionByIdFromQueryParams({
    success: (notion) => updateFormNotion(notion),
    failure: () => {
      navigatePreviousPage()
      createErrorNotification('The notion is not found')
    }
  })

  useOnPageClosed(() => notionEdition.handleCompleteEdition())

  function saveNotionHandler() {
    notionEdition.saveNotion(notion)
    navigatePreviousPage()
  }

  function deleteNotionHandler() {
    notionEdition.deleteNotionById(notion.id)
    navigateBeforePreviousPage()
  }

  function cancelHandler() {
    notionEdition.cancelEdition()
    navigatePreviousPage()
  }

  return (
    <PageLayout>
      <AppHeader />

      <Main>
        <Container stretch>
          <NotionContentForm />
        </Container>
      </Main>
      
      <FloatingActions>
        <FloatingAction onClick={cancelHandler}>
          <Icon name='rotate-ccw' size='l' />
        </FloatingAction>
        
        <FloatingAction 
          variant={floatingActionVariantDanger}
          onClick={deleteNotionHandler}
        >
          <Icon name='trash' size='l' />
        </FloatingAction>
        
        <FloatingAction 
          variant={floatingActionVariantPrimary}
          onClick={saveNotionHandler}
        >
          <Icon name='check' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
