import type { NotificationStatus } from '../constants'
import type { Notification } from '../notification.type'
import { addNotificationSelector, useNotificationsStore } from '../notifications.store'
import { useCallback } from 'react'

export function useNotificationsHandler() {
  const addNotification = useNotificationsStore(addNotificationSelector)

  const displayNotification = useCallback((status: NotificationStatus, message: string) => {
    const created = Date.now()

    const notification: Notification = {
      message,
      status,
      created,
    }

    addNotification(notification)
  }, [addNotification])

  return ({
    displayNotification
  })
}
