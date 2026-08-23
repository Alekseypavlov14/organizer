import type { NotionEntity } from './notion.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { notionEntityStorage } from './notion.storage'

export function useNotionActions() {
  function getNotions(): NotionEntity[] {
    return notionEntityStorage.getAll()
  }

  function saveNotion(notion: NotionEntity): NotionEntity {
    return notionEntityStorage.save(notion)
  }

  function getNotionById(id: Id): Nullable<NotionEntity> {
    return notionEntityStorage.getById(id)
  }

  function deleteNotionById(id: Id): Nullable<NotionEntity> {
    return notionEntityStorage.deleteById(id)
  }

  return ({ 
    getNotions,
    saveNotion,
    getNotionById,
    deleteNotionById,
  })
}
