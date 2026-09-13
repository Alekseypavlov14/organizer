import type { NotionDeleteByIdCallback } from '../types/NotionDeleteByIdCallback'
import type { NotionSaveCallback } from '../types/NotionSaveCallback'
import type { Id } from '@/shared/types/id'
import { useNotionActions, type NotionEntity } from '@/entities/notions'
import { useNotionEditionStore } from '../edition.store'
import { createInitialNotion } from '../constants'
import { useNotifications } from '@/app/notifications'

export function useNotionEdition() {
  const notifications = useNotifications()

  const notionActions = useNotionActions()
  const store = useNotionEditionStore()

  // actions
  function saveNotion(notion: NotionEntity): void {
    const saved = notionActions.saveNotion(notion)

    if (saved) notifications.createSuccessNotification('The notion is saved')
    else return notifications.createErrorNotification('The notion is not saved')

    store.onNotionSave(notion)
    handleCompleteEdition()
  }
  function deleteNotionById(id: Id) {
    const deleted = notionActions.deleteNotionById(id)

    if (deleted) notifications.createInfoNotification('The notion is deleted')
    else return notifications.createErrorNotification('The notion is not deleted')

    store.onNotionDeleteById(id)
    handleCompleteEdition()
  }
  function cancelEdition() {
    store.onNotionCancel()
    handleCompleteEdition()
  }

  function handleCompleteEdition() {
    resetCallbacks()
  }

  // callbacks
  function updateOnNotionSaveCallback(onNotionSave: NotionSaveCallback) {
    store.updateOnNotionSave(onNotionSave)
  }
  function updateOnNotionDeleteByIdCallback(onNotionDeleteById: NotionDeleteByIdCallback) {
    store.updateOnNotionDeleteById(onNotionDeleteById)
  }
  function resetCallbacks() {
    store.updateOnNotionSave(() => {})
    store.updateOnNotionDeleteById(() => {})
  }

  // notions
  function getInitialNotion(): NotionEntity {
    return createInitialNotion()
  }

  return ({
    saveNotion,
    deleteNotionById,
    cancelEdition,

    handleCompleteEdition,

    updateOnNotionSaveCallback,
    updateOnNotionDeleteByIdCallback,

    getInitialNotion,
  })
}
