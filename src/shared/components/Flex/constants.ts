import styles from './Flex.module.css'

export type FlexDirection = 'vertical' | 'horizontal'

export const flexDirectionVertical: FlexDirection = 'vertical'
export const flexDirectionHorizontal: FlexDirection = 'horizontal'

export const mapFlexDirectionToClassName: Record<FlexDirection, string> = {
  vertical: styles.DirectionVertical,
  horizontal: styles.DirectionHorizontal
}

export type FlexGap = 's' | 'm' | 'l'

export const flexGapSmall: FlexGap = 's'
export const flexGapMedium: FlexGap = 'm'
export const flexGapLarge: FlexGap = 'l'

export const mapFlexGapToClassName: Record<FlexGap, string> = {
  s: styles.GapSmall,
  m: styles.GapMedium,
  l: styles.GapLarge
}
