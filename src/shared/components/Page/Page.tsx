import type { ComponentProps } from 'react'
import styles from './Page.module.css'
import clsx from 'clsx'

interface PageProps extends ComponentProps<'div'> {}

export function Page({ className, children, ...props }: PageProps) {
  return (
    <div 
      className={clsx(styles.Page, className)}
      {...props}
    >
      {children}
    </div>
  )
}
