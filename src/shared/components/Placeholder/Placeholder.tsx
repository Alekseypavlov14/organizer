import type { ComponentProps } from 'react'
import styles from './Placeholder.module.css'
import clsx from 'clsx'

interface PlaceholderProps extends ComponentProps<'div'> {}

export function Placeholder({ className, children, ...props }: PlaceholderProps) {
  return (
    <div 
      className={clsx(styles.Placeholder, className)}
      {...props}
    >
      {children}
    </div>
  )
}
