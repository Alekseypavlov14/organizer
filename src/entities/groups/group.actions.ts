import type { GroupEntity } from './group.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { groupEntityStorage } from './group.storage'
import { useNotionActions } from '../notions'

export function useGroupActions() {
  const notionActions = useNotionActions()

  function getGroups(): GroupEntity[] {
    return groupEntityStorage.getAll()
  }

  function saveGroup(group: GroupEntity): GroupEntity {
    return groupEntityStorage.save(group)
  }

  function getGroupById(id: Id): Nullable<GroupEntity> {
    return groupEntityStorage.getById(id)
  }

  function deleteGroupById(id: Id): Nullable<GroupEntity> {
    return groupEntityStorage.deleteById(id)
  }

  function addNotionToGroupById(id: Id, notionId: Id): Nullable<GroupEntity> {
    const group = groupEntityStorage.getById(id)
    if (!group) return null

    const notion = notionActions.getNotionById(notionId)
    if (!notion) return null

    const newGroup: GroupEntity = { ...group, notions: group.notions.concat([ notion ]) }

    const updated = groupEntityStorage.save(newGroup)
    return updated
  }

  function removeNotionFromGroupById(id: Id, notionId: Id): Nullable<GroupEntity> {
    const group = groupEntityStorage.getById(id)
    if (!group) return null

    const newNotions = group.notions.filter(notion => notion.id !== notionId)
    const newGroup: GroupEntity = { ...group, notions: newNotions }

    const updated = groupEntityStorage.save(newGroup)
    return updated
  }

  return ({ 
    getGroups,
    saveGroup,
    getGroupById,
    deleteGroupById,
    addNotionToGroupById,
    removeNotionFromGroupById,
  })
}
