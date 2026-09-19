import type { NotionEntity } from '@/entities/notions'
import type { ColorModel } from '@/entities/shared'
import type { Nullable } from '@/shared/types/nullable'
import { ColorSelectionModal, useColorSelection, useColorSelectionModal } from '@/features/colors/selection'
import { FloatingActions, FloatingAction, floatingActionVariantPrimary } from '@/shared/components/FloatingActions'
import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { GroupFeedNotionDetailsSelectActionModal } from './modals/GroupFeedNotionDetailsSelectActionModal'
import { NotionFeed, NotionFeedItems, NotionItem } from '@/features/notions/feed'
import { GroupFeed, GroupFeedItems, GroupItem } from '@/features/groups/feed'
import { GroupFeedCreationSelectActionModal } from './modals/GroupFeedCreationSelectActionModal'
import { GroupFeedEditionSelectActionModal } from './modals/GroupFeedEditionSelectActionModal'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { ColorAddModal, useColorAddModal } from '@/features/colors/add'
import { useGroupSelectionDynamicAction } from './selection.action'
import { NotionDeleteConfirmationModal } from './modals/NotionDeleteConfirmationModal'
import { GroupDeleteConfirmationModal } from './modals/GroupDeleteConfirmationModal'
import { useGroupByIdFromQueryParams } from '@/features/groups/shared'
import { useGroupFeedNotionDetails } from './hooks/useGroupFeedNotionDetails'
import { useGroupFeedGroupExplorer } from './group.explorer'
import { useGroupFeedModalStack } from './modals.feature'
import { useGroupFeedNotionFeed } from './notion.feed'
import { useGroupFeedGroupFeed } from './group.feed'
import { useGroupFeedCreation } from './hooks/useGroupFeedCreation'
import { useGroupFeedEdition } from './hooks/useGroupFeedEdition'
import { GroupSelectionModal } from '@/widgets/groups/GroupSelectionModal'
import { GroupCreationModal } from '@/widgets/groups/GroupCreationModal'
import { GroupEditionModal } from '@/widgets/groups/GroupEditionModal'
import { GroupFeedPath } from './components/GroupFeedPath'
import { useNavigation } from '@/app/navigation'
import { useGroupForm } from '@/features/groups/form'
import { Placeholder } from '@/shared/components/Placeholder'
import { PageLayout } from '@/app/layouts'
import { Container } from '@/shared/components/Container'
import { AppHeader } from '@/widgets/shared/AppHeader'
import { useEffect } from 'react'
import { isNull } from '@/shared/utils/validation'
import { Main } from '@/shared/components/Main'
import { Icon } from '@/shared/components/Icon'
import { Text } from '@/shared/components/Text'

export function GroupFeedPage() {
  const navigation = useNavigation()
  const groupActions = useGroupActions()

  const groupFeedExplorer = useGroupFeedGroupExplorer()
  const currentGroupId = groupFeedExplorer.store.currentGroup?.id ?? null
  
  const groupFeed = useGroupFeedGroupFeed()
  const notionFeed = useGroupFeedNotionFeed()
  
  const groupForm = useGroupForm()
  const colorSelection = useColorSelection()

  const groupFeedModalStack = useGroupFeedModalStack()
  const colorSelectionModal = useColorSelectionModal()
  const colorAddModal = useColorAddModal()
  
  const groupFeedCreation = useGroupFeedCreation()
  const groupFeedEdition = useGroupFeedEdition()
  const notionDetails = useGroupFeedNotionDetails()

  const groupSelectionDynamicAction = useGroupSelectionDynamicAction()

  useGroupByIdFromQueryParams({
    success: (group) => groupFeedExplorer.navigateGroup(group),
    failure: () => {
      navigation.navigateGroupFeedRootPage()
      groupFeedExplorer.navigateRoot()
    },
  })

  useEffect(() => {
    groupFeed.updateGroups(groupActions.getGroupChildrenById(currentGroupId) ?? [])
    notionFeed.updateNotions(groupActions.getGroupNotionsById(currentGroupId) ?? [])
  }, [currentGroupId])

  function clickGroupPathSegmentHandler(group: Nullable<GroupEntity>) {
    if (isNull(group)) navigation.navigateGroupFeedRootPage()
    else navigation.navigateGroupFeedGroupPage(group.id)
  }
  
  function clickGroupHandler(group: GroupEntity) {
    if (isNull(group)) navigation.navigateGroupFeedRootPage()
    else navigation.navigateGroupFeedGroupPage(group.id)
  }
  function clickNotionHandler(notion: NotionEntity) {
    navigation.navigateNotionDisplayPage(notion.id)
  }
  function clickNotionDetailsHandler(notion: NotionEntity) {
    notionDetails.openNotionDetailsSelectActionModal(notion)
  }

  function selectGroupHandler(group: Nullable<GroupEntity>) {
    groupSelectionDynamicAction.callback(group)
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

  return (
    <PageLayout>
      <AppHeader />

      <Main>
        <Container stretch>
          <GroupFeed store={groupFeed.store}>
            <Flex
              direction={flexDirectionVertical}
              gap={flexGapMedium}
            >
              <GroupFeedPath onSegmentClick={clickGroupPathSegmentHandler} />
      
              <GroupFeedItems>
                {(group) => (
                  <GroupItem 
                    group={group}
                    onClick={clickGroupHandler}
                  />
                )}
              </GroupFeedItems>
      
              <NotionFeed store={notionFeed.store}>
                <NotionFeedItems>
                  {(notion) => (
                    <NotionItem 
                      notion={notion}
                      onClick={clickNotionHandler} 
                      onDetailsClick={clickNotionDetailsHandler}
                      showDetails
                    />
                  )}
                </NotionFeedItems>
              </NotionFeed>
      
              {groupFeed.store.groups.length <= 0 && notionFeed.store.notions.length <= 0 ? (
                <Placeholder>
                  <Text>This group is empty</Text>
                </Placeholder>
              ) : null}
            </Flex>
          </GroupFeed>
        </Container>
      </Main>

      <GroupFeedEditionSelectActionModal />
      <GroupFeedCreationSelectActionModal />
      <GroupFeedNotionDetailsSelectActionModal />
      
      <GroupCreationModal 
        onColorClick={openColorSelectionModal} 
      />
      <GroupEditionModal 
        onSave={groupFeedEdition.editGroupHandler}
        onColorClick={openColorSelectionModal}
      />

      <GroupSelectionModal 
        onSelect={selectGroupHandler}
        onCancel={groupFeedModalStack.openPrevious}
        allowRoot
      />
      
      <ColorSelectionModal 
        onSelect={selectColor}
        onAddNew={openColorAddModal} 
        onCancel={groupFeedModalStack.openPrevious}
        showAddButton
      />
      <ColorAddModal 
        onAdd={addColor} 
        onCancel={groupFeedModalStack.openPrevious}
      />

      <GroupDeleteConfirmationModal />
      <NotionDeleteConfirmationModal />

      <FloatingActions>
        {groupFeedExplorer.store.currentGroup ? (
          <FloatingAction onClick={groupFeedEdition.openGroupEditionSelectActionModal}>
            <Icon name='pen' size='l' />
          </FloatingAction>
        ) : null}

        <FloatingAction 
          onClick={groupFeedCreation.openGroupCreationSelectActionModal}
          variant={floatingActionVariantPrimary}
        >
          <Icon name='plus' size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
