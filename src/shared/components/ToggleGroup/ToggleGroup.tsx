import type { Option } from '@/shared/types/option'
import { Palette } from '../Palette'
import styles from './ToggleGroup.module.css'
import clsx from 'clsx'

interface ToggleGroupProps<T> {
  options?: Option<T>[]
  onChange?: (value: T) => void
  value?: T
}

export function ToggleGroup<T>({
  options = [],
  onChange = () => {},
  value
}: ToggleGroupProps<T>) {
  return (
    <Palette className={styles.ToggleGroup}>
      {options.map((option, index) => (
        <div 
          className={clsx(styles.Option, option.value === value && styles.Active)}
          onClick={() => onChange(option.value)}
          key={index}
        >
          {option.label}
        </div>
      ))}
    </Palette>
  )
}
