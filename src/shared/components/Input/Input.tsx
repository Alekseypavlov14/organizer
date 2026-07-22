import { useId, useState, type ComponentProps } from 'react'
import { merge } from '@/shared/utils/functions'
import styles from './Input.module.css'
import clsx from 'clsx'

interface InputProps extends ComponentProps<'input'> {
  value?: string
  onValueChange?: (value: string) => void
  format?: (value: string) => string
}

export function Input({ 
  value = '',
  onValueChange = () => {},
  
  format = (value) => value, 
  placeholder = '',
  
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  
  className,
  ...props 
}: InputProps) {
  const internalId = useId()

  const [focused, setFocused] = useState<boolean>(false)

  const changeHandler = merge(onChange, (e) => onValueChange(e.target.value))
  const focusHandler = merge(onFocus, () => setFocused(true))
  const blurHandler = merge(onFocus, () => setFocused(false))

  const inputClassNames = clsx(
    styles.Input, 
    focused && styles.Focused, 
    value.length === 0 && styles.Empty, 
    className
  )

  const displayValue = value.length ? format(value) : placeholder

  return (
    <label 
      className={inputClassNames}
      htmlFor={internalId} 
    >
      <input
        id={internalId}
        className={styles.Control} 
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        {...props} 
      />

      <div className={styles.Label}>
        {displayValue}
      </div>
    </label>
  )
}
