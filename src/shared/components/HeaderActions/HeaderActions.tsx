import type { ComponentProps } from 'react'
import styles from './HeaderActions.module.css'
import clsx from 'clsx'

interface HeaderActionsProps extends ComponentProps<'div'> {}

export function HeaderActions({ className, children, ...props }: HeaderActionsProps) {
  return (
    <div 
      className={clsx(styles.HeaderActions, className)}
      {...props}
    >
      {children}
    </div>
  )
}
