import type { ComponentProps } from 'react'
import { FlexDirectionHorizontal, FlexGapSmall, mapFlexDirectionToClassName, mapFlexGapToClassName, type FlexDirection, type FlexGap } from './constants'
import styles from './Flex.module.css'
import clsx from 'clsx'

interface FlexProps extends ComponentProps<'div'> {
  direction?: FlexDirection
  gap?: FlexGap
}

export function Flex({
  direction = FlexDirectionHorizontal,
  gap = FlexGapSmall,

  className,
  children,
  ...props
}: FlexProps) {
  return (
    <div 
      className={clsx(styles.Flex, className, mapFlexDirectionToClassName[direction], mapFlexGapToClassName[gap])}
      {...props}
    >
      {children}
    </div>
  )
}
 