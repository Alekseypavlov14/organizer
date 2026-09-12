import type { NotionEntity } from './notion.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { updateNotionsSelector, useNotionsStore } from './notion.store'
import { notionEntityStorage } from './notion.storage'

export function useNotionActions() {
  const updateNotions = useNotionsStore(updateNotionsSelector)

  function saveNotion(notion: NotionEntity): NotionEntity {
    const result = notionEntityStorage.save(notion)
    revalidate()

    return result
  }

  function getNotionById(id: Id): Nullable<NotionEntity> {
    const result = notionEntityStorage.getById(id)
    revalidate()
    
    return result
  }

  function deleteNotionById(id: Id): Nullable<NotionEntity> {
    const result = notionEntityStorage.deleteById(id)
    revalidate()
    
    return result
  }

  function revalidate() {
    updateNotions(notionEntityStorage.getAll())
  }

  return ({ 
    saveNotion,
    getNotionById,
    deleteNotionById,
  })
}
