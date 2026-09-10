import { FloatingActions } from '@/shared/components/FloatingActions'
import { FloatingAction } from '@/shared/components/FloatingAction'
import { useNavigation } from '@/app/navigation'
import { PageLayout } from '@/app/layouts'
import { AppHeader } from '@/widgets/AppHeader'
import { Icon } from '@/shared/components/Icon'

export function HomePage() {
  const { navigateNotionFeedPage } = useNavigation()

  return (
    <PageLayout>
      <AppHeader />

      <FloatingActions>
        <FloatingAction onClick={navigateNotionFeedPage}>
          <Icon name="list" size='l' />
        </FloatingAction>
      </FloatingActions>
    </PageLayout>
  )
}
