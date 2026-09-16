import type { ComponentProps } from 'react'
import { buttonSizeMedium, buttonVariantBase, mapButtonSizeToClassName, mapButtonVariantToClassName, type ButtonSize, type ButtonVariant } from './constants'
import styles from './Button.module.css'
import clsx from 'clsx'

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
  block?: boolean
}

export function Button({
  variant = buttonVariantBase,
  size = buttonSizeMedium,
  block,

  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button 
      className={clsx(
        styles.Button, 
        className, 
        mapButtonVariantToClassName[variant],
        mapButtonSizeToClassName[size],
        block && styles.Block,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
