import type { ComponentProps } from 'react'
import styles from './Field.module.css'
import clsx from 'clsx'

interface FieldProps extends ComponentProps<'div'> {}

export function Field({ className, children, ...props}: FieldProps) {
  return (
    <div 
      className={clsx(styles.Field, className)}
      {...props}
    >
      {children}
    </div>
  )
}
