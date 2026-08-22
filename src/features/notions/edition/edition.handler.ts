import { isEditionContextVariantBase, isEditionContextVariantGroup } from './edition.context'
import { contextSelector, useNotionEditionStore } from './edition.store'
import { useNotionActions, type NotionEntity } from '@/entities/notions'
import { useNotifications } from '@/app/notifications'
import { useGroupActions } from '@/entities/groups'

export function useHandleEditionContext() {
  const context = useNotionEditionStore(contextSelector)
  const notifications = useNotifications()

  const notionActions = useNotionActions()
  const groupActions = useGroupActions()

  function handleSave(notion: NotionEntity) {
    // handle base edition
    if (isEditionContextVariantBase(context)) {
      const created = notionActions.saveNotion(notion)
      if (!created) notifications.createErrorNotification('This notion is not saved')
    }

    // handle group edition
    if (isEditionContextVariantGroup(context)) {
      const created = notionActions.saveNotion(notion)
      if (!created) return notifications.createErrorNotification('This notion is not saved')

      const group = groupActions.getGroupById(context.groupId)
      if (!group) return notifications.createWarningNotification('The group is not found')

      group.notions.push(created)

      const updated = groupActions.updateGroupById(group.id, group)
      if (!updated) return notifications.createWarningNotification('The group is not updated')
    }
  }

  return ({ handleSave })
}
