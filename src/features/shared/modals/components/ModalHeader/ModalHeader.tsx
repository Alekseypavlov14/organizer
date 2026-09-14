import type { ComponentProps } from 'react'
import { Flex, flexGapMedium, flexJustifySpaceBetween } from '@/shared/components/Flex'
import styles from './ModalHeader.module.css'
import clsx from 'clsx'

interface ModalHeaderProps extends ComponentProps<'div'> {}

export function ModalHeader({ className, children, ...props }: ModalHeaderProps) {
  return (
    <Flex 
      className={clsx(styles.ModalHeader, className)}
      justify={flexJustifySpaceBetween}
      gap={flexGapMedium}
      {...props}
    >
      {children}
    </Flex>
  )
}
