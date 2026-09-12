import { FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingAction'
import { useNotionForm, NotionContentForm } from '@/features/notions/form'
import { useNotionEdition } from '@/features/notions/edition'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/AppHeader'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function NotionCreationPage() {
  const { navigatePreviousPage } = useNavigation()
  const { notion, updateFormNotion } = useNotionForm()

  const notionEdition = useNotionEdition()

  useOnPageOpened(() => {
    updateFormNotion(notionEdition.getInitialNotion())
  })

  useOnPageClosed(() => notionEdition.handleCompleteEdition())

  function saveNotionHandler() {
    notionEdition.saveNotion(notion)
    navigatePreviousPage()
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
          variant={floatingActionVariantPrimary}
          onClick={saveNotionHandler}
        >
          <Icon name='check' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
