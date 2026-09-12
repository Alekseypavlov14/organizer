import type { CSSProperties } from 'react'
import type { ColorModel } from '@/entities/shared'
import styles from './ColorIndicator.module.css'

interface ColorIndicatorProps {
  color: ColorModel
  onClick?: () => void
}

export function ColorIndicator({ 
  color, 
  onClick = () => {} 
}: ColorIndicatorProps) {
  const injection = { '--color': color.value } as CSSProperties

  return (
    <div 
      className={styles.ColorIndicator} 
      onClick={onClick}
      style={injection}
    />
  )
}
