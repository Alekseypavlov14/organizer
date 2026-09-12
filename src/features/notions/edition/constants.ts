import type { NotionEntity } from '@/entities/notions'
import { generateId } from '@/shared/utils/id'

export const initialNotion: NotionEntity = {
  id: generateId(),
    
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
