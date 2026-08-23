import styles from './TextField.module.css'

export type TextFieldVariant = 'base' | 'ghost'

export const textFieldVariantBase: TextFieldVariant = 'base'
export const textFieldVariantGhost: TextFieldVariant = 'ghost'

export const mapTextFieldVariantToClassName: Record<TextFieldVariant, string> = {
  base: styles.VariantBase,
  ghost: styles.VariantGhost
}
