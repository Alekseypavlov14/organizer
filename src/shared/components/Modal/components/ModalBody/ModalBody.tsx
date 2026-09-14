import type { ComponentProps } from 'react'
import { Flex, flexDirectionVertical, flexGapMedium, type FlexGap } from '@/shared/components/Flex'
import styles from './ModalBody.module.css'
import clsx from 'clsx'

interface ModalBodyProps extends ComponentProps<'div'> {
  gap?: FlexGap
}

export function ModalBody({ 
  gap = flexGapMedium,
  className, 
  children, 
  ...props 
}: ModalBodyProps) {
  return (
    <Flex 
      className={clsx(styles.ModalBody, className)}
      direction={flexDirectionVertical}
      gap={gap}
      {...props}
    >
      {children}
    </Flex>
  )
}
