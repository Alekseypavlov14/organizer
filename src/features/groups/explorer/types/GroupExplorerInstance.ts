import type { GroupExplorerStore } from '../explorer.store'
import type { GroupEntity } from '@/entities/groups'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'

export interface GroupExplorerInstance {
  store: GroupExplorerStore

  searchGroups: (query: string) => void

  navigateGroup: (group: Nullable<GroupEntity>) => void
  navigateGroupById: (id: Nullable<Id>) => void
  navigateParent: () => void
  navigateRoot: () => void

  load: (groups: GroupEntity[]) => void
  reset: () => void
}
