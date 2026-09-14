import { Flex, flexGapMedium, flexJustifyEnd } from '@/shared/components/Flex'
import type { ComponentProps } from 'react'
import styles from './ModalActions.module.css'

interface ModalActionsProps extends ComponentProps<'div'> {}

export function ModalActions({ className, children, ...props }: ModalActionsProps) {
  return (
    <Flex 
      className={styles.ModalActions}
      justify={flexJustifyEnd}
      gap={flexGapMedium}
      {...props}
    >
      {children}
    </Flex>
  )
}
