import { defaultEntityIdParam } from './constants'
import { createBrowserRouter } from 'react-router-dom'
import { NotionDisplayPage } from '@/pages/NotionDisplayPage'
import { NotionEditionPage } from '@/pages/NotionEditionPage'
import { NotionFeedPage } from '@/pages/NotionFeedPage'
import { HomePage } from '@/pages/HomePage'

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/notions',
    element: <NotionFeedPage />
  },
  {
    path: `/notions/:${defaultEntityIdParam}`,
    element: <NotionDisplayPage />
  },
  {
    path: `/notions/:${defaultEntityIdParam}/edit`,
    element: <NotionEditionPage />
  },
  {
    path: `/notions/:${defaultEntityIdParam}/edit/settings`,
    element: <></>,
  }
])
