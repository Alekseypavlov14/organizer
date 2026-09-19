import type { GroupEntity } from './group.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { notionsSelector, useNotionActions, useNotionsStore, type NotionEntity } from '../notions'
import { groupsSelector, updateGroupsSelector, useGroupsStore } from './group.store'
import { groupEntityStorage } from './group.storage'
import { isNull } from '@/shared/utils/validation'

export function useGroupActions() {
  const groups = useGroupsStore(groupsSelector)
  const updateGroups = useGroupsStore(updateGroupsSelector)

  const notions = useNotionsStore(notionsSelector)
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
    const group = getGroupById(id)
    if (!group) return null

    const deletedNotions = group.notionIds.map(notionActions.deleteNotionById)
    if (deletedNotions.some(isNull)) return null

    const children = getGroupChildrenById(id) ?? []

    const deletedChildren = children.map(child => deleteGroupById(child.id))
    if (deletedChildren.some(isNull)) return null

    const deleted = groupEntityStorage.deleteById(id)
    revalidate()

    return deleted
  }

  function moveGroupById(groupId: Id, parentId: Nullable<Id>): Nullable<GroupEntity> {
    const group = getGroupById(groupId)
    if (!group) return null
    
    if (groupId === parentId) return null
    if (isSubgroupOf(parentId, groupId)) return null

    const moved = groupEntityStorage.save({ ...group, parentId })
    revalidate()

    return moved
  }

  function getGroupPathById(id: Nullable<Id>): Nullable<GroupEntity[]> {
    const segments: GroupEntity[] = []
    let currentGroupId: Nullable<Id> = id

    while (true) {
      if (isNull(currentGroupId)) break

      const currentGroup = getGroupById(currentGroupId)
      if (!currentGroup) return null

      const isGroupInSegments = segments.some(group => group.id === currentGroup.id)
      if (isGroupInSegments) return null

      segments.push(currentGroup)
      currentGroupId = currentGroup.parentId
    }

    return segments.reverse()
  }

  function getGroupChildrenById(id: Nullable<Id>): Nullable<GroupEntity[]> {
    if (isNull(id)) return groups.filter(group => group.parentId === id)

    const group = getGroupById(id)
    if (isNull(group)) return null

    const children = groups.filter(group => group.parentId === id)
    return children
  }

  function isSubgroupOf(groupId: Nullable<Id>, parentId: Nullable<Id>): boolean {
    if (groupId === parentId) return false
    if (isNull(parentId)) return true
    if (isNull(groupId)) return false

    const group = getGroupById(groupId)
    if (!group) return false

    const parent = getGroupById(parentId)
    if (!parent) return false

    const path = getGroupPathById(groupId) ?? []
    return path.some(group => group.id === parentId)
  }

  function moveNotionById(fromGroupId: Nullable<Id>, toGroupId: Nullable<Id>, notionId: Id): boolean {
    if (fromGroupId === toGroupId) return true

    if (!isNull(fromGroupId)) {
      const fromGroup = removeNotionFromGroupById(fromGroupId, notionId)
      if (!fromGroup) return false
    }

    if (!isNull(toGroupId)) {
      const toGroup = addNotionToGroupById(toGroupId, notionId)
      if (!toGroup) return false
    }

    return true
  }

  function addNotionToGroupById(id: Id, notionId: Id): Nullable<GroupEntity> {
    const group = getGroupById(id)
    if (!group) return null

    if (group.notionIds.some(id => id === notionId)) return group

    const notion = notionActions.getNotionById(notionId)
    if (!notion) return null

    const newGroup: GroupEntity = { ...group, notionIds: group.notionIds.concat([ notionId ]) }

    const updated = groupEntityStorage.save(newGroup)
    revalidate()

    return updated
  }

  function removeNotionFromGroupById(id: Id, notionId: Id): Nullable<GroupEntity> {
    const group = getGroupById(id)
    if (!group) return null

    const newNotionIds = group.notionIds.filter(id => id !== notionId)
    const newGroup: GroupEntity = { ...group, notionIds: newNotionIds }

    const updated = groupEntityStorage.save(newGroup)
    revalidate()

    return updated
  }

  function getGroupNotionsById(id: Nullable<Id>): Nullable<NotionEntity[]> {
    if (isNull(id)) return getRootGroupNotions()

    const group = getGroupById(id)
    if (!group) return null

    const receivedNotions = group.notionIds.map(notionActions.getNotionById)
    const notions = receivedNotions.filter(notion => !isNull(notion))

    return notions
  }

  function getRootGroupNotions(): NotionEntity[] {
    const rootNotions = notions.filter(notion => {
      const anyGroupHasNotion = groups.some(group => (
        group.notionIds.includes(notion.id)
      ))

      return !anyGroupHasNotion
    })

    return rootNotions
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

    moveGroupById,
    getGroupPathById,
    getGroupChildrenById,
    isSubgroupOf,
    
    moveNotionById,
    addNotionToGroupById,
    removeNotionFromGroupById,
    
    getGroupNotionsById,
    getRootGroupNotions,

    getGroupsBySearchQuery,
  })
}
