import { useGroupCreationSelectActionModal, useGroupFeedModalStack } from '../modals.feature'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { useGroupFeedGroupExplorer } from '../group.explorer'
import { useGroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { useGroupFeedGroupFeed } from '../group.feed'
import { useColorSelection } from '@/features/colors/selection'
import { useNotionEdition } from '@/features/notions/edition'
import { useGroupEdition } from '@/features/groups/edition'
import { useNavigation } from '@/app/navigation'
import { useGroupForm } from '@/features/groups/form'

export function useGroupFeedCreation() {
  const navigation = useNavigation()
  const groupActions = useGroupActions()

  const groupFeedExplorer = useGroupFeedGroupExplorer()
  const currentGroupId = groupFeedExplorer.store.currentGroup?.id ?? null

  const groupFeed = useGroupFeedGroupFeed()
  const groupEdition = useGroupEdition()
  const notionEdition = useNotionEdition()
  const groupForm = useGroupForm()
  const colorSelection = useColorSelection()

  const groupFeedModalStack = useGroupFeedModalStack()
  const groupCreationSelectActionModal = useGroupCreationSelectActionModal()
  const groupCreationModal = useGroupCreationModal()

  function openGroupCreationSelectActionModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupCreationSelectActionModal)
  }

  function openGroupCreationModal() {
    groupForm.updateFormGroup(groupEdition.getInitialGroup())
    groupForm.updateGroupParentId(currentGroupId)
    
    colorSelection.resetColor()
    
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupCreationModal)
  }

  function openNotionCreationPage() {
    navigation.navigateNotionCreationPage()
    
    notionEdition.updateOnNotionSaveCallback(notion => {
      if (!currentGroupId) return

      groupActions.addNotionToGroupById(currentGroupId, notion.id)
    })

    groupFeedModalStack.close()
    groupFeedModalStack.clear()
  }

  function createGroupHandler(group: GroupEntity) {
    groupFeed.updateGroups(groupActions.getGroupChildrenById(group.parentId) ?? [])
  }

  return ({
    openGroupCreationSelectActionModal,

    openGroupCreationModal,
    openNotionCreationPage,

    createGroupHandler,
  })
}
