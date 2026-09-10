import type { ChangeEvent, ComponentProps } from 'react'
import { mapTextFieldVariantToClassName, textFieldVariantBase, type TextFieldVariant } from './constants'
import { type TextSize,getTextSizeModifier } from '../Text/constants'
import styles from './TextField.module.css'
import clsx from 'clsx'

interface TextFieldProps extends ComponentProps<'textarea'> {
  onValueChange?: (value: string) => void
  variant?: TextFieldVariant
  textSize?: TextSize
}

export function TextField({ 
  onChange = () => {},
  onValueChange = () => {},
  variant = textFieldVariantBase,

  className,
  textSize,

  ...props 
}: TextFieldProps) {
  function changeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    onValueChange(e.target.value)
    onChange(e)
  }

  const classNames = clsx(
    styles.TextField, 
    mapTextFieldVariantToClassName[variant],
    getTextSizeModifier(textSize),
    className, 
  )

  return (
    <textarea 
      className={classNames}
      onChange={changeHandler}
      {...props}
    />
  )
}
