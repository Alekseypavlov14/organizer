import type { Id } from '@/shared/types/id'
import { EditionContext, createBaseEditionContext } from '../edition.context'
import { useNotionActions, type NotionEntity } from '@/entities/notions'
import { useNotionEditionContextHandler } from './useNotionEditionContextHandler'
import { useNotionEditionStore } from '../edition.store'
import { useNotifications } from '@/app/notifications'
import { initialNotion } from '../constants'

export function useNotionEdition() {
  const notifications = useNotifications()
    
  const notionActions = useNotionActions()
  const handlers = useNotionEditionContextHandler()

  const store = useNotionEditionStore()

  // actions
  function saveNotion(notion: NotionEntity): void {
    notionActions.saveNotion(notion)
    notifications.createSuccessNotification('The notion is created')

    handlers.handleSave(store.context, notion)
    resetContext()
  }
  function deleteNotionById(id: Id) {
    const deleted = notionActions.deleteNotionById(id)

    if (deleted) notifications.createInfoNotification('The notion is deleted')
    else return notifications.createErrorNotification('The notion is not deleted')

    handlers.handleDelete(store.context, deleted.id)
    resetContext()
  }
  function cancel() {
    resetContext()
  }

  // notions
  function getInitialNotion(): NotionEntity {
    return initialNotion
  }

  // context 
  function updateContext(context: EditionContext) {
    store.updateContext(context)
  }
  function resetContext() {
    store.updateContext(createBaseEditionContext())
  }

  return ({
    saveNotion,
    deleteNotionById,
    cancel,

    getInitialNotion,

    updateContext,
    resetContext,
  })
}
