import { Palette } from '@/shared/components/Palette'
import { Text } from '@/shared/components/Text'
import styles from './AppGreeting.module.css'

export function AppGreeting() {
  return (
    <Palette className={styles.AppGreeting}>
      <Text size='s' className={styles.Date}>Saturday, September 12</Text>
      <Text size='l'>Welcome back!</Text> 
    </Palette>
  )
}
