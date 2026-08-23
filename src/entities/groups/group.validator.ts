import type { GroupEntity } from './group.entity'
import { colorValidator, validateEntityTitle, type EntityValidator } from '../shared'
import { notionValidator } from '../notions'
import { validateId } from '@/shared/utils/id'

export class GroupValidator implements EntityValidator<GroupEntity> {
  validateEntity(entity: GroupEntity): boolean {
    if (!validateId(entity.id)) return false 
    if (entity.parentId === entity.id) return false
    
    if (!validateEntityTitle(entity.title)) return false
    if (!colorValidator.validateModelValue(entity.color)) return false
    
    if (entity.notions.some(notion => !notionValidator.validateEntity(notion))) return false
  
    return true
  }
}

export const groupValidator = new GroupValidator()
