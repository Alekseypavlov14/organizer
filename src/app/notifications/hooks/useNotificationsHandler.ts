import type { Notification } from '../notification.type'
import { notificationDuration, type NotificationStatus } from '../constants'
import { generateNextIdFromEntries } from '@/shared/utils/id'
import { useNotificationsStore } from '../notifications.store'
import { useCallback } from 'react'

export function useNotificationsHandler() {
  const { notifications, addNotification, removeNotification } = useNotificationsStore()

  const displayNotification = useCallback((status: NotificationStatus, message: string) => {
    const ids = notifications.map(notification => notification.id)
    const newId = generateNextIdFromEntries(ids)

    const notification: Notification = {
      id: newId, 
      message,
      status,
    }

    addNotification(notification)

    setTimeout(() => removeNotification(notification.id), notificationDuration)
  }, [addNotification, removeNotification])

  return ({
    displayNotification
  })
}
