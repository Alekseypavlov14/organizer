import { inputVariantBase, mapInputVariantToClassName, type InputVariant } from './constants'
import { useEffect, useId, useRef, useState, type ComponentProps } from 'react'
import { getTextSizeModifier, type TextSize } from '../Text'
import { useEnterPressed } from '@/shared/hooks/useEnterPressed'
import { merge } from '@/shared/utils/functions'
import styles from './Input.module.css'
import clsx from 'clsx'

interface InputProps extends ComponentProps<'input'> {
  value?: string
  onValueChange?: (value: string) => void

  validate?: (value: string) => boolean
  format?: (value: string) => string
  hint?: string

  variant?: InputVariant
  textSize?: TextSize
}

export function Input({ 
  value = '',
  onValueChange = () => {},
  
  validate = () => true,
  format = (value) => value,

  placeholder = '',
  hint = '',

  variant = inputVariantBase,
  textSize,
  
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
    mapInputVariantToClassName[variant],
    getTextSizeModifier(textSize),
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
