import type { ComponentProps } from 'react'
import { iconSizeMedium, iconSizeToClassNameMap, type IconSize } from './constants'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import styles from './Icon.module.css'
import clsx from 'clsx'

interface IconProps extends ComponentProps<'svg'> {
  name: IconName
  className?: string
  size?: IconSize
}

export function Icon({
  name,
  className,
  size = iconSizeMedium,
  ...props
}: IconProps) {
  return (
    <DynamicIcon 
      className={clsx(styles.Icon, className, iconSizeToClassNameMap[size])}
      name={name}
      {...props}
    />
  )
}
