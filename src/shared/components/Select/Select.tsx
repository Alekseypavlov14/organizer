import { useRef, useState, type ComponentProps, type ReactNode } from 'react'
import { LucideChevronDown } from 'lucide-react'
import { useOutsideClick } from '@/shared/hooks/use-outside-click'
import styles from './Select.module.css'
import clsx from 'clsx'

export interface Option<T> {
  label: ReactNode
  value: T
}

interface SelectProps<T> extends Omit<ComponentProps<'div'>, 'onChange'> {
  value: T
  options: Option<T>[]
  onChange?: (value: T) => void
}

export function Select<T>({
  value,
  options,
  onChange = () => {},

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

  const selectLabel = selectedOption?.label ?? 'Choose'

  return (
    <div 
      className={clsx(styles.Select, className, isOpened && styles.Opened)}
      onClick={toggleSelect}
      ref={selectRef}
      {...props}
    >
      <div className={styles.Control}>
        <div className={styles.Label}>{selectLabel}</div>
        <LucideChevronDown />
      </div>

      <div className={styles.Dropdown}>
        {options.map((option, index) => (
          <div 
            onClick={() => onChange(option.value)}
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
