import type { NotionFeedStore } from './feed.store'
import type { Nullable } from '@/shared/types/nullable'
import { createContext } from 'react'

export const NotionFeedContext = createContext<Nullable<NotionFeedStore>>(null)
