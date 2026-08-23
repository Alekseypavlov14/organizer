import type { NotificationStatus } from './constants'

export interface Notification {
  status: NotificationStatus
  message: string
  
  created: number
}
