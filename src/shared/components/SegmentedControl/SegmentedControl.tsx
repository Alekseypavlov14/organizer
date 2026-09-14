import type { Option } from '@/shared/types/option'
import { Palette } from '../Palette'
import styles from './SegmentedControl.module.css'
import clsx from 'clsx'

interface SegmentedControlProps<T> {
  options?: Option<T>[]
  onChange?: (value: T) => void
  value?: T
}

export function SegmentedControl<T>({ 
  options = [],
  onChange = () => {},
  value,
}: SegmentedControlProps<T>) {
  return (
    <Palette className={styles.SegmentedControl}>
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
