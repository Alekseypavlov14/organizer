import type { ColorModel } from '@/entities/shared'
import { useGroupDeleteConfirmationModal, useGroupEditionSelectActionModal } from './modals.feature'
import { ColorSelectionModal, useColorSelection, useColorSelectionModal } from '@/features/colors/selection'
import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { ConfirmationModal, SelectActionModal, SelectActionModalOption } from '@/features/shared/modals'
import { GroupExplorerFeed, useGroupExplorerFeedExplorer } from '@/widgets/groups/GroupExplorerFeed'
import { GroupCreationModal, useGroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { ColorAddModal, useColorAddModal } from '@/features/colors/add'
import { buttonVariantDanger } from '@/shared/components/Button'
import { useGroupEdition } from '@/features/groups/edition'
import { useGroupForm } from '@/features/groups/form'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'
import { Text } from '@/shared/components/Text'

export function GroupFeedPage() {
  const groupExplorerFeedExplorer = useGroupExplorerFeedExplorer()

  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()
  const colorSelection = useColorSelection()

  const groupCreationModal = useGroupCreationModal()
  const colorSelectionModal = useColorSelectionModal()
  const colorAddModal = useColorAddModal()

  const groupEditionSelectActionModal = useGroupEditionSelectActionModal()
  const groupDeleteConfirmationModal = useGroupDeleteConfirmationModal()

  function openGroupCreationModal() {
    groupForm.updateFormGroup(groupEdition.getInitialGroup())

    const currentGroupId = groupExplorerFeedExplorer.store.currentGroup?.id ?? null
    groupForm.updateGroupParentId(currentGroupId)

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
  function addColor(color: ColorModel) {
    colorSelection.updateColor(color)
    colorSelectionModal.open()
  }

  function onGroupDeleteClick() {
    groupEditionSelectActionModal.close()
    groupDeleteConfirmationModal.open()
  }
  function deleteGroupHandler() {
    const currentGroupId = groupExplorerFeedExplorer.store.currentGroup?.id ?? null
    if (!currentGroupId) return 

    const deleted = groupEdition.deleteGroupById(currentGroupId)
    if (!deleted) return 
    
    groupDeleteConfirmationModal.close()
    groupExplorerFeedExplorer.navigateParent()
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
        onCancel={groupCreationModal.open}
      />
      <ColorAddModal 
        onAdd={addColor} 
        onCancel={colorSelectionModal.open}
      />

      <SelectActionModal modal={groupEditionSelectActionModal}> 
        <Flex
          direction={flexDirectionVertical}
          gap={flexGapSmall}
        >
          <SelectActionModalOption>
            <Text>Move</Text>
          </SelectActionModalOption>
  
          <SelectActionModalOption>
            <Text>Edit</Text>
          </SelectActionModalOption>
  
          <SelectActionModalOption 
            variant={buttonVariantDanger}
            onClick={onGroupDeleteClick}
          >
            <Text>Delete</Text>
          </SelectActionModalOption>
        </Flex>
      </SelectActionModal>

      <ConfirmationModal 
        title='Do you want to delete this group?'
        modal={groupDeleteConfirmationModal}
        onConfirm={deleteGroupHandler}
        onCancel={groupEditionSelectActionModal.open}
        variant={buttonVariantDanger}
      />

      <FloatingActions>
        {groupExplorerFeedExplorer.store.currentGroup ? (
          <FloatingAction onClick={groupEditionSelectActionModal.open}>
            <Icon name='pen' size='l' />
          </FloatingAction>
        ) : null}

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
