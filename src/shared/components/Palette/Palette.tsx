import type { ComponentProps } from 'react'
import styles from './Palette.module.css'
import clsx from 'clsx'

interface PaletteProps extends ComponentProps<'div'> {}

export function Palette({ className, children, ...props }: PaletteProps) {
  return (
    <div 
      className={clsx(styles.Palette, className)}
      {...props}
    >
      {children}
    </div>
  )
}
