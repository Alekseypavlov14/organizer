import type { Id } from '@/shared/types/id'

export function generateId(): Id {
  return Date.now()
}

export function validateId(id: Id): boolean {
  return id > 0
}
