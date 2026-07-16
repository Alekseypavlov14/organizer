import { RouterProvider } from 'react-router-dom'
import { routing } from '@/app/routing'

export function App() {
  return (
    <RouterProvider router={routing} />
  )
}
