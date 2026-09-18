import type { GroupEntity } from './group.entity'
import { colorValidator, type EntityValidator } from '../shared'
import { isNull, isString, isTimestamp } from '@/shared/utils/validation'
import { notionValidator } from '../notions'
import { validateId } from '@/shared/utils/id'

export class GroupValidator implements EntityValidator<GroupEntity> {
  validateEntity(entity: GroupEntity): boolean {
    if (!validateId(entity.id)) return false 
    
    if (!isNull(entity.parentId) && !validateId(entity.id)) return false
    
    if (!isString(entity.title) || entity.title.length === 0) return false
    if (!colorValidator.validateModelValue(entity.color)) return false
    
    if (entity.notions.some(notion => !notionValidator.validateEntity(notion))) return false

    if (!isTimestamp(entity.savedAt) || entity.savedAt <= 0) return false
    
    return true
  }
}

export const groupValidator = new GroupValidator()
