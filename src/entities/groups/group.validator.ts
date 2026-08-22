import type { GroupEntity } from './group.entity'
import { colorValidator, entityNameRegex, type EntityValidator } from '../shared'
import { notionValidator } from '../notions'

export class GroupValidator implements EntityValidator<GroupEntity> {
  validateEntity(entity: GroupEntity): boolean {
    if (entity.parent === entity.id) return false
    if (!entityNameRegex.test(entity.title)) return false

    if (!colorValidator.validateModelValue(entity.color)) return false
    if (entity.notions.some(notion => !notionValidator.validateEntity(notion))) return false
  
    return true
  }
}

export const groupValidator = new GroupValidator()
