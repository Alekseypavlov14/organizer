import styles from './Text.module.css'

export type TextSize = 's' | 'm' | 'l' | 'xl'

export const textSizeSmall: TextSize = 's'
export const textSizeMedium: TextSize = 'm'
export const textSizeLarge: TextSize = 'l'
export const textSizeExtraLarge: TextSize = 'xl'

export const mapTextSizeToClassName: Record<TextSize, string> = {
  s: styles.TextSmall,
  m: styles.TextMedium,
  l: styles.TextLarge,
  xl: styles.TextExtraLarge,
}

export function getTextSizeModifier(size: TextSize = textSizeMedium) {
  return mapTextSizeToClassName[size]
}
