import { FloatingActions, FloatingAction, floatingActionVariantDanger, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { useConfirmationCancelModal, useConfirmationDeleteModal } from './modals.feature'
import { NotionContentForm, useNotionForm } from '@/features/notions/form'
import { useNotionByIdFromQueryParams } from '@/features/notions/shared'
import { buttonVariantDanger } from '@/shared/components/Button'
import { ConfirmationModal } from '@/features/shared/modals'
import { useNotionEdition } from '@/features/notions/edition'
import { useNotifications } from '@/app/notifications'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function NotionEditionPage() {
  const { navigateNotionDisplayPage, navigateNotionFeedPage, navigatePreviousPage } = useNavigation()
  const { createErrorNotification } = useNotifications()

  const { notion, updateFormNotion } = useNotionForm()
  const notionEdition = useNotionEdition()

  const confirmationDeleteModal = useConfirmationDeleteModal()
  const confirmationCancelModal = useConfirmationCancelModal()

  useNotionByIdFromQueryParams({
    success: (notion) => updateFormNotion(notion),
    failure: () => {
      navigatePreviousPage()
      createErrorNotification('The notion is not found')
    }
  })

  useOnPageClosed(() => notionEdition.handleCompleteEdition())

  function saveNotionHandler() {
    const saved = notionEdition.saveNotion(notion)
    
    if (saved) navigateNotionDisplayPage(saved.id)
    else navigatePreviousPage()
  }

  function deleteNotionHandler() {
    const deleted = notionEdition.deleteNotionById(notion.id)

    if (deleted) navigateNotionFeedPage()
    else navigatePreviousPage()
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

      <ConfirmationModal 
        title='Do you want to cancel this edition?'
        modal={confirmationCancelModal}
        onConfirm={cancelHandler} 
        variant={buttonVariantDanger}
        cancelButton='Continue'
        confirmButton='Cancel'
      />

      <ConfirmationModal 
        title='Do you want to delete this notion?'
        modal={confirmationDeleteModal}
        onConfirm={deleteNotionHandler} 
        variant={buttonVariantDanger}
      />
      
      <FloatingActions>
        <FloatingAction onClick={confirmationCancelModal.open}>
          <Icon name='rotate-ccw' size='l' />
        </FloatingAction>
        
        <FloatingAction 
          variant={floatingActionVariantDanger}
          onClick={confirmationDeleteModal.open}
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
