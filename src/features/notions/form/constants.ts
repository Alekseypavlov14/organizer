import type { NotionEntity } from '@/entities/notions'

export const defaultNotionFormData: NotionEntity = {
  id: 0,
  createdAt: 0,
  updatedAt: 0,

  title: '',
  description: null,

  date: 0,
  time: 0,
  duration: 0,

  deadline: null,
  done: null,

  priority: null,
  progress: null,
  level: null
}
