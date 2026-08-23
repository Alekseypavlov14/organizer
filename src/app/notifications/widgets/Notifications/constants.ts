import type { NotificationStatus } from '../../constants'
import styles from './Notifications.module.css'

export const mapNotificationStatusToClassName: Record<NotificationStatus, string> = {
  success: styles.StatusSuccess,
  error: styles.StatusError,
  warning: styles.StatusWarning,
  info: styles.StatusInfo,
}
