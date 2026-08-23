import { createInitialNotion, NotionEditionActions, useEditionActions } from '@/features/notions/edition'
import { Flex, flexDirectionVertical, flexGapLarge } from '@/shared/components/Flex'
import { useNotionForm, NotionContentForm } from '@/features/notions/form'
import { useOnPageClosed } from '@/shared/hooks/useOnPageClosed'
import { useOnPageOpened } from '@/shared/hooks/useOnPageOpened'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { Main } from '@/shared/components/Main'

export function NotionCreationPage() {
  const { navigateHomePage } = useNavigation()

  const { notion, updateFormNotion } = useNotionForm()
  const { cancel } = useEditionActions()

  useOnPageOpened(() => {
    updateFormNotion(createInitialNotion())
  })

  useOnPageClosed(() => cancel())

  return (
    <PageLayout>
      <Main>
        <Container stretch>
          <Flex 
            direction={flexDirectionVertical}
            gap={flexGapLarge}
          >
            <NotionContentForm />
  
            <NotionEditionActions 
              notion={notion} 
              onSave={navigateHomePage}
              onDelete={navigateHomePage}
              onCancel={navigateHomePage}  
            />
          </Flex>
        </Container>
      </Main>
    </PageLayout>
  )
}
