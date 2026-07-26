import { useId, type ComponentProps } from 'react'
import { iconSizeSmall } from '../Icon/constants'
import { merge } from '@/shared/utils/functions'
import { Icon } from '../Icon'
import clsx from 'clsx'
import styles from './Checkbox.module.css'

interface CheckboxProps extends ComponentProps<'input'> {
  onCheckedChange?: (checked: boolean) => void
}

export function Checkbox({ 
  checked,
  onCheckedChange = () => {},
  onChange = () => {},

  className,
  ...props
}: CheckboxProps) {
  const internalId = useId()

  const changeHandler = merge(onChange, (e) => onCheckedChange(e.target.checked))

  return (
    <label 
      className={clsx(styles.Checkbox, checked && styles.Checked, className)}
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

      <div className={styles.Fill}>
        <Icon 
          name='check' 
          className={styles.Check} 
          size={iconSizeSmall}
        />  
      </div>
    </label>
  )
}
