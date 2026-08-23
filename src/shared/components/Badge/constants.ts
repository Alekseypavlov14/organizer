import styles from './Badge.module.css'

export type BadgeVariant = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'primary' | 'base'

export const badgeVariantRed: BadgeVariant = 'red'
export const badgeVariantOrange: BadgeVariant = 'orange'
export const badgeVariantYellow: BadgeVariant = 'yellow'
export const badgeVariantGreen: BadgeVariant = 'green'
export const badgeVariantBlue: BadgeVariant = 'blue'
export const badgeVariantPrimary: BadgeVariant = 'primary'
export const badgeVariantBase: BadgeVariant = 'base'

export const mapBadgeVariantToClassName: Record<BadgeVariant, string> = {
  red: styles.VariantRed,
  orange: styles.VariantOrange,
  yellow: styles.VariantYellow,
  green: styles.VariantGreen,
  blue: styles.VariantBlue,
  primary: styles.VariantPrimary,
  base: styles.VariantBase,
} 
