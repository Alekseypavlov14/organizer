import type { Id } from '@/shared/types/id'
import type { Nullable } from '@/shared/types/nullable'
import { useNavigate } from 'react-router-dom'

export function useNavigation() {
  const navigate = useNavigate()

  return ({
    navigateHomePage: () => navigate('/'),
    
    navigateNotionFeedPage: () => navigate('/notions'),
    navigateNotionCreationPage: () => navigate('/notions/create'),
    navigateNotionDisplayPage: (id: Id) => navigate(`/notions/${id}`),
    navigateNotionEditionPage: (id: Id) => navigate(`/notions/${id}/edit`),
    navigateNotionEditionSettingsPage: (id: Id) => navigate(`/notions/${id}/edit/settings`),

    navigateGroupFeedPage: (id?: Nullable<Id>) => navigate(`/groups/${id ?? ''}`),

    navigate: (path: string) => navigate(path),
    navigatePreviousPage: () => navigate(-1),
  })
}
