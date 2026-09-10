import styles from './Logo.module.css'

interface LogoProps {
  onClick?: () => void
}

export function Logo({
  onClick = () => {}
}: LogoProps) {
  return (
    <div 
      className={styles.Logo}
      onClick={onClick}
    >
      Organizer
    </div>
  )
}
