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
    notifications.createSuccessNotification('The notion is saved')

    handlers.handleSave(store.context, notion)
    handleCompleteEdition()
  }
  function deleteNotionById(id: Id) {
    const deleted = notionActions.deleteNotionById(id)

    if (deleted) notifications.createInfoNotification('The notion is deleted')
    else return notifications.createErrorNotification('The notion is not deleted')

    handlers.handleDelete(store.context, deleted.id)
    handleCompleteEdition()
  }
  function cancelEdition() {
    handleCompleteEdition()
  }

  function handleCompleteEdition() {
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
    cancelEdition,

    handleCompleteEdition,
    getInitialNotion,

    updateContext,
    resetContext,
  })
}
