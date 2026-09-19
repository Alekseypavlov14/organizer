import { useGroupCreationSelectActionModal, useGroupFeedModalStack } from '../modals.feature'
import { useGroupFeedGroupExplorer } from '../group.explorer'
import { useGroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { useColorSelection } from '@/features/colors/selection'
import { useNotionEdition } from '@/features/notions/edition'
import { useGroupEdition } from '@/features/groups/edition'
import { useGroupActions } from '@/entities/groups'
import { useNavigation } from '@/app/navigation'
import { useGroupForm } from '@/features/groups/form'

export function useGroupFeedCreation() {
  const navigation = useNavigation()
  const groupActions = useGroupActions()

  const groupFeedExplorer = useGroupFeedGroupExplorer()
  const currentGroupId = groupFeedExplorer.store.currentGroup?.id ?? null

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

  return ({
    openGroupCreationSelectActionModal,

    openGroupCreationModal,
    openNotionCreationPage,
  })
}
