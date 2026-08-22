import type { NotionEntity } from './notion.entity'
import { type EntityValidator, dateValidator, durationValidator, momentValidator, timeValidator, validateEntityTitle } from '../shared'
import { notionLevelOptions, notionPriorityOptions, notionProgressOptions } from './constants'
import { isBoolean, isNull, isString } from '@/shared/utils/validation'

export class NotionValidator implements EntityValidator<NotionEntity> {
  validateEntity(entity: NotionEntity): boolean {
    if (!validateEntityTitle(entity.title)) return false
    if (!isNull(entity.description) && !isString(entity.description)) return false

    if (!isNull(entity.date) && !dateValidator.validateModelValue(entity.date)) return false
    if (!isNull(entity.time) && !timeValidator.validateModelValue(entity.time)) return false
    if (!isNull(entity.duration) && !durationValidator.validateModelValue(entity.duration)) return false

    if (!isNull(entity.deadline) && !momentValidator.validateModelValue(entity.deadline)) return false
    if (!isNull(entity.done) && !isBoolean(entity.done)) return false

    if (!isNull(entity.priority) && !notionPriorityOptions.includes(entity.priority)) return false
    if (!isNull(entity.progress) && !notionProgressOptions.includes(entity.progress)) return false
    if (!isNull(entity.level) && !notionLevelOptions.includes(entity.level)) return false

    return true
  }
}

export const notionValidator = new NotionValidator()
