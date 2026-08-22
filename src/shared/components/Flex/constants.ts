import styles from './Flex.module.css'

export type FlexDirection = 'vertical' | 'horizontal'

export const flexDirectionVertical: FlexDirection = 'vertical'
export const flexDirectionHorizontal: FlexDirection = 'horizontal'

export const mapFlexDirectionToClassName: Record<FlexDirection, string> = {
  vertical: styles.DirectionVertical,
  horizontal: styles.DirectionHorizontal
}

export type FlexAlign = 'stretch' | 'start' | 'center' | 'end'

export const flexAlignStretch: FlexAlign = 'stretch'
export const flexAlignStart: FlexAlign = 'start'
export const flexAlignCenter: FlexAlign = 'center'
export const flexAlignEnd: FlexAlign = 'end'

export const mapFlexAlignToClassName: Record<FlexAlign, string> = {
  stretch: styles.AlignStretch,
  start: styles.AlignStart,
  center: styles.AlignCenter,
  end: styles.AlignEnd
}

export type FlexJustify = 'start' | 'center' | 'end' | 'between'

export const flexJustifyStart: FlexJustify = 'start'
export const flexJustifyCenter: FlexJustify = 'center'
export const flexJustifyEnd: FlexJustify = 'end'
export const flexJustifySpaceBetween: FlexJustify = 'between'

export const mapFlexJustifyToClassName: Record<FlexJustify, string> = {
  start: styles.JustifyStart,
  center: styles.JustifyCenter,
  end: styles.JustifyEnd,
  between: styles.JustifySpaceBetween
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