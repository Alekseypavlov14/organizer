import type { NotionEntity } from './notion.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { notionEntityStorage } from './notion.storage'

export function useNotionActions() {
  function getNotions(): NotionEntity[] {
    return notionEntityStorage.getAll()
  }

  function getNotionById(id: Id): Nullable<NotionEntity> {
    return notionEntityStorage.getById(id)
  }

  function saveNotion(notion: NotionEntity): Nullable<NotionEntity> {
    return notionEntityStorage.save(notion)
  }

  function updateNotionById(id: Id, notion: NotionEntity): Nullable<NotionEntity> {
    return notionEntityStorage.updateById(id, notion)
  }

  function deleteNotionById(id: Id): Nullable<NotionEntity> {
    return notionEntityStorage.deleteById(id)
  }

  return ({ 
    getNotions,
    getNotionById,
    saveNotion,
    updateNotionById,
    deleteNotionById,
  })
}
