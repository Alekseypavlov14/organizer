import type { ComponentProps, MouseEvent } from 'react'
import styles from './StopPropagation.module.css'
import clsx from 'clsx'

interface StopPropagationProps extends ComponentProps<'div'> {}

export function StopPropagation({ 
  className,
  children, 

  onClick = () => {},

  ...props
}: StopPropagationProps) {
  function clickHandler(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    onClick(e)
  }

  return (
    <div 
      className={clsx(styles.StopPropagation, className)}
      onClick={clickHandler}
      {...props}
    >
      {children}
    </div>
  )
}
