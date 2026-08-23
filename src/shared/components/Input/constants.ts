import styles from './Input.module.css'

export type InputVariant = 'base' | 'ghost'

export const inputVariantBase: InputVariant = 'base'
export const inputVariantGhost: InputVariant = 'ghost'

export const mapInputVariantToClassName: Record<InputVariant, string> = {
  base: styles.VariantBase,
  ghost: styles.VariantGhost
}
