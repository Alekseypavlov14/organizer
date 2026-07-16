import { useId, type ChangeEvent } from 'react'
import { LucideCheck } from 'lucide-react'
import clsx from 'clsx'
import styles from './Checkbox.module.css'

interface CheckboxProps {
  id?: string
  className?: string
  isChecked?: boolean
  onChange?: (isChecked: boolean) => void
}

export function Checkbox({ 
  id,
  className, 
  isChecked, 
  onChange = () => {},
}: CheckboxProps) {
  const generatedId = useId()

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.checked)
  }

  const controlId = id ? id : generatedId

  return (
    <label 
      className={clsx(styles.Checkbox, className)}
      htmlFor={controlId} 
    >
      <input 
        id={controlId}
        className={styles.Control}
        onChange={changeHandler}
        checked={isChecked}
        type='checkbox' 
      />

      <div className={styles.Fill} />

      <LucideCheck className={styles.Check} />
    </label>
  )
}
