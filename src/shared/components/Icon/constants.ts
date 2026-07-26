import styles from './Icon.module.css'

export type IconSize = 's' | 'm' | 'l'

export const iconSizeSmall: IconSize = 's'
export const iconSizeMedium: IconSize = 'm'
export const iconSizeLarge: IconSize = 'l'

export const iconSizeToClassNameMap: Record<IconSize, string> = {
  s: styles.SizeSmall,
  m: styles.SizeMedium,
  l: styles.SizeLarge,
}
