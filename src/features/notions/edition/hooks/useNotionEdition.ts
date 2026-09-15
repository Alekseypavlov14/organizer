import type { NotionDeleteByIdCallback } from '../types/NotionDeleteByIdCallback'
import type { NotionCancelCallback } from '../types/NotionCancelCallback'
import type { NotionSaveCallback } from '../types/NotionSaveCallback'
import type { Nullable } from '@/shared/types/nullable'
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
  function saveNotion(notion: NotionEntity): Nullable<NotionEntity> {
    const saved = notionActions.saveNotion(notion)

    if (!saved) {
      notifications.createErrorNotification('The notion is not saved')
      return null
    }
    
    notifications.createSuccessNotification('The notion is saved')

    store.onNotionSave(notion)
    handleCompleteEdition()

    return saved
  }
  function deleteNotionById(id: Id): Nullable<NotionEntity> {
    const deleted = notionActions.deleteNotionById(id)

    if (!deleted) {
      notifications.createErrorNotification('The notion is not deleted')
      return null
    }

    notifications.createInfoNotification('The notion is deleted')

    store.onNotionDeleteById(id)
    handleCompleteEdition()

    return deleted
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
  function updateOnNotionCancel(onNotionCancel: NotionCancelCallback) {
    store.updateOnNotionCancel(onNotionCancel)
  }

  function resetCallbacks() {
    store.updateOnNotionSave(() => {})
    store.updateOnNotionDeleteById(() => {})
    store.updateOnNotionCancel(() => {})
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
    updateOnNotionCancel,

    getInitialNotion,
  })
}
