import { Icon } from '@/shared/components/Icon'

interface ModalCloseProps {
  onClick?: () => void
}

export function ModalClose({ onClick }: ModalCloseProps) {
  return (
    <Icon onClick={onClick} name='x' />
  )
}
