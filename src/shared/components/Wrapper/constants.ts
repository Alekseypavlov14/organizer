import styles from './Wrapper.module.css'

export type WrapperVariant = 'base' | 'white'

export const wrapperVariantBase: WrapperVariant = 'base'
export const wrapperVariantWhite: WrapperVariant = 'white'

export const mapWrapperVariantToClassName: Record<WrapperVariant, string> = {
  base: styles.VariantBase,
  white: styles.VariantWhite,
}