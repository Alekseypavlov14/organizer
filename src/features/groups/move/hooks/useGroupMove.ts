import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { groupsSelector, useGroupActions, useGroupsStore, type GroupEntity } from '@/entities/groups'
import { useNotifications } from '@/app/notifications'

export function useGroupMove() {
  const groupActions = useGroupActions()
  const notifications = useNotifications()

  const groups = useGroupsStore(groupsSelector)

  function moveGroupById(groupId: Id, parentId: Nullable<Id>): Nullable<GroupEntity> {
    const moved = groupActions.moveGroupById(groupId, parentId)

    if (!moved) {
      notifications.createErrorNotification('The group is not moved')
      return null
    }

    notifications.createSuccessNotification('The group is moved')
    return moved
  }

  function moveNotionById(fromGroupId: Nullable<Id>, toGroupId: Nullable<Id>, notionId: Id): boolean {
    const moved = groupActions.moveNotionById(fromGroupId, toGroupId, notionId)

    if (!moved) {
      notifications.createErrorNotification('The notion is not moved')
      return false
    }

    notifications.createSuccessNotification('The notion is moved')
    return true
  }

  function getGroupMoveCandidatesById(groupId: Nullable<Id>) {
    return groups.filter(group => (
      group.id !== groupId && 
      !groupActions.isSubgroupOf(group.id, groupId)
    ))
  }

  return ({
    moveGroupById,
    moveNotionById,
    
    getGroupMoveCandidatesById
  })
}
