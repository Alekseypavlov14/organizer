import { NotionEditionSettingsPage } from '@/pages/notions/NotionEditionSettingsPage'
import { defaultEntityIdParam } from './constants'
import { createBrowserRouter } from 'react-router-dom'
import { NotionCreationPage } from '@/pages/notions/NotionCreationPage'
import { NotionDisplayPage } from '@/pages/notions/NotionDisplayPage'
import { NotionEditionPage } from '@/pages/notions/NotionEditionPage'
import { NotionFeedPage } from '@/pages/notions/NotionFeedPage'
import { GroupFeedPage } from '@/pages/groups/GroupFeedPage'
import { HomePage } from '@/pages/shared/HomePage'

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
    path: '/notions/create',
    element: <NotionCreationPage />
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
    element: <NotionEditionSettingsPage />,
  },

  {
    path: '/groups/:id?',
    element: <GroupFeedPage />
  },
])
