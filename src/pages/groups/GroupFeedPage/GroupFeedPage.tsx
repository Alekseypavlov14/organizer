import type { ColorModel } from '@/entities/shared'
import type { Nullable } from '@/shared/types/nullable'
import { useGroupCreationSelectActionModal, useGroupDeleteConfirmationModal, useGroupEditionSelectActionModal, useGroupFeedModalStack } from './modals.feature'
import { GroupSelectionModal, useGroupSelectionExplorer, useGroupSelectionModal } from '@/widgets/groups/GroupSelectionModal'
import { ColorSelectionModal, useColorSelection, useColorSelectionModal } from '@/features/colors/selection'
import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { ConfirmationModal, SelectActionModal, SelectActionModalOption } from '@/features/shared/modals'
import { GroupExplorerFeed, useGroupExplorerFeedExplorer } from '@/widgets/groups/GroupExplorerFeed'
import { GroupCreationModal, useGroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { GroupEditionModal, useGroupEditionModal } from '@/widgets/groups/GroupEditionModal'
import { useGroupMove, useGroupMoveCandidates } from '@/features/groups/move'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { ColorAddModal, useColorAddModal } from '@/features/colors/add'
import { useGroupExplorerGroups } from '@/features/groups/explorer'
import { buttonVariantDanger } from '@/shared/components/Button'
import { useNotionEdition } from '@/features/notions/edition'
import { useGroupEdition } from '@/features/groups/edition'
import { useNavigation } from '@/app/navigation'
import { useGroupForm } from '@/features/groups/form'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { isNull } from '@/shared/utils/validation'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'
import { Text } from '@/shared/components/Text'

export function GroupFeedPage() {
  const navigation = useNavigation()
  const groupActions = useGroupActions()

  const groupExplorerFeedExplorer = useGroupExplorerFeedExplorer()
  const currentGroupId = groupExplorerFeedExplorer.store.currentGroup?.id ?? null

  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()
  const groupMove = useGroupMove()

  const notionEdition = useNotionEdition()
  const colorSelection = useColorSelection()

  const groupFeedModalStack = useGroupFeedModalStack()

  const groupCreationSelectActionModal = useGroupCreationSelectActionModal()
  const groupEditionSelectActionModal = useGroupEditionSelectActionModal()

  const groupCreationModal = useGroupCreationModal()
  const groupEditionModal = useGroupEditionModal()
  const groupMoveSelectionModal = useGroupSelectionModal()
  const groupDeleteConfirmationModal = useGroupDeleteConfirmationModal()
  const colorSelectionModal = useColorSelectionModal()
  const colorAddModal = useColorAddModal()

  const groupMoveSelectionExplorer = useGroupSelectionExplorer()
  const groupMoveCandidates = useGroupMoveCandidates(currentGroupId) 
  useGroupExplorerGroups(groupMoveSelectionExplorer, groupMoveCandidates)

  function openGroupCreationSelectActionModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupCreationSelectActionModal)
  }
  function openGroupEditionSelectActionModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupEditionSelectActionModal)
  }

  function openGroupCreationModal() {
    groupForm.updateFormGroup(groupEdition.getInitialGroup())
    groupForm.updateGroupParentId(currentGroupId)
    
    colorSelection.resetColor()
    
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupCreationModal)
  }
  function openGroupEditionModal() {
    if (!groupExplorerFeedExplorer.store.currentGroup) return

    groupForm.updateFormGroup(groupExplorerFeedExplorer.store.currentGroup)

    colorSelection.resetColor()
    
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupEditionModal)
  }
  function openGroupMoveSelectionModal() {
    if (!groupExplorerFeedExplorer.store.currentGroup) return

    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupMoveSelectionModal)

    const parentId = groupExplorerFeedExplorer.store.currentGroup.parentId
    if (isNull(parentId)) return groupMoveSelectionExplorer.navigateRoot()

    const parent = groupActions.getGroupById(parentId)
    if (parent) return groupMoveSelectionExplorer.selectGroup(parent)
    
    groupMoveSelectionExplorer.navigateRoot()
  }
  function openGroupDeleteModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupDeleteConfirmationModal)
  }
  function openNotionCreationPage() {
    navigation.navigateNotionCreationPage()
    
    notionEdition.updateOnNotionSaveCallback(notion => {
      if (!currentGroupId) return

      groupActions.addNotionToGroupById(currentGroupId, notion.id)
    })
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

  function moveGroupHandler(group: Nullable<GroupEntity>) {
    if (!groupExplorerFeedExplorer.store.currentGroup) return

    const parentGroupId = group?.id ?? null

    const moved = groupMove.moveGroupById(groupExplorerFeedExplorer.store.currentGroup.id, parentGroupId)
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

      <SelectActionModal modal={groupEditionSelectActionModal}> 
        <Flex
          direction={flexDirectionVertical}
          gap={flexGapSmall}
        >
          <SelectActionModalOption onClick={openGroupEditionModal}>
            <Text>Edit</Text>
          </SelectActionModalOption>
  
          <SelectActionModalOption onClick={openGroupMoveSelectionModal}>
            <Text>Move</Text>
          </SelectActionModalOption>
  
          <SelectActionModalOption 
            variant={buttonVariantDanger}
            onClick={openGroupDeleteModal}
          >
            <Text>Delete</Text>
          </SelectActionModalOption>
        </Flex>
      </SelectActionModal>

      <SelectActionModal modal={groupCreationSelectActionModal}>
        <Flex
          direction={flexDirectionVertical}
          gap={flexGapSmall}
        >
          <SelectActionModalOption onClick={openGroupCreationModal}>
            <Text>Group</Text>
          </SelectActionModalOption>

          <SelectActionModalOption onClick={openNotionCreationPage}>
            <Text>Notion</Text>
          </SelectActionModalOption>
        </Flex>
      </SelectActionModal>
      
      <GroupCreationModal 
        onColorClick={openColorSelectionModal} 
      />
      <GroupEditionModal 
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

      <GroupSelectionModal 
        onSelect={moveGroupHandler}
        onCancel={groupFeedModalStack.openPrevious}
        allowRoot
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
          onClick={openGroupCreationSelectActionModal}
          variant={floatingActionVariantPrimary}
        >
          <Icon name='plus' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
