import type { ReactNode } from 'react'
import styles from './StopPropagation.module.css'

interface StopPropagationProps {
  children: ReactNode
}

export function StopPropagation({ children }: StopPropagationProps) {
  return (
    <div 
      className={styles.StopPropagation}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}
