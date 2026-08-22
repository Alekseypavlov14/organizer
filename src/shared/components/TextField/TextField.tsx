import type { ChangeEvent, ComponentProps } from 'react'
import styles from './TextField.module.css'
import clsx from 'clsx'

interface TextFieldProps extends ComponentProps<'textarea'> {
  onValueChange?: (value: string) => void
}

export function TextField({ 
  value,
  onChange = () => {},
  onValueChange = () => {},

  className,
  ...props 
}: TextFieldProps) {
  function changeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    onValueChange(e.target.value)
    onChange(e)
  }

  return (
    <textarea 
      className={clsx(styles.TextField, className)}
      onChange={changeHandler}
      {...props}
    />
  )
}
