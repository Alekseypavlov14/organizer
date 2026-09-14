import type { ComponentProps } from 'react'
import styles from './Breadcrumbs.module.css'
import clsx from 'clsx'

interface BreadcrumbsProps extends ComponentProps<'div'> {}

export function Breadcrumbs({ className, children, ...props }: BreadcrumbsProps) {
  return (
    <div 
      className={clsx(styles.Breadcrumbs, className)}
      {...props}
    >
      {children}
    </div>
  )
}
