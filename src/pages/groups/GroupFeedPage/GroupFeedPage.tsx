import type { ColorModel } from '@/entities/shared'
import { useGroupDeleteConfirmationModal, useGroupEditionSelectActionModal, useGroupFeedModalStack } from './modals.feature'
import { GroupSelectionModal, useGroupSelectionExplorer, useGroupSelectionModal } from '@/widgets/groups/GroupSelectionModal'
import { ColorSelectionModal, useColorSelection, useColorSelectionModal } from '@/features/colors/selection'
import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { ConfirmationModal, SelectActionModal, SelectActionModalOption } from '@/features/shared/modals'
import { GroupExplorerFeed, useGroupExplorerFeedExplorer } from '@/widgets/groups/GroupExplorerFeed'
import { GroupCreationModal, useGroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { useGroupMove, useGroupMoveCandidates } from '@/features/groups/move'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { ColorAddModal, useColorAddModal } from '@/features/colors/add'
import { useGroupExplorerGroups } from '@/features/groups/explorer'
import { buttonVariantDanger } from '@/shared/components/Button'
import { useGroupEdition } from '@/features/groups/edition'
import { useGroupForm } from '@/features/groups/form'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { isNull } from '@/shared/utils/validation'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'
import { Text } from '@/shared/components/Text'

export function GroupFeedPage() {
  const groupActions = useGroupActions()

  const groupExplorerFeedExplorer = useGroupExplorerFeedExplorer()
  const currentGroupId = groupExplorerFeedExplorer.store.currentGroup?.id ?? null

  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()
  const groupMove = useGroupMove()

  const colorSelection = useColorSelection()

  const groupFeedModalStack = useGroupFeedModalStack()

  const groupCreationModal = useGroupCreationModal()
  const colorSelectionModal = useColorSelectionModal()
  const colorAddModal = useColorAddModal()

  const groupEditionSelectActionModal = useGroupEditionSelectActionModal()
  const groupMoveSelectionModal = useGroupSelectionModal()
  const groupDeleteConfirmationModal = useGroupDeleteConfirmationModal()
  
  const groupMoveSelectionExplorer = useGroupSelectionExplorer()
  const groupMoveCandidates = useGroupMoveCandidates(currentGroupId) 
  useGroupExplorerGroups(groupMoveSelectionExplorer, groupMoveCandidates)

  function openGroupCreationModal() {
    groupForm.updateFormGroup(groupEdition.getInitialGroup())
    groupForm.updateGroupParentId(currentGroupId)
    
    colorSelection.resetColor()
    
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupCreationModal)
  }
  function openColorSelectionModal() {
    groupFeedModalStack.open(colorSelectionModal)
  }
  function openColorAddModal() {
    groupFeedModalStack.open(colorAddModal)
  }

  function selectColor(color: ColorModel) {
    groupForm.updateGroupColor(color)
    groupFeedModalStack.openPrevious()
  }
  function addColor(color: ColorModel) {
    colorSelection.updateColor(color)
    groupFeedModalStack.openPrevious()
  }

  function openGroupEditionSelectActionModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupEditionSelectActionModal)
  }
  function openGroupMoveSelectionModal() {
    groupFeedModalStack.open(groupMoveSelectionModal)
  }
  function openGroupDeleteModal() {
    groupFeedModalStack.open(groupDeleteConfirmationModal)
  }

  function moveGroupHandler(group: GroupEntity) {
    if (!groupExplorerFeedExplorer.store.currentGroup) return

    const moved = groupMove.moveGroupById(groupExplorerFeedExplorer.store.currentGroup.id, group.id)
    if (!moved) return

    groupFeedModalStack.clear()

    if (isNull(moved.parentId)) return groupExplorerFeedExplorer.navigateRoot()

    const parent = groupActions.getGroupById(moved.parentId)
    if (parent) return groupExplorerFeedExplorer.selectGroup(parent)
  }
  function deleteGroupHandler() {
    if (isNull(currentGroupId)) return 

    const deleted = groupEdition.deleteGroupById(currentGroupId)
    if (!deleted) return 
    
    groupFeedModalStack.clear()
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
      
      <GroupCreationModal 
        onColorClick={openColorSelectionModal} 
      />
      <ColorSelectionModal 
        onSelect={selectColor}
        onAddNew={openColorAddModal} 
        onCancel={groupFeedModalStack.openPrevious}
      />
      <ColorAddModal 
        onAdd={addColor} 
        onCancel={groupFeedModalStack.openPrevious}
      />

      <SelectActionModal modal={groupEditionSelectActionModal}> 
        <Flex
          direction={flexDirectionVertical}
          gap={flexGapSmall}
        >
          <SelectActionModalOption 
            onClick={openGroupMoveSelectionModal}
          >
            <Text>Move</Text>
          </SelectActionModalOption>
  
          <SelectActionModalOption>
            <Text>Edit</Text>
          </SelectActionModalOption>
  
          <SelectActionModalOption 
            variant={buttonVariantDanger}
            onClick={openGroupDeleteModal}
          >
            <Text>Delete</Text>
          </SelectActionModalOption>
        </Flex>
      </SelectActionModal>

      <GroupSelectionModal 
        onSelect={moveGroupHandler}
        onCancel={groupFeedModalStack.openPrevious}
      />
      <ConfirmationModal 
        title='Do you want to delete this group?'
        modal={groupDeleteConfirmationModal}
        onConfirm={deleteGroupHandler}
        onCancel={groupFeedModalStack.openPrevious}
        variant={buttonVariantDanger}
      />

      <FloatingActions>
        {groupExplorerFeedExplorer.store.currentGroup ? (
          <FloatingAction onClick={openGroupEditionSelectActionModal}>
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
