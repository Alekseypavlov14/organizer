import type { ComponentProps, CSSProperties } from 'react'
import type { ColorModel } from '@/entities/shared'
import { colorIndicatorSizeMedium, mapColorIndicatorSizeToClassName, type ColorIndicatorSize } from './constants'
import styles from './ColorIndicator.module.css'
import clsx from 'clsx'

interface ColorIndicatorProps extends ComponentProps<'div'> {
  value: ColorModel
  size?: ColorIndicatorSize
}

export function ColorIndicator({ 
  value, 
  size = colorIndicatorSizeMedium,
  ...props
}: ColorIndicatorProps) {
  const injection = { '--color': value.value } as CSSProperties

  const classNames = clsx(styles.ColorIndicator, mapColorIndicatorSizeToClassName[size])

  return (
    <div 
      className={classNames} 
      style={injection}
      {...props}
    />
  )
}
