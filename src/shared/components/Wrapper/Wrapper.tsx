import { mapWrapperVariantToClassName, wrapperVariantBase, type WrapperVariant } from './constants'
import type { ComponentProps } from 'react'
import styles from './Wrapper.module.css'
import clsx from 'clsx'

interface WrapperProps extends ComponentProps<'div'> {
  variant?: WrapperVariant
}

export function Wrapper({
  variant = wrapperVariantBase, 
  className, 
  children,
  ...props 
}: WrapperProps) {
  return (
    <div 
      className={clsx(styles.Wrapper, className, mapWrapperVariantToClassName[variant])}
      {...props}
    >
      {children}
    </div>
  )
}
