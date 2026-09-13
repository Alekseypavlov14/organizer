import type { GroupEntity } from './group.entity'
import { colorValidator, type EntityValidator } from '../shared'
import { notionValidator } from '../notions'
import { isTimestamp } from '@/shared/utils/validation'
import { validateId } from '@/shared/utils/id'

export class GroupValidator implements EntityValidator<GroupEntity> {
  validateEntity(entity: GroupEntity): boolean {
    if (!validateId(entity.id)) return false 
    
    if (entity.parentId === entity.id) return false
    if (!colorValidator.validateModelValue(entity.color)) return false
    
    if (entity.notions.some(notion => !notionValidator.validateEntity(notion))) return false

    if (!isTimestamp(entity.savedAt) || entity.savedAt <= 0) return false
    
    return true
  }
}

export const groupValidator = new GroupValidator()
