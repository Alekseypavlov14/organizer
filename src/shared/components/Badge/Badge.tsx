import type { ComponentProps } from 'react'
import { badgeVariantBase, mapBadgeVariantToClassName, type BadgeVariant } from './constants'
import styles from './Badge.module.css'
import clsx from 'clsx'


interface BadgeProps extends ComponentProps<'div'> {
  status?: BadgeVariant
}

export function Badge({ 
  status = badgeVariantBase, 
  className, 
  children, 
  ...props 
}: BadgeProps) {
  return (
    <div 
      className={clsx(styles.Badge, mapBadgeVariantToClassName[status])}
      {...props}
    >
      {children}
    </div>
  )
}
