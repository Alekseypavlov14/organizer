import type { GroupEntity, GroupRecord } from './group.entity'
import type { Id } from '@/shared/types/id'
import { notionEntityStorage, type NotionEntity } from '@/entities/notions'
import { Storage } from '@/shared/utils/storage'

export class GroupEntityStorage extends Storage<GroupEntity, GroupRecord> {
  public deserialize(record: GroupRecord): GroupEntity {
    const notions: NotionEntity[] = record.notions
      .map(id => notionEntityStorage.getById(id))
      .filter(Boolean) as NotionEntity[]

    return ({ ...record, notions})
  }

  public serialize(record: GroupEntity): GroupRecord {
    const notions: Id[] = record.notions
      .map(notion => notion.id)

    return ({ ...record, notions})
  }
}
