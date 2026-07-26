import { iconSizeMedium, iconSizeToClassNameMap, type IconSize } from './constants'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import styles from './Icon.module.css'
import clsx from 'clsx'

interface IconProps {
  name: IconName
  className?: string
  size?: IconSize
}

export function Icon({
  name,
  className,
  size = iconSizeMedium,
}: IconProps) {
  return (
    <DynamicIcon 
      className={clsx(styles.Icon, className, iconSizeToClassNameMap[size])}
      name={name}
    />
  )
}
