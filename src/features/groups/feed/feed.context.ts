import type { GroupFeedStore } from './feed.store'
import type { Nullable } from '@/shared/types/nullable'
import { createContext } from 'react'

export const GroupFeedContext = createContext<Nullable<GroupFeedStore>>(null)
