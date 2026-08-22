import { defaultEntityIdParam } from './constants'
import { createBrowserRouter } from 'react-router-dom'
import { NotionDisplayPage } from '@/pages/NotionDisplayPage'
import { NotionEditionPage } from '@/pages/NotionEditionPage'
import { HomePage } from '@/pages/HomePage'

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: `/notions/:${defaultEntityIdParam}`,
    element: <NotionDisplayPage />
  },
  {
    path: `/notions/:${defaultEntityIdParam}/edit`,
    element: <NotionEditionPage />
  }
])
