import type { GroupEntity } from '@/entities/groups'
import type { Nullable } from '@/shared/types/nullable'
import { useGroupDeleteConfirmationModal, useGroupEditionSelectActionModal, useGroupFeedModalStack } from '../modals.feature'
import { useGroupSelectionExplorer, useGroupSelectionModal } from '@/widgets/groups/GroupSelectionModal'
import { useGroupSelectionDynamicAction } from '../selection.action'
import { useGroupFeedGroupExplorer } from '../group.explorer'
import { useGroupEditionModal } from '@/widgets/groups/GroupEditionModal'
import { useColorSelection } from '@/features/colors/selection'
import { useGroupEdition } from '@/features/groups/edition'
import { useNavigation } from '@/app/navigation'
import { useGroupForm } from '@/features/groups/form'
import { useGroupMove } from '@/features/groups/move'
import { isNull } from '@/shared/utils/validation'

export function useGroupFeedEdition() {
  const navigation = useNavigation()
  
  const groupFeedExplorer = useGroupFeedGroupExplorer()
  const currentGroupId = groupFeedExplorer.store.currentGroup?.id ?? null

  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()
  const colorSelection = useColorSelection()
  const groupMove = useGroupMove()

  const groupMoveSelectionExplorer = useGroupSelectionExplorer()
  const groupSelectionDynamicAction = useGroupSelectionDynamicAction()

  const groupFeedModalStack = useGroupFeedModalStack()
  const groupEditionSelectActionModal = useGroupEditionSelectActionModal()
  const groupEditionModal = useGroupEditionModal()
  const groupMoveSelectionModal = useGroupSelectionModal()
  const groupDeleteConfirmationModal = useGroupDeleteConfirmationModal()

  function openGroupEditionSelectActionModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupEditionSelectActionModal)
  }

  function openGroupEditionModal() {
    if (!groupFeedExplorer.store.currentGroup) return

    groupForm.updateFormGroup(groupFeedExplorer.store.currentGroup)
    colorSelection.resetColor()
    
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupEditionModal)
  }

  function openGroupMoveModal() {
    if (!groupFeedExplorer.store.currentGroup) return

    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupMoveSelectionModal)

    const candidates = groupMove.getGroupMoveCandidatesById(currentGroupId)
    groupMoveSelectionExplorer.load(candidates)

    const parentId = groupFeedExplorer.store.currentGroup.parentId
    groupMoveSelectionExplorer.navigateGroupById(parentId)

    groupSelectionDynamicAction.updateCallback(moveGroupHandler)
  }

  function openGroupDeleteModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupDeleteConfirmationModal)
  }

  function editGroupHandler(group: GroupEntity) {
    groupFeedExplorer.navigateGroup(group)
  }

  function moveGroupHandler(group: Nullable<GroupEntity>) {
    if (!groupFeedExplorer.store.currentGroup) return

    const parentGroupId = group?.id ?? null
    const moved = groupMove.moveGroupById(groupFeedExplorer.store.currentGroup.id, parentGroupId)
    if (!moved) return

    groupFeedModalStack.clear()

    if (isNull(moved.parentId)) navigation.navigateGroupFeedRootPage()
    else navigation.navigateGroupFeedGroupPage(moved.parentId)
  }

  function deleteGroupHandler() {
    if (isNull(currentGroupId)) return 

    const deleted = groupEdition.deleteGroupById(currentGroupId)
    if (!deleted) return 
    
    groupFeedModalStack.clear()

    if (isNull(deleted.parentId)) navigation.navigateGroupFeedRootPage()
    else navigation.navigateGroupFeedGroupPage(deleted.parentId)
  }

  return ({
    openGroupEditionSelectActionModal,

    openGroupEditionModal,
    openGroupMoveModal,
    openGroupDeleteModal,

    editGroupHandler,
    moveGroupHandler,
    deleteGroupHandler,
  })
}
