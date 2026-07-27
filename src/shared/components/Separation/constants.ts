import styles from './Separation.module.css'

export type SeparationDirection = 'horizontal' | 'vertical'

export const separationDirectionHorizontal: SeparationDirection = 'horizontal'
export const separationDirectionVertical: SeparationDirection = 'vertical'

export const mapSeparationDirectionToClassName: Record<SeparationDirection, string> = {
  horizontal: styles.Horizontal,
  vertical: styles.Vertical,
}
