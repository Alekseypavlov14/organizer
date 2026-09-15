import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { useNotionForm, NotionContentForm } from '@/features/notions/form'
import { useConfirmationCancelModal } from './modals.feature'
import { buttonVariantDanger } from '@/shared/components/Button'
import { ConfirmationModal } from '@/features/shared/modals'
import { useNotionEdition } from '@/features/notions/edition'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function NotionCreationPage() {
  const { navigateNotionDisplayPage, navigatePreviousPage } = useNavigation()
  const { notion, updateFormNotion } = useNotionForm()

  const notionEdition = useNotionEdition()

  const confirmationCancelModal = useConfirmationCancelModal()

  useOnPageOpened(() => updateFormNotion(notionEdition.getInitialNotion()))
  useOnPageClosed(() => notionEdition.handleCompleteEdition())

  function saveNotionHandler() {
    const saved = notionEdition.saveNotion(notion)

    if (saved) navigateNotionDisplayPage(saved.id)
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

      <FloatingActions>
        <FloatingAction onClick={confirmationCancelModal.open}>
          <Icon name='rotate-ccw' size='l' />
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
