import type { NotionEntity } from './notion.entity'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { updateNotionsSelector, useNotionsStore } from './notion.store'
import { notionEntityStorage } from './notion.storage'

export function useNotionActions() {
  const updateNotions = useNotionsStore(updateNotionsSelector)

  function saveNotion(notion: NotionEntity): Nullable<NotionEntity> {
    const saved = notionEntityStorage.save(notion)
    revalidate()

    return saved
  }

  function getNotionById(id: Id): Nullable<NotionEntity> {
    return notionEntityStorage.getById(id)
  }

  function deleteNotionById(id: Id): Nullable<NotionEntity> {
    const deleted = notionEntityStorage.deleteById(id)
    revalidate()
    
    return deleted
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
