import type { GroupExplorerStore } from '../explorer.store'
import type { GroupEntity } from '@/entities/groups'

export interface GroupExplorerInstance {
  store: GroupExplorerStore

  search: (query: string) => void
  select: (group: GroupEntity) => void

  load: (groups: GroupEntity[]) => void
}
