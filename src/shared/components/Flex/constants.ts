import styles from './Flex.module.css'

export type FlexDirection = 'vertical' | 'horizontal'

export const FlexDirectionVertical: FlexDirection = 'vertical'
export const FlexDirectionHorizontal: FlexDirection = 'horizontal'

export const mapFlexDirectionToClassName: Record<FlexDirection, string> = {
  vertical: styles.DirectionVertical,
  horizontal: styles.DirectionHorizontal
}

export type FlexGap = 's' | 'm' | 'l'

export const FlexGapSmall: FlexGap = 's'
export const FlexGapMedium: FlexGap = 'm'
export const FlexGapLarge: FlexGap = 'l'

export const mapFlexGapToClassName: Record<FlexGap, string> = {
  s: styles.GapSmall,
  m: styles.GapMedium,
  l: styles.GapLarge
}
