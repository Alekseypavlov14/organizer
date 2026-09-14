import type { ComponentProps } from 'react'
import { Flex, flexAlignCenter, type FlexGap } from '../Flex'
import styles from './Breadcrumbs.module.css'
import clsx from 'clsx'

interface BreadcrumbsProps extends ComponentProps<'div'> {
  gap?: FlexGap
}

export function Breadcrumbs({ 
  gap,
  className, 
  children, 
  ...props 
}: BreadcrumbsProps) {
  return (
    <Flex 
      className={clsx(styles.Breadcrumbs, className)}
      align={flexAlignCenter}
      gap={gap}
      {...props}
    >
      {children}
    </Flex>
  )
}
