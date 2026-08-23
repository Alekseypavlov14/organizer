import { notificationStatusError, notificationStatusInfo, notificationStatusSuccess, notificationStatusWarning } from '../constants'
import { useNotificationsHandler } from './useNotificationsHandler'

export function useNotifications() {
  const { displayNotification } = useNotificationsHandler()

  function createSuccessNotification(message: string) {
    displayNotification(notificationStatusSuccess, message)
  }
  function createErrorNotification(message: string) {
    displayNotification(notificationStatusError, message)
  }
  function createWarningNotification(message: string) {
    displayNotification(notificationStatusWarning, message)
  }
  function createInfoNotification(message: string) {
    displayNotification(notificationStatusInfo, message)
  }

  return ({
    createSuccessNotification,
    createErrorNotification,
    createWarningNotification,
    createInfoNotification,
  })
}
