import type { NotionEntity } from '@/entities/notions'
import type { Id } from '@/shared/types/id'
import { contextSelector, updateContextSelector, useNotionEditionStore } from '../edition.store'
import { BaseEditionContext, GroupEditionContext, isEditionContextVariantGroup } from '../edition.context'
import { useNotifications } from '@/app/notifications'
import { useGroupActions } from '@/entities/groups'

export function useEditionContextHandler() {
  const context = useNotionEditionStore(contextSelector)
  const updateContext = useNotionEditionStore(updateContextSelector)

  const groupActions = useGroupActions()
  const notifications = useNotifications()

  function setBaseContext() {
    const baseContext = new BaseEditionContext()
    updateContext(baseContext)
  }
  function setGroupContext(groupId: Id) {
    const groupContext = new GroupEditionContext(groupId)
    updateContext(groupContext)
  }

  function handleSave(notion: NotionEntity) {
    if (isEditionContextVariantGroup(context)) {
      const group = groupActions.addNotionToGroupById(context.groupId, notion.id)
      if (!group) return notifications.createWarningNotification('The group is not updated')
    }
  }
  function handleDelete(notion: NotionEntity) {
    if (isEditionContextVariantGroup(context)) {
      const group = groupActions.removeNotionFromGroupById(context.groupId, notion.id)
      if (!group) return notifications.createWarningNotification('The group is not updated')
    }
  }

  function resetContext() {
    setBaseContext()
  }

  return ({
    setBaseContext,
    setGroupContext,

    handleSave,
    handleDelete,

    resetContext,
  })
}
