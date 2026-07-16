import type { ComponentProps } from 'react'
import styles from './FloatingActionButton.module.css'
import clsx from 'clsx'

interface FloatingActionButtonProps extends ComponentProps<'button'> {}

export function FloatingActionButton({ className, children, ...props }: FloatingActionButtonProps) {
  return (
    <button 
      className={clsx(styles.FloatingActionButton, className)}
      {...props}
    >
      {children}
    </button>
  )
}
