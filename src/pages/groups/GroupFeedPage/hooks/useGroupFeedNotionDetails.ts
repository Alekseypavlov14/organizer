import type { NotionEntity } from '@/entities/notions'
import type { Nullable } from '@/shared/types/nullable'
import { useGroupFeedModalStack, useNotionDeleteConfirmationModal, useNotionDetailsSelectActionModal } from '../modals.feature'
import { groupsSelector, useGroupActions, useGroupsStore, type GroupEntity } from '@/entities/groups'
import { useGroupSelectionExplorer, useGroupSelectionModal } from '@/widgets/groups/GroupSelectionModal'
import { useGroupSelectionDynamicAction } from '../selection.action'
import { useGroupFeedGroupExplorer } from '../group.explorer'
import { useGroupFeedNotionFeed } from '../notion.feed'
import { useNotionEdition } from '@/features/notions/edition'
import { useNavigation } from '@/app/navigation'
import { useGroupMove } from '@/features/groups/move'
import { isNull } from '@/shared/utils/validation'

export function useGroupFeedNotionDetails() {
  const navigation = useNavigation()
  const groupActions = useGroupActions()
  const groups = useGroupsStore(groupsSelector)

  const groupFeedExplorer = useGroupFeedGroupExplorer()
  const currentGroupId = groupFeedExplorer.store.currentGroup?.id ?? null

  const groupMove = useGroupMove()
  const notionFeed = useGroupFeedNotionFeed()
  const notionEdition = useNotionEdition()
  
  const groupMoveSelectionExplorer = useGroupSelectionExplorer()
  const groupSelectionDynamicAction = useGroupSelectionDynamicAction()
  
  const groupFeedModalStack = useGroupFeedModalStack()
  const notionDetailsSelectActionModal = useNotionDetailsSelectActionModal()
  const notionDeleteConfirmationModal = useNotionDeleteConfirmationModal()
  const groupMoveSelectionModal = useGroupSelectionModal()

  function openNotionDetailsSelectActionModal(notion: NotionEntity) {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(notionDetailsSelectActionModal)

    notionFeed.updateSelectedNotion(notion)
  }

  function openNotionMoveModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupMoveSelectionModal)
    
    groupMoveSelectionExplorer.load(groups)
    groupMoveSelectionExplorer.navigateGroup(groupFeedExplorer.store.currentGroup)

    groupSelectionDynamicAction.updateCallback(moveNotionHandler)
  }

  function openNotionDeleteModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(notionDeleteConfirmationModal)
  }

  function moveNotionHandler(group: Nullable<GroupEntity>) {
    if (!notionFeed.store.selectedNotion) return null

    const toGroupId = group?.id ?? null
    const notionId = notionFeed.store.selectedNotion.id

    const moved = groupMove.moveNotionById(currentGroupId, toGroupId, notionId)
    if (!moved) return
    
    const parentGroupId = group?.id ?? null
    if (isNull(parentGroupId)) navigation.navigateGroupFeedRootPage()
    else navigation.navigateGroupFeedGroupPage(parentGroupId)
  }

  function deleteNotionHandler() {
    if (!notionFeed.store.selectedNotion) return null

    const deleted = notionEdition.deleteNotionById(notionFeed.store.selectedNotion.id)
    if (deleted && !isNull(currentGroupId)) groupActions.removeNotionFromGroupById(currentGroupId, deleted.id)

    const children = groupActions.getGroupNotionsById(currentGroupId) ?? []
    notionFeed.updateNotions(children)
  }

  return ({
    openNotionDetailsSelectActionModal,

    openNotionMoveModal,
    openNotionDeleteModal,

    moveNotionHandler,
    deleteNotionHandler,
  })
}
