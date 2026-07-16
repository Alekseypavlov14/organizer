import type { ComponentProps } from 'react'
import styles from './Input.module.css'
import clsx from 'clsx'

interface InputProps extends ComponentProps<'input'> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <div className={clsx(styles.Input, className)}>
      <input {...props} />
    </div>
  )
}
