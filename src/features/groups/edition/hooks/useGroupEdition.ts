import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { createInitialGroup } from '../constants'
import { useNotifications } from '@/app/notifications'

export function useGroupEdition() {
  const groupActions = useGroupActions()
  const notifications = useNotifications()

  function saveGroup(group: GroupEntity): Nullable<GroupEntity> {
    const saved = groupActions.saveGroup(group)

    if (!saved) {
      notifications.createErrorNotification('The group is not saved')
      return null
    }

    notifications.createSuccessNotification('The group is created')
    return saved
  }

  function deleteGroupById(id: Id) {
    const deleted = groupActions.deleteGroupById(id)

    if (!deleted) {
      notifications.createErrorNotification('The group is not deleted')
      return null
    }

    notifications.createSuccessNotification('The group is deleted')
    return deleted
  }

  function getInitialGroup() {
    return createInitialGroup()
  }

  return ({
    saveGroup,
    deleteGroupById,
    getInitialGroup,
  })
}
