import { useState, type ComponentProps } from 'react'
import { merge } from '@/shared/utils/functions'
import styles from './Input.module.css'
import clsx from 'clsx'

interface InputProps extends ComponentProps<'input'> {
  value?: string
  onValueChange?: (value: string) => void
  format?: (value: string) => string
}

export function Input({ 
  className,

  value = '',
  onValueChange = () => {},
  format = (value) => value, 
  
  onFocus = () => {},
  onBlur = () => {},

  ...props 
}: InputProps) {
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <div className={clsx(styles.Input, className)}>
      <input
        className={clsx(styles.Control, !focused && styles.Hidden)} 
        onFocus={merge(onFocus, () => setFocused(true))}
        onBlur={merge(onBlur, () => setFocused(false))}
        {...props} 
      />

      <div className={clsx(styles.Label, focused && styles.Hidden)}>
        {format(value)}
      </div>
    </div>
  )
}
