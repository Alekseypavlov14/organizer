import type { ComponentProps } from 'react'
import { getTextSizeModifier, type TextSize } from './constants'
import styles from './Text.module.css'
import clsx from 'clsx'

interface TextProps extends ComponentProps<'div'> {
  size?: TextSize
}

export function Text({ 
  size,
  className, 
  children, 
  ...props 
}: TextProps) {
  return (
    <div 
      className={clsx(styles.Text, getTextSizeModifier(size))}
      {...props}
    >
      {children}
    </div>
  )
}
