import type { GroupEntity } from './group.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { groupEntityStorage } from './group.storage'

export function useGroupActions() {
  function getGroups(): GroupEntity[] {
    return groupEntityStorage.getAll()
  }

  function getGroupById(id: Id): Nullable<GroupEntity> {
    return groupEntityStorage.getById(id)
  }

  function saveGroup(group: GroupEntity): Nullable<GroupEntity> {
    return groupEntityStorage.save(group)
  }

  function updateGroupById(id: Id, group: GroupEntity): Nullable<GroupEntity> {
    return groupEntityStorage.updateById(id, group)
  }

  function deleteGroupById(id: Id): Nullable<GroupEntity> {
    return groupEntityStorage.deleteById(id)
  }

  return ({ 
    getGroups,
    getGroupById,
    saveGroup,
    updateGroupById,
    deleteGroupById,
  })
}
