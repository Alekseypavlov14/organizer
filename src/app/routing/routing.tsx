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
    path: '/notions/:id',
    element: <NotionDisplayPage />
  },
  {
    path: '/notions/edit',
    element: <NotionEditionPage />
  }
])
