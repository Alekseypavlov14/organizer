import type { ComponentProps } from 'react'
import styles from './BreadcrumbsItem.module.css'
import clsx from 'clsx'

interface BreadcrumbsItemProps extends ComponentProps<'div'> {}

export function BreadcrumbsItem({ className, children, ...props }: BreadcrumbsItemProps) {
  return (
    <div 
      className={clsx(styles.BreadcrumbsItem, className)}
      {...props}
    >
      {children}
    </div>
  )
}
