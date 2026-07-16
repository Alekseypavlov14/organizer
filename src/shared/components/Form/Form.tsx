import type { ComponentProps } from 'react'
import styles from './Form.module.css'
import clsx from 'clsx'

interface FormProps extends ComponentProps<'div'> {}

export function Form({ className, children, ...props }: FormProps) {
  return (
    <div 
      className={clsx(styles.Form, className)}
      {...props}
    >
      {children}
    </div>
  )
}
