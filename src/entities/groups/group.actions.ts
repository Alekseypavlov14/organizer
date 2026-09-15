import type { GroupEntity } from './group.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { groupsSelector, updateGroupsSelector, useGroupsStore } from './group.store'
import { groupEntityStorage } from './group.storage'
import { useNotionActions } from '../notions'
import { validateId } from '@/shared/utils/id'
import { isNull } from '@/shared/utils/validation'

export function useGroupActions() {
  const groups = useGroupsStore(groupsSelector)
  const updateGroups = useGroupsStore(updateGroupsSelector)

  const notionActions = useNotionActions()

  function saveGroup(group: GroupEntity): Nullable<GroupEntity> {
    const saved = groupEntityStorage.save(group)
    revalidate()

    return saved
  }

  function getGroupById(id: Id): Nullable<GroupEntity> {
    return groupEntityStorage.getById(id)
  }

  function deleteGroupById(id: Id): Nullable<GroupEntity> {
    const deleted = groupEntityStorage.deleteById(id)
    revalidate()

    return deleted
  }

  function addNotionToGroupById(id: Id, notionId: Id): Nullable<GroupEntity> {
    const group = groupEntityStorage.getById(id)
    if (!group) return null

    if (group.notions.some(notion => notion.id === notionId)) return group

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

  function getGroupPathById(id: Nullable<Id>): Nullable<GroupEntity[]> {
    const groups: GroupEntity[] = []
    let currentGroupId: Nullable<Id> = id

    while (true) {
      if (isNull(currentGroupId) || !validateId(currentGroupId)) break

      const currentGroup = getGroupById(currentGroupId)
      if (!currentGroup) return null

      if (groups.some(group => group.id === currentGroup.id)) return null

      groups.push(currentGroup)
      currentGroupId = currentGroup.parentId
    }

    return groups.reverse()
  }

  function getGroupChildrenById(id: Nullable<Id>): Nullable<GroupEntity[]> {
    if (isNull(id)) return groups.filter(group => group.parentId === id)

    const group = getGroupById(id)
    if (isNull(group)) return null

    const children = groups.filter(group => group.parentId === id)
    return children
  }

  function getGroupsBySearchQuery(query: string): GroupEntity[] {
    return groups.filter(group => group.title.toLowerCase().includes(query.toLowerCase()))
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

    getGroupPathById,
    getGroupChildrenById,

    getGroupsBySearchQuery,
  })
}
