import styles from './FloatingAction.module.css'

export type FloatingActionVariant = 'base' | 'primary'

export const floatingActionVariantBase: FloatingActionVariant = 'base'
export const floatingActionVariantPrimary: FloatingActionVariant = 'primary'

export const mapFloatingActionVariantToClassName: Record<FloatingActionVariant, string> = {
  base: styles.VariantBase,
  primary: styles.VariantPrimary,
}
