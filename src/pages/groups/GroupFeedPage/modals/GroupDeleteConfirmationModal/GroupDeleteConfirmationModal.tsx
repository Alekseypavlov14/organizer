import { useGroupDeleteConfirmationModal, useGroupFeedModalStack } from '../../modals.feature'
import { useGroupFeedEdition } from '../../hooks/useGroupFeedEdition'
import { buttonVariantDanger } from '@/shared/components/Button'
import { ConfirmationModal } from '@/features/shared/modals'

export function GroupDeleteConfirmationModal() {
  const groupFeedEdition = useGroupFeedEdition()

  const groupFeedModalStack = useGroupFeedModalStack()
  const groupDeleteConfirmationModal = useGroupDeleteConfirmationModal()

  return (
    <ConfirmationModal 
      title='Do you want to delete this group?'
      modal={groupDeleteConfirmationModal}
      onConfirm={groupFeedEdition.deleteGroupHandler}
      onCancel={groupFeedModalStack.openPrevious}
      variant={buttonVariantDanger}
    />
  )
}
