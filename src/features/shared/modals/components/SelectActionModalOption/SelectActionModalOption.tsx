import { Button, type ButtonProps } from '@/shared/components/Button'
import styles from './SelectActionModalOption.module.css'
import clsx from 'clsx'

interface SelectActionModalOptionProps extends ButtonProps {}

export function SelectActionModalOption({
  className,
  children,
  ...props
}: SelectActionModalOptionProps) {
  return (
    <Button 
      className={clsx(styles.SelectActionModalOption, className)}
      block
      {...props}
    >
      {children}
    </Button>
  )
}
