import type { ColorModel } from '@/entities/shared'
import { GroupSelectionModal, useGroupSelectionExplorer, useGroupSelectionModal } from '@/widgets/groups/GroupSelectionModal'
import { useGroupDeleteConfirmationModal, useGroupEditionSelectActionModal } from './modals.feature'
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

  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()
  const groupMove = useGroupMove()

  const colorSelection = useColorSelection()

  const groupCreationModal = useGroupCreationModal()
  const colorSelectionModal = useColorSelectionModal()
  const colorAddModal = useColorAddModal()

  const groupEditionSelectActionModal = useGroupEditionSelectActionModal()
  const groupMoveSelectionModal = useGroupSelectionModal()
  const groupDeleteConfirmationModal = useGroupDeleteConfirmationModal()
  
  const groupMoveSelection = useGroupSelectionExplorer()
  const groupMoveCandidates = useGroupMoveCandidates(groupExplorerFeedExplorer.store.currentGroup?.id ?? null) 
  useGroupExplorerGroups(groupMoveSelection, groupMoveCandidates)

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

  function onGroupMoveClick() {
    groupEditionSelectActionModal.close()
    groupMoveSelectionModal.open()
  }
  function moveGroupHandler(group: GroupEntity) {
    if (!groupExplorerFeedExplorer.store.currentGroup) return

    const moved = groupMove.moveGroupById(groupExplorerFeedExplorer.store.currentGroup.id, group.id)
    if (!moved) return

    if (isNull(moved.parentId)) return groupExplorerFeedExplorer.navigateRoot()

    const parent = groupActions.getGroupById(moved.parentId)
    if (parent) groupExplorerFeedExplorer.selectGroup(parent)
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
          <SelectActionModalOption onClick={onGroupMoveClick}>
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

      <GroupSelectionModal 
        onSelect={moveGroupHandler}
        onCancel={groupEditionSelectActionModal.open}
      />
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
