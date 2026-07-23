import type { NotionEntity } from './notion.entity'
import { EntityStorage } from '@/shared/utils/storages'

export class NotionEntityStorage extends EntityStorage<NotionEntity> {
  public deserialize(record: NotionEntity): NotionEntity {
    return record
  }

  public serialize(record: NotionEntity): NotionEntity {
    return record
  }
}

export const notionEntityStorage = new NotionEntityStorage('entities/notions')
