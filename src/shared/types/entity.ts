import type { Timestamp } from '../utils/datetime'
import type { Id } from './id'

export interface Entity {
  id: Id
  savedAt: Timestamp
}
