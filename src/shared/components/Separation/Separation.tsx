import type { ComponentProps } from 'react'
import { mapSeparationDirectionToClassName, separationDirectionVertical, type SeparationDirection } from './constants'
import styles from './Separation.module.css'
import clsx from 'clsx'

interface SeparationProps extends ComponentProps<'div'> {
  direction?: SeparationDirection
}

export function Separation({ 
  direction = separationDirectionVertical,
  className, 
  children, 
  ...props 
}: SeparationProps) {
  return (
    <div 
      className={clsx(styles.Separation, mapSeparationDirectionToClassName[direction])}
      {...props}
    >
      {children}
    </div>
  )
}
