import type { ChangeEvent, ComponentProps } from 'react'
import { mapTextFieldVariantToClassName, textFieldVariantBase, type TextFieldVariant } from './constants'
import styles from './TextField.module.css'
import clsx from 'clsx'

interface TextFieldProps extends ComponentProps<'textarea'> {
  onValueChange?: (value: string) => void
  variant?: TextFieldVariant
}

export function TextField({ 
  value,
  onChange = () => {},
  onValueChange = () => {},
  variant = textFieldVariantBase,

  className,
  ...props 
}: TextFieldProps) {
  function changeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    onValueChange(e.target.value)
    onChange(e)
  }

  return (
    <textarea 
      className={clsx(styles.TextField, className, mapTextFieldVariantToClassName[variant])}
      onChange={changeHandler}
      {...props}
    />
  )
}
