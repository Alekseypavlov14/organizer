import type { NotionEntity } from '@/entities/notions'

export const defaultNotionFormData: NotionEntity = {
  id: 0,

  title: '',
  description: null,

  date: null,
  time: null,
  duration: null,

  deadline: null,
  done: null,

  priority: null,
  progress: null,
  level: null
}
