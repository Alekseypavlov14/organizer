import type { GroupEntity } from '@/entities/groups'
import type { Nullable } from '@/shared/types/nullable'
import { createDynamicActionInstance } from '@/shared/utils/actions'

export type GroupSelectionAction = (group: Nullable<GroupEntity>) => void

export const useGroupSelectionDynamicAction = createDynamicActionInstance<GroupSelectionAction>(() => {})
