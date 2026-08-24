import type { NotionEntity } from '@/entities/notions'
import type { Id } from '@/shared/types/id'
import { EditionContext, isEditionContextVariantGroup } from '../edition.context'
import { useNotifications } from '@/app/notifications'
import { useGroupActions } from '@/entities/groups'

export function useNotionEditionContextHandler() {
  const groupActions = useGroupActions()
  const notifications = useNotifications()

  function handleSave(context: EditionContext, notion: NotionEntity) {
    if (isEditionContextVariantGroup(context)) {
      const group = groupActions.addNotionToGroupById(context.groupId, notion.id)
      if (!group) return notifications.createWarningNotification('The group is not updated')
    }
  }

  function handleDelete(context: EditionContext, notionId: Id) {
    if (isEditionContextVariantGroup(context)) {
      const group = groupActions.removeNotionFromGroupById(context.groupId, notionId)
      if (!group) return notifications.createWarningNotification('The group is not updated')
    }
  }

  return ({
    handleSave,
    handleDelete,
  })
}
