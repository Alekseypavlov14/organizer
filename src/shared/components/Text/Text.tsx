import type { ComponentProps } from 'react'
import { mapTextSizeToClassName, textSizeMedium, type TextSize } from './constants'
import styles from './Text.module.css'
import clsx from 'clsx'

interface TextProps extends ComponentProps<'div'> {
  size?: TextSize
}

export function Text({ 
  size = textSizeMedium,
  className, 
  children, 
  ...props 
}: TextProps) {
  return (
    <div 
      className={clsx(styles.Text, mapTextSizeToClassName[size])}
      {...props}
    >
      {children}
    </div>
  )
}
