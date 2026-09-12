import type { ComponentProps } from 'react'
import { StopPropagation } from '../StopPropagation'
import { Container } from '../Container'
import { Palette } from '../Palette'
import styles from './Modal.module.css'
import clsx from 'clsx'

interface ModalProps extends ComponentProps<'div'> {
  isOpened?: boolean
  onBackgroundClick?: () => void
}

export function Modal({
  isOpened,
  onBackgroundClick = () => {},

  className, 
  children,
}: ModalProps) {
  return (
    <StopPropagation>
      <div className={clsx(styles.Modal, isOpened && styles.Opened)}>
        <div 
          className={styles.Background}
          onClick={onBackgroundClick}
        >
          <StopPropagation>
            <Container>
              <Palette className={clsx(styles.Content, className)}>
                {children}
              </Palette>
            </Container>
          </StopPropagation>
        </div>
      </div>
    </StopPropagation>
  )
}
