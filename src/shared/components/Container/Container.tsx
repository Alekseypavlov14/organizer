import type { ComponentProps } from 'react'
import styles from './Container.module.css'
import clsx from 'clsx'

interface ContainerProps extends ComponentProps<'div'> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div 
      className={clsx(styles.Container, className)}
      {...props}
    >
      {children}
    </div>
  )
}
