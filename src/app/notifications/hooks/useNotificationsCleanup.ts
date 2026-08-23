import { notificationsSelector, updateNotificationsSelector, useNotificationsStore } from '../notifications.store'
import { MILLISECONDS_PER_SECOND } from '@/shared/utils/datetime'
import { notificationDuration } from '../constants'
import { useEffect } from 'react'

export function useNotificationsCleanup() {
  const notifications = useNotificationsStore(notificationsSelector)
  const updateNotifications = useNotificationsStore(updateNotificationsSelector)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = Date.now()

      const updatedNotifications = notifications.filter(notification => {
        return now - notification.created < notificationDuration
      })

      updateNotifications(updatedNotifications)
    }, MILLISECONDS_PER_SECOND)

    return () => clearInterval(intervalId)
  }, [notifications])
}
