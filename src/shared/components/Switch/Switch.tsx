import type { ComponentProps } from 'react'
import styles from './Switch.module.css'
import clsx from 'clsx'

interface SwitchProps extends ComponentProps<'input'> {}

export function Switch({
  className,
  ...props
}: SwitchProps) {
  return (
    <div className={clsx(styles.Switch, className)}>
      <input className={styles.Control} {...props} />

      <div className={styles.Content}>
        <div className={styles.Dot} />
      </div>
    </div>
  )
}
