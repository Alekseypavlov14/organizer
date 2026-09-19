import type { NotionEntity } from '@/entities/notions'
import type { ColorModel } from '@/entities/shared'
import type { Nullable } from '@/shared/types/nullable'
import { useGroupCreationSelectActionModal, useGroupDeleteConfirmationModal, useGroupEditionSelectActionModal, useGroupFeedModalStack, useNotionDeleteConfirmationModal, useNotionDetailsSelectActionModal } from './modals.feature'
import { GroupExplorerFeed, useGroupExplorerFeedExplorer, useGroupExplorerFeedNotionFeed } from '@/widgets/groups/GroupExplorerFeed'
import { GroupSelectionModal, useGroupSelectionExplorer, useGroupSelectionModal } from '@/widgets/groups/GroupSelectionModal'
import { groupsSelector, useGroupActions, useGroupsStore, type GroupEntity } from '@/entities/groups'
import { ColorSelectionModal, useColorSelection, useColorSelectionModal } from '@/features/colors/selection'
import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { ConfirmationModal, SelectActionModal, SelectActionModalOption } from '@/features/shared/modals'
import { GroupCreationModal, useGroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { GroupEditionModal, useGroupEditionModal } from '@/widgets/groups/GroupEditionModal'
import { ColorAddModal, useColorAddModal } from '@/features/colors/add'
import { buttonVariantDanger } from '@/shared/components/Button'
import { useDynamicAction } from '@/shared/hooks/useDynamicAction'
import { useNotionEdition } from '@/features/notions/edition'
import { useGroupEdition } from '@/features/groups/edition'
import { useNavigation } from '@/app/navigation'
import { useGroupMove } from '@/features/groups/move'
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
  const groupExplorerFeedNotionFeed = useGroupExplorerFeedNotionFeed()

  const currentGroupId = groupExplorerFeedExplorer.store.currentGroup?.id ?? null

  const groups = useGroupsStore(groupsSelector)
  const groupForm = useGroupForm()
  const groupEdition = useGroupEdition()
  const groupMove = useGroupMove()

  const notionEdition = useNotionEdition()
  const colorSelection = useColorSelection()

  const groupFeedModalStack = useGroupFeedModalStack()

  const groupCreationSelectActionModal = useGroupCreationSelectActionModal()
  const groupEditionSelectActionModal = useGroupEditionSelectActionModal()
  const notionDetailsSelectActionModal = useNotionDetailsSelectActionModal()

  const groupCreationModal = useGroupCreationModal()
  const groupEditionModal = useGroupEditionModal()
  const groupMoveSelectionModal = useGroupSelectionModal()
  const groupDeleteConfirmationModal = useGroupDeleteConfirmationModal()
  const notionDeleteConfirmationModal = useNotionDeleteConfirmationModal()
  const colorSelectionModal = useColorSelectionModal()
  const colorAddModal = useColorAddModal()

  const groupMoveSelectionExplorer = useGroupSelectionExplorer()
  const groupMoveSelectionDynamicAction = useDynamicAction(moveGroupHandler)

  function openGroupCreationSelectActionModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupCreationSelectActionModal)
  }
  function openGroupEditionSelectActionModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupEditionSelectActionModal)
  }
  function openNotionDetailsSelectActionModal(notion: NotionEntity) {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(notionDetailsSelectActionModal)

    groupExplorerFeedNotionFeed.updateSelectedNotion(notion)
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
  function openGroupMoveModal() {
    if (!groupExplorerFeedExplorer.store.currentGroup) return

    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupMoveSelectionModal)

    groupMoveSelectionDynamicAction.updateAction(moveGroupHandler)

    const candidates = groupMove.getGroupMoveCandidatesById(currentGroupId)
    groupMoveSelectionExplorer.load(candidates)

    const parentId = groupExplorerFeedExplorer.store.currentGroup.parentId
    groupExplorerFeedExplorer.navigateGroupById(parentId)
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
  function openNotionMoveModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(groupMoveSelectionModal)
    
    groupMoveSelectionDynamicAction.updateAction(moveNotionHandler)

    groupMoveSelectionExplorer.load(groups)
    groupMoveSelectionExplorer.navigateGroup(groupExplorerFeedExplorer.store.currentGroup)
  }
  function openNotionDeleteModal() {
    groupFeedModalStack.clear()
    groupFeedModalStack.open(notionDeleteConfirmationModal)
  }

  function openColorSelectionModal() {
    groupFeedModalStack.open(colorSelectionModal)
  }
  function openColorAddModal() {
    groupFeedModalStack.open(colorAddModal)
  }

  function editGroupHandler(group: GroupEntity) {
    groupExplorerFeedExplorer.navigateGroup(group)
  }
  function moveGroupHandler(group: Nullable<GroupEntity>) {
    if (!groupExplorerFeedExplorer.store.currentGroup) return

    const parentGroupId = group?.id ?? null
    const moved = groupMove.moveGroupById(groupExplorerFeedExplorer.store.currentGroup.id, parentGroupId)
    if (!moved) return

    groupExplorerFeedExplorer.navigateGroupById(moved.parentId)
  }
  function moveNotionHandler(group: Nullable<GroupEntity>) {
    if (!groupExplorerFeedNotionFeed.store.selectedNotion) return null

    const toGroupId = group?.id ?? null
    const notionId = groupExplorerFeedNotionFeed.store.selectedNotion.id

    const moved = groupMove.moveNotionById(currentGroupId, toGroupId, notionId)
    if (!moved) return

    const parentGroupId = group?.id ?? null
    groupExplorerFeedExplorer.navigateGroupById(parentGroupId)
  }
  function deleteGroupHandler() {
    if (isNull(currentGroupId)) return 

    const deleted = groupEdition.deleteGroupById(currentGroupId)
    if (!deleted) return 
    
    groupFeedModalStack.clear()
    groupExplorerFeedExplorer.navigateParent()
  }
  function deleteNotionHandler() {
    if (!groupExplorerFeedNotionFeed.store.selectedNotion) return null

    const deleted = notionEdition.deleteNotionById(groupExplorerFeedNotionFeed.store.selectedNotion.id)
    if (deleted && !isNull(currentGroupId)) groupActions.removeNotionFromGroupById(currentGroupId, deleted.id)

    const children = groupActions.getGroupNotionsById(currentGroupId) ?? []
    groupExplorerFeedNotionFeed.updateNotions(children)
  }
  function selectColor(color: ColorModel) {
    groupForm.updateGroupColor(color)
    groupFeedModalStack.openPrevious()
  }
  function addColor(color: ColorModel) {
    colorSelection.updateColor(color)
    groupFeedModalStack.openPrevious()
  }

  return (
    <PageLayout>
      <AppHeader />

      <Main>
        <Container stretch>
          <GroupExplorerFeed 
            onNotionDetailsClick={openNotionDetailsSelectActionModal} 
          />
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
  
          <SelectActionModalOption onClick={openGroupMoveModal}>
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

      <SelectActionModal modal={notionDetailsSelectActionModal}>
        <Flex
          direction={flexDirectionVertical}
          gap={flexGapSmall}
        >
          <SelectActionModalOption
            onClick={openNotionMoveModal}
          >
            <Text>Move</Text>
          </SelectActionModalOption>
          
          <SelectActionModalOption
            onClick={openNotionDeleteModal}
            variant={buttonVariantDanger}
          >
            <Text>Delete</Text>
          </SelectActionModalOption>
        </Flex>
      </SelectActionModal>
      
      <GroupCreationModal 
        onColorClick={openColorSelectionModal} 
      />
      <GroupEditionModal 
        onSave={editGroupHandler}
        onColorClick={openColorSelectionModal}
      />

      <GroupSelectionModal 
        onSelect={groupMoveSelectionDynamicAction.action}
        onCancel={groupFeedModalStack.openPrevious}
        allowRoot
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

      <ConfirmationModal 
        title='Do you want to delete this group?'
        modal={groupDeleteConfirmationModal}
        onConfirm={deleteGroupHandler}
        onCancel={groupFeedModalStack.openPrevious}
        variant={buttonVariantDanger}
      />
      <ConfirmationModal 
        title='Do you want to delete this notion?'
        modal={notionDeleteConfirmationModal}
        onConfirm={deleteNotionHandler}
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
