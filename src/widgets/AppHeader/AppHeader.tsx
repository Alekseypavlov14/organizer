import { Header } from '@/shared/components/Header'
import styles from './AppHeader.module.css'
import { Logo } from '@/shared/components/Logo'

interface AppHeaderProps {}

export function AppHeader({}: AppHeaderProps) {
  return (
    <Header className={styles.AppHeader}>
      <Logo />
    </Header>
  )
}
