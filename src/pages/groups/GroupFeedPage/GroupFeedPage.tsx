import type { ColorModel } from '@/entities/shared'
import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { ColorSelectionModal, useColorSelectionModal } from '@/features/colors/selection'
import { GroupCreationModal, useGroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { GroupExplorerFeed } from '@/widgets/groups/GroupExplorerFeed'
import { useGroupEdition } from '@/features/groups/edition'
import { useGroupForm } from '@/features/groups/form'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'

export function GroupFeedPage() {
  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()

  const groupCreationModal = useGroupCreationModal()
  const colorSelectionModal = useColorSelectionModal()

  function openGroupCreationModal() {
    groupForm.updateFormGroup(groupEdition.getInitialGroup())
    groupCreationModal.open()
  }

  function openColorSelectionModal() {
    groupCreationModal.close()
    colorSelectionModal.open()
  }

  function selectColor(color: ColorModel) {
    groupForm.updateGroupColor(color)
    groupCreationModal.open()
  }

  return (
    <PageLayout>
      <AppHeader />

      <Main>
        <Container stretch>
          <GroupExplorerFeed />
        </Container>
      </Main>
      
      <GroupCreationModal onColorClick={openColorSelectionModal} />
      <ColorSelectionModal onSelect={selectColor} />

      <FloatingActions>
        <FloatingAction 
          variant={floatingActionVariantPrimary}
          onClick={openGroupCreationModal}
        >
          <Icon name='plus' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
