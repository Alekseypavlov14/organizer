import type { ComponentProps } from 'react'
import { badgeStatusBase, mapBadgeStatusToClassName, type BadgeStatus } from './constants'
import styles from './Badge.module.css'
import clsx from 'clsx'

interface BadgeProps extends ComponentProps<'div'> {
  status?: BadgeStatus
}

export function Badge({ 
  status = badgeStatusBase, 
  className, 
  children, 
  ...props 
}: BadgeProps) {
  return (
    <div 
      className={clsx(styles.Badge, mapBadgeStatusToClassName[status])}
      {...props}
    >
      {children}
    </div>
  )
}
