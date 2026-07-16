import type { ComponentProps } from 'react'
import styles from './Main.module.css'
import clsx from 'clsx'

interface MainProps extends ComponentProps<'main'> {}

export function Main({ className, children, ...props }: MainProps) {
  return (
    <main 
      className={clsx(styles.Main, className)}
      {...props}
    >
      {children}
    </main>
  )
}
