import type { NotionEntity } from './notion.entity'
import { notionValidator } from './notion.validator'
import { EntityStorage } from '@/shared/utils/storages'

export class NotionEntityStorage extends EntityStorage<NotionEntity> {
  public deserialize(record: NotionEntity): NotionEntity {
    return record
  }

  public serialize(record: NotionEntity): NotionEntity {
    return record
  }

  public validate(entity: NotionEntity): boolean {
    return notionValidator.validateEntity(entity)
  }
}

export const notionEntityStorage = new NotionEntityStorage('entities/notions')
