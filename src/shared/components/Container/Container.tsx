import type { ComponentProps } from 'react'
import styles from './Container.module.css'
import clsx from 'clsx'

interface ContainerProps extends ComponentProps<'div'> {
  stretch?: boolean
}

export function Container({ 
  stretch,
  className, 
  children, 
  ...props 
}: ContainerProps) {
  return (
    <div 
      className={clsx(styles.Container, className, stretch && styles.Stretch)}
      {...props}
    >
      {children}
    </div>
  )
}
