import styles from './Badge.module.css'

export type BadgeStatus = 'success' | 'warning' | 'error' | 'primary' | 'base'

export const badgeStatusSuccess: BadgeStatus = 'success'
export const badgeStatusWarning: BadgeStatus = 'warning'
export const badgeStatusError: BadgeStatus = 'error'
export const badgeStatusPrimary: BadgeStatus = 'primary'
export const badgeStatusBase: BadgeStatus = 'base'

export const mapBadgeStatusToClassName: Record<BadgeStatus, string> = {
  success: styles.Success,
  warning: styles.Warning,
  error: styles.Error,
  primary: styles.Primary,
  base: styles.Base,
} 
