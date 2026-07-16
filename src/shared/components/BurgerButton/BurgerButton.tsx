import type { ComponentProps } from 'react'
import styles from './BurgerButton.module.css'
import clsx from 'clsx'

interface BurgerButtonProps extends Omit<ComponentProps<'div'>, 'children'> {
  isActive?: boolean
}

export function BurgerButton({ className, isActive, ...props }: BurgerButtonProps) {
  return (
    <div 
      className={clsx(styles.BurgerButton, className, isActive && styles.Active)}
      {...props}
    >
      <div />
    </div>
  )
}
