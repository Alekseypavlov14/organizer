import { floatingActionVariantBase, mapFloatingActionVariantToClassName, type FloatingActionVariant } from './constants'
import type { ComponentProps } from 'react'
import styles from './FloatingAction.module.css'
import clsx from 'clsx'

interface FloatingActionProps extends ComponentProps<'button'> {
  variant?: FloatingActionVariant
}

export function FloatingAction({ 
  variant = floatingActionVariantBase,
  className, 
  children, 
  ...props 
}: FloatingActionProps) {
  return (
    <button 
      className={clsx(styles.FloatingAction, className, mapFloatingActionVariantToClassName[variant])}
      {...props}
    >
      {children}
    </button>
  )
}
