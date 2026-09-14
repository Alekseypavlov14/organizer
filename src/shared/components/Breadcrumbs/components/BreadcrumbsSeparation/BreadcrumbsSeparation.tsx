import type { ComponentProps } from 'react'
import { defaultContent } from './constants'
import styles from './BreadcrumbsSeparation.module.css'
import clsx from 'clsx'

interface BreadcrumbsSeparationProps extends ComponentProps<'div'> {}

export function BreadcrumbsSeparation({ 
  className, 
  children = defaultContent, 
  ...props 
}: BreadcrumbsSeparationProps) {
  return (
    <div 
      className={clsx(styles.BreadcrumbsSeparation, className)}
      {...props}
    >
      {children}
    </div>
  )
}
