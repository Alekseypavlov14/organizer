import type { GroupEntity } from './group.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { updateGroupsSelector, useGroupsStore } from './group.store'
import { groupEntityStorage } from './group.storage'
import { useNotionActions } from '../notions'

export function useGroupActions() {
  const updateGroups = useGroupsStore(updateGroupsSelector)

  const notionActions = useNotionActions()

  function saveGroup(group: GroupEntity): Nullable<GroupEntity> {
    const result = groupEntityStorage.save(group)
    revalidate()

    return result
  }

  function getGroupById(id: Id): Nullable<GroupEntity> {
    const result = groupEntityStorage.getById(id)
    revalidate()

    return result
  }

  function deleteGroupById(id: Id): Nullable<GroupEntity> {
    const result = groupEntityStorage.deleteById(id)
    revalidate()

    return result
  }

  function addNotionToGroupById(id: Id, notionId: Id): Nullable<GroupEntity> {
    const group = groupEntityStorage.getById(id)
    if (!group) return null

    const notion = notionActions.getNotionById(notionId)
    if (!notion) return null

    const newGroup: GroupEntity = { ...group, notions: group.notions.concat([ notion ]) }

    const updated = groupEntityStorage.save(newGroup)
    revalidate()

    return updated
  }

  function removeNotionFromGroupById(id: Id, notionId: Id): Nullable<GroupEntity> {
    const group = groupEntityStorage.getById(id)
    if (!group) return null

    const newNotions = group.notions.filter(notion => notion.id !== notionId)
    const newGroup: GroupEntity = { ...group, notions: newNotions }

    const updated = groupEntityStorage.save(newGroup)
    revalidate()

    return updated
  }

  function revalidate() {
    updateGroups(groupEntityStorage.getAll())
  }

  return ({ 
    saveGroup,
    getGroupById,
    deleteGroupById,
    
    addNotionToGroupById,
    removeNotionFromGroupById,
  })
}
