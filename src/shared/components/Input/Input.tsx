import { useEffect, useId, useRef, useState, type ComponentProps } from 'react'
import { merge } from '@/shared/utils/functions'
import styles from './Input.module.css'
import clsx from 'clsx'
import { useEnterPressed } from '@/shared/hooks/useEnterPressed'

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

  const inputRef = useRef<HTMLInputElement>(null)
  const internalId = useId()

  useEffect(() => setInternalValue(value), [value])
  useEnterPressed(inputRef, updateHandler)

  const internalChangeHandler = merge(onChange, (e) => {
    const value = e.target.value
    setInternalValue(value)
  })

  const focusHandler = merge(onFocus, () => {
    setInternalValue(value)
    setFocused(true)
  })

  function updateHandler() {
    if (validate(internalValue)) onValueChange(internalValue)
    setFocused(false)
  }

  const blurHandler = merge(onFocus, updateHandler)

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
        onChange={internalChangeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        placeholder={hint}
        ref={inputRef}
        {...props} 
      />

      <div className={styles.Label}>
        {displayValue}
      </div>
    </label>
  )
}
