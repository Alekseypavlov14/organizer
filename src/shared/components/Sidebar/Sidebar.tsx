import type { ComponentProps } from 'react'
import styles from './Sidebar.module.css'
import clsx from 'clsx'

interface SidebarProps extends ComponentProps<'div'> {
  isOpened?: boolean
}

export function Sidebar({ className, children, isOpened, ...props }: SidebarProps) {
  return (
    <div 
      className={clsx(styles.Sidebar, className, isOpened && styles.Opened)}
      {...props}
    >
      {children}
    </div>
  )
}
