import type { GroupEntity } from './group.entity'
import type { Id } from '@/shared/types/id'
import { notionEntityStorage } from '@/entities/notions'
import { groupValidator } from './group.validator'
import { EntityStorage } from '@/shared/utils/storages'

export class GroupEntityStorage extends EntityStorage<GroupEntity> {
  public deserialize(record: GroupEntity): GroupEntity {
    const notionIds: Id[] = record.notionIds
      .filter(id => notionEntityStorage.getById(id))

    return ({ ...record, notionIds })
  }

  public serialize(entity: GroupEntity): GroupEntity {
    const notionIds: Id[] = entity.notionIds
      .filter(id => notionEntityStorage.getById(id))

    return ({ ...entity, notionIds })
  }

  public validate(entity: GroupEntity): boolean {
    return groupValidator.validateEntity(entity)
  }
}

export const groupEntityStorage = new GroupEntityStorage('entities/groups')
