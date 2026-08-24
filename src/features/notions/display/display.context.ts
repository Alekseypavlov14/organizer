import type { NotionDisplayStore } from './display.store'
import type { Nullable } from '@/shared/types/nullable'
import { createContext } from 'react'

export const NotionDisplayContext = createContext<Nullable<NotionDisplayStore>>(null)
