import { useRef, useState, type ComponentProps } from 'react'
import { LucideChevronDown } from 'lucide-react'
import { useOutsideClick } from '@/shared/hooks/useOutsideClick'
import styles from './Select.module.css'
import clsx from 'clsx'

export interface Option<T> {
  label: string
  value: T
}

interface SelectProps<T> extends ComponentProps<'div'> {
  value: T
  options?: Option<T>[]
  onValueChange?: (value: T) => void

  format?: (value: Option<T>) => string
  placeholder?: string
}

export function Select<T>({
  value,
  options = [],
  onValueChange = () => {},

  format = (value) => value.label,
  placeholder = '',

  className,
  ...props
}: SelectProps<T>) {
  const [isOpened, setOpened] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useOutsideClick(selectRef, () => setOpened(false))

  function toggleSelect() {
    setOpened(isOpened => !isOpened)
  }

  const selectedOption = options.find(option => option.value === value)
  const selectLabel = selectedOption ? format(selectedOption) : placeholder

  return (
    <div 
      className={clsx(styles.Select, className, isOpened && styles.Opened)}
      onClick={toggleSelect}
      ref={selectRef}
      {...props}
    >
      <div className={styles.Control}>
        <div className={styles.Label}>{selectLabel}</div>
        <LucideChevronDown className={styles.Chevron} />
      </div>

      <div className={styles.Dropdown}>
        {options.map((option, index) => (
          <div 
            onClick={() => onValueChange(option.value)}
            className={styles.Option}
            key={index}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  )
}
