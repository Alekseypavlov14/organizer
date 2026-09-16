import type { GroupExplorerStore } from '../explorer.store'
import type { GroupEntity } from '@/entities/groups'

export interface GroupExplorerInstance {
  store: GroupExplorerStore

  searchGroups: (query: string) => void
  selectGroup: (group: GroupEntity) => void

  navigateParent: () => void
  navigateRoot: () => void

  load: (groups: GroupEntity[]) => void
  reset: () => void
}
