import type { NotionEntity } from './notion.entity'
import { Storage } from '@/shared/utils/storage'

export class NotionEntityStorage extends Storage<NotionEntity> {
  public deserialize(record: NotionEntity): NotionEntity {
    return record
  }

  public serialize(record: NotionEntity): NotionEntity {
    return record
  }
}

export const notionEntityStorage = new NotionEntityStorage('entities/notions')
