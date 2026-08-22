import type { Option } from '@/shared/types/option'
import { useRef, useState, type ComponentProps, type MouseEvent } from 'react'
import { Flex, flexAlignCenter, flexGapSmall } from '../Flex'
import { useOutsideClick } from '@/shared/hooks/useOutsideClick'
import { Icon } from '../Icon'
import styles from './Select.module.css'
import clsx from 'clsx'

interface SelectProps<T> extends ComponentProps<'div'> {
  value: T
  options?: Option<T>[]

  onValueChange?: (value: T) => void
  onValueReset?: () => void

  format?: (value: Option<T>) => string
  placeholder?: string
}

export function Select<T>({
  value,
  options = [],

  onValueChange = () => {},
  onValueReset = () => {},

  format = (value) => value.label,
  placeholder = '',

  className,
  ...props
}: SelectProps<T>) {
  const [isOpened, setOpened] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useOutsideClick(selectRef, () => setOpened(false))

  const selectedOption = options.find(option => option.value === value) ?? null
  const isOptionSelected = selectedOption !== null
  
  const selectLabel = selectedOption ? format(selectedOption) : placeholder
  
  function toggleSelect() {
    setOpened(isOpened => !isOpened)
  }
  function resetHandler(e: MouseEvent<SVGSVGElement>) {
    e.stopPropagation()
    onValueReset()
  }

  return (
    <div 
      className={clsx(styles.Select, className, isOpened && styles.Opened, !isOptionSelected && styles.Empty)}
      onClick={toggleSelect}
      ref={selectRef}
      {...props}
    >
      <div className={styles.Control}>
        <div className={styles.Label}>{selectLabel}</div>
        
        <Flex align={flexAlignCenter} gap={flexGapSmall}>
          <Icon name='chevron-down' className={styles.Chevron} />
  
          {isOptionSelected ? (
            <Icon 
              className={styles.Cross} 
              onClick={resetHandler}
              name='x' 
            />
          ) : null}
        </Flex>
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
