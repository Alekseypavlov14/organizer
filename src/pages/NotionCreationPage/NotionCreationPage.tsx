import { FloatingAction, floatingActionVariantDanger, floatingActionVariantPrimary } from '@/shared/components/FloatingAction'
import { useNotionForm, NotionContentForm } from '@/features/notions/form'
import { useNotionEdition } from '@/features/notions/edition'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function NotionCreationPage() {
  const { navigateHomePage } = useNavigation()

  const { notion, updateFormNotion } = useNotionForm()
  const notionEdition = useNotionEdition()

  useOnPageOpened(() => {
    updateFormNotion(notionEdition.getInitialNotion())
  })

  useOnPageClosed(() => notionEdition.cancel())

  function saveNotionHandler() {
    notionEdition.saveNotion(notion)
    navigateHomePage()
  }

  function deleteNotionHandler() {
    notionEdition.deleteNotionById(notion.id)
    navigateHomePage()
  }

  function cancelHandler() {
    notionEdition.cancel()
    navigateHomePage()
  }

  return (
    <PageLayout>
      <Main>
        <Container stretch>
          <NotionContentForm />
        </Container>
      </Main>

      <FloatingActions>
        <FloatingAction onClick={cancelHandler}>
          <Icon name='rotate-cw' size='l' />
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
