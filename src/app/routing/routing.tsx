import { createBrowserRouter } from 'react-router-dom'
import { NotionEditionPage } from '@/pages/NotionEditionPage'
import { HomePage } from '@/pages/HomePage'

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/notions/edit',
    element: <NotionEditionPage />
  }
])
