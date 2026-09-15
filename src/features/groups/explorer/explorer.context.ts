import type { GroupExplorerStore } from './explorer.store'
import type { Nullable } from '@/shared/types/nullable'
import { createContext } from 'react'

export const GroupExplorerContext = createContext<Nullable<GroupExplorerStore>>(null)
