import { useId, type ComponentProps } from 'react'
import { merge } from '@/shared/utils/functions'
import styles from './Switch.module.css'
import clsx from 'clsx'

interface SwitchProps extends ComponentProps<'input'> {
  onCheckedChange?: (checked: boolean) => void
}

export function Switch({
  checked,
  onCheckedChange = () => {},
  onChange = () => {},
  
  className,
  ...props
}: SwitchProps) {
  const internalId = useId()

  const changeHandler = merge(onChange, (e) => onCheckedChange(e.target.checked))

  return (
    <label 
      className={clsx(styles.Switch, checked && styles.Checked, className)}
      htmlFor={internalId} 
    >
      <input 
        id={internalId}
        className={styles.Control}
        onChange={changeHandler}
        checked={checked}
        type='checkbox' 
        hidden
        {...props} 
      />

      <div className={styles.Content}>
        <div className={styles.Dot} />
      </div>
    </label>
  )
}
