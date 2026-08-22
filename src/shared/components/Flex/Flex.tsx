import type { FlexAlign, FlexDirection, FlexGap, FlexJustify } from './constants'
import type { ComponentProps } from 'react'
import { flexAlignStretch, flexDirectionHorizontal, flexGapZero, flexJustifyStart, mapFlexAlignToClassName, mapFlexDirectionToClassName, mapFlexGapToClassName, mapFlexJustifyToClassName } from './constants'
import styles from './Flex.module.css'
import clsx from 'clsx'

interface FlexProps extends ComponentProps<'div'> {
  direction?: FlexDirection
  align?: FlexAlign
  justify?: FlexJustify
  gap?: FlexGap
}

export function Flex({
  direction = flexDirectionHorizontal,
  align = flexAlignStretch,
  justify = flexJustifyStart,
  gap = flexGapZero,

  className,
  children,
  ...props
}: FlexProps) {
  return (
    <div
      className={clsx(
        styles.Flex,
        mapFlexDirectionToClassName[direction],
        mapFlexAlignToClassName[align],
        mapFlexJustifyToClassName[justify],
        mapFlexGapToClassName[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}