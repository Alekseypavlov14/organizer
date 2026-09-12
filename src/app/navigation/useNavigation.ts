import type { Id } from '@/shared/types/id'
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

    navigateGroupFeedPage: () => navigate('/groups'),
    navigateGroupCreationPage: () => navigate('/groups/create'),
    navigateGroupDisplayPage: (id: Id) => navigate(`/groups/${id}`),
    navigateGroupEditionPage: (id: Id) => navigate(`/groups/${id}/edit`),
    navigateGroupEditionSettingsPage: (id: Id) => navigate(`/groups/${id}/edit/settings`),

    navigate: (path: string) => navigate(path),
    navigatePreviousPage: () => navigate(-1),
    navigateBeforePreviousPage: () => navigate(-2),
  })
}
