import type { GroupEntity, GroupRecord } from './group.entity'
import type { Id } from '@/shared/types/id'
import { notionEntityStorage, type NotionEntity } from '@/entities/notions'
import { EntityStorage } from '@/shared/utils/storages'
import { groupValidator } from './group.validator'

export class GroupEntityStorage extends EntityStorage<GroupEntity, GroupRecord> {
  public deserialize(record: GroupRecord): GroupEntity {
    const notions: NotionEntity[] = record.notions
      .map(id => notionEntityStorage.getById(id))
      .filter(Boolean) as NotionEntity[]

    return ({ ...record, notions })
  }

  public serialize(record: GroupEntity): GroupRecord {
    const notions: Id[] = record.notions
      .map(notion => notion.id)

    return ({ ...record, notions })
  }

  public validate(entity: GroupEntity): boolean {
    return groupValidator.validateEntity(entity)
  }
}

export const groupEntityStorage = new GroupEntityStorage('entities/groups')
