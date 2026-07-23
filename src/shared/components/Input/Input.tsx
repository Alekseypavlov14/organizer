import { useEffect, useId, useState, type ComponentProps } from 'react'
import { merge } from '@/shared/utils/functions'
import styles from './Input.module.css'
import clsx from 'clsx'

interface InputProps extends ComponentProps<'input'> {
  value?: string
  onValueChange?: (value: string) => void

  validate?: (value: string) => boolean
  format?: (value: string) => string

  hint?: string
}

export function Input({ 
  value = '',
  onValueChange = () => {},
  
  validate = () => true,
  format = (value) => value, 

  placeholder = '',
  hint = '',
  
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  
  className,
  ...props 
}: InputProps) {
  const [internalValue, setInternalValue] = useState<string>(value)
  const [focused, setFocused] = useState<boolean>(false)

  useEffect(() => setInternalValue(value), [value])
  const internalId = useId()

  const changeHandler = merge(onChange, (e) => {
    const value = e.target.value
    setInternalValue(value)
  })

  const focusHandler = merge(onFocus, () => {
    setInternalValue(value)
    setFocused(true)
  })

  const blurHandler = merge(onFocus, () => {
    if (validate(internalValue)) onValueChange(internalValue)
    setFocused(false)
  })

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
        value={internalValue}
        className={styles.Control} 
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        placeholder={hint}
        {...props} 
      />

      <div className={styles.Label}>
        {displayValue}
      </div>
    </label>
  )
}
