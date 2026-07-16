import type { ComponentProps } from 'react'
import styles from './Wrapper.module.css'
import clsx from 'clsx'

interface WrapperProps extends ComponentProps<'div'> {}

export function Wrapper({ className, children, ...props }: WrapperProps) {
  return (
    <div 
      className={clsx(styles.Wrapper, className)}
      {...props}
    >
      {children}
    </div>
  )
}
