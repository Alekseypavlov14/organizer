import { Flex, flexAlignCenter, flexDirectionVertical, flexGapLarge, flexGapSmall, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { Button, buttonVariantDanger, buttonVariantPrimary } from '@/shared/components/Button'
import { NotionContentForm, useNotionForm } from '@/features/notions/form'
import { useNotionByIdFromQueryParams } from '@/features/notions/shared'
import { useEditionActions } from '@/features/notions/edition'
import { useNotifications } from '@/app/notifications'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { Main } from '@/shared/components/Main'

export function NotionEditionPage() {
  const { createErrorNotification } = useNotifications()
  const { navigateBack } = useNavigation()

  const { notion, updateFormNotion } = useNotionForm()
  const { saveNotion, deleteNotion, cancel } = useEditionActions()

  useNotionByIdFromQueryParams({
    success: (notion) => updateFormNotion(notion),
    failure: () => {
      createErrorNotification('The notion is not found')
      navigateBack()
    }
  })

  return (
    <PageLayout>
      <Main>
        <Container stretch>
          <Flex 
            direction={flexDirectionVertical}
            gap={flexGapLarge}
          >
            <NotionContentForm />
  
            <Flex
              justify={flexJustifySpaceBetween}
              align={flexAlignCenter}
            >
              <Flex gap={flexGapSmall}>
                <Button onClick={cancel}>Cancel</Button>
  
                <Button 
                  onClick={() => deleteNotion(notion)}
                  variant={buttonVariantDanger}
                >
                  Delete
                </Button>
              </Flex>
  
              <Flex gap={flexGapSmall}>
                <Button
                  onClick={() => saveNotion(notion)}
                  variant={buttonVariantPrimary}
                >
                  Save
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Main>
    </PageLayout>
  )
}
