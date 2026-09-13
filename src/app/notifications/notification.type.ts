import type { NotificationStatus } from './constants'
import type { Timestamp } from '@/shared/utils/datetime'

export interface Notification {
  status: NotificationStatus
  message: string
  created: Timestamp
}
