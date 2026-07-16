import type { ComponentProps } from 'react'
import styles from './FieldLabel.module.css'
import clsx from 'clsx'

interface FieldLabelProps extends ComponentProps<'div'> {}

export function FieldLabel({ className, children, ...props }: FieldLabelProps) {
  return (
    <div 
      className={clsx(styles.FieldLabel, className)}
      {...props}
    >
      {children}
    </div>
  )
}
