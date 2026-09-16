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

  function getGroupMoveCandidatesById(groupId: Nullable<Id>) {
    return groups.filter(group => !groupActions.isSubgroupOf(group.id, groupId))
  }

  return ({
    moveGroupById,
    getGroupMoveCandidatesById
  })
}
