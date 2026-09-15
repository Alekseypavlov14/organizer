import { useNavigation } from '@/app/navigation'
import { Logo } from '@/shared/components/Logo'

export function AppLogo() {
  const { navigateHomePage } = useNavigation()

  return (
    <Logo onClick={navigateHomePage} />
  )
}
