import type { ComponentProps } from 'react'
import styles from './FloatingActions.module.css'
import clsx from 'clsx'

interface FloatingActionsProps extends ComponentProps<'div'> {}

export function FloatingActions({ className, children, ...props }: FloatingActionsProps) {
  return (
    <div 
      className={clsx(styles.FloatingActions, className)} 
      {...props}
    >
      {children}
    </div>
  )
}
