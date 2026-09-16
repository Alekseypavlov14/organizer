import type { ColorModel } from '@/entities/shared'
import { ColorSelectionModal, useColorSelection, useColorSelectionModal } from '@/features/colors/selection'
import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { GroupCreationModal, useGroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { ColorAddModal, useColorAddModal } from '@/features/colors/add'
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

  const colorSelection = useColorSelection()

  const groupCreationModal = useGroupCreationModal()
  const colorSelectionModal = useColorSelectionModal()
  const colorAddModal = useColorAddModal()

  function openGroupCreationModal() {
    groupForm.updateFormGroup(groupEdition.getInitialGroup())
    colorSelection.resetColor()

    groupCreationModal.open()
  }

  function openColorSelectionModal() {
    groupCreationModal.close()
    colorSelectionModal.open()
  }

  function openColorAddModal() {
    colorSelectionModal.close()
    colorAddModal.open()
  }

  function selectColor(color: ColorModel) {
    groupForm.updateGroupColor(color)
    groupCreationModal.open()
  }

  function cancelColorSelection() {
    groupCreationModal.open()
  }

  function addColor(color: ColorModel) {
    colorSelection.updateColor(color)
    colorSelectionModal.open()
  }

  function cancelColorAddition() {
    colorSelectionModal.open()
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
      <ColorSelectionModal 
        onSelect={selectColor}
        onAddNew={openColorAddModal} 
        onCancel={cancelColorSelection}
      />
      <ColorAddModal 
        onAdd={addColor} 
        onCancel={cancelColorAddition}
      />

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
