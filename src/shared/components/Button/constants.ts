import styles from './Button.module.css'

export type ButtonSize = 's' | 'm' | 'l'

export const buttonSizeSmall: ButtonSize = 's'
export const buttonSizeMedium: ButtonSize = 'm'
export const buttonSizeLarge: ButtonSize = 'l'

export const mapButtonSizeToClassName: Record<ButtonSize, string> = {
  s: styles.SizeSmall,
  m: styles.SizeMedium,
  l: styles.SizeLarge
}

export type ButtonVariant = 'base' | 'primary' | 'danger'

export const buttonVariantBase: ButtonVariant = 'base'
export const buttonVariantPrimary: ButtonVariant = 'primary'
export const buttonVariantDanger: ButtonVariant = 'danger'

export const mapButtonVariantToClassName: Record<ButtonVariant, string> = {
  base: styles.VariantBase,
  primary: styles.VariantPrimary,
  danger: styles.VariantDanger
}
