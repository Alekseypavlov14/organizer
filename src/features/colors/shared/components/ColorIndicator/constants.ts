import styles from './ColorIndicator.module.css'

export type ColorIndicatorSize = 's' | 'm' | 'l' | 'xl'

export const colorIndicatorSizeSmall: ColorIndicatorSize = 's'
export const colorIndicatorSizeMedium: ColorIndicatorSize = 'm'
export const colorIndicatorSizeLarge: ColorIndicatorSize = 'l'
export const colorIndicatorSizeExtraLarge: ColorIndicatorSize = 'xl'

export const mapColorIndicatorSizeToClassName: Record<ColorIndicatorSize, string> = {
  s: styles.Small,
  m: styles.Medium,
  l: styles.Large,
  xl: styles.ExtraLarge,
}
