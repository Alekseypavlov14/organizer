import { greetingDateFormat } from './constants'
import { Palette } from '@/shared/components/Palette'
import { Text } from '@/shared/components/Text'
import styles from './AppGreeting.module.css'

export function AppGreeting() {
  const date = greetingDateFormat(Date.now())

  return (
    <Palette className={styles.AppGreeting}>
      <Text size='s' className={styles.Date}>{date}</Text>
      <Text size='l'>Welcome back!</Text> 
    </Palette>
  )
}
