import { notificationsSelector, useNotificationsStore } from '../../notifications.store'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { mapNotificationStatusToClassName } from './constants'
import { Container } from '@/shared/components/Container'
import styles from './Notifications.module.css'
import clsx from 'clsx'

export function Notifications() {
  const notifications = useNotificationsStore(notificationsSelector)

  return (
    <div className={styles.Notifications}>
      <Container>
        <Flex
          direction={flexDirectionVertical}
          gap={flexGapSmall}
        >
          {notifications.map(notification => (
            <div 
              className={clsx(
                styles.Notification,
                mapNotificationStatusToClassName[notification.status]
              )}
              key={notification.id}
            >
              {notification.message}
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  )
}
