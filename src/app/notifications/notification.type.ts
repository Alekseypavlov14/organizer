import type { NotificationStatus } from './constants'
import type { Id } from '@/shared/types/id'

export interface Notification {
  id: Id
  status: NotificationStatus
  message: string
}
