import type { ComponentProps } from 'react'
import { Container } from '../Container'
import styles from './Header.module.css'
import clsx from 'clsx'

interface HeaderProps extends ComponentProps<'header'> {}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header 
      className={clsx(styles.Header, className)}
      {...props}
    >
      <Container className={styles.Container}>
        {children}
      </Container>
    </header>
  )
}
