import type { Id } from '@/shared/types/id'
import { useNotionActions, type NotionEntity } from '@/entities/notions'
import { useEditionContextHandler } from './useEditionContextHandler'
import { useNotifications } from '@/app/notifications'

export function useEditionActions() {
  const notionActions = useNotionActions()
  
  const notifications = useNotifications()
  const handlers = useEditionContextHandler()

  function saveNotion(notion: NotionEntity): void {
    notionActions.saveNotion(notion)
    notifications.createSuccessNotification('The notion is created')

    handlers.handleSave(notion)
    handlers.resetContext()
  }

  function deleteNotionById(id: Id) {
    const deleted = notionActions.deleteNotionById(id)

    if (deleted) notifications.createInfoNotification('The notion is deleted')
    else return notifications.createErrorNotification('The notion is not deleted')

    handlers.handleDelete(deleted)
    handlers.resetContext()
  }

  function cancel() {
    handlers.resetContext()
  }

  return ({ 
    saveNotion,
    deleteNotionById,
    cancel,
  })
}
