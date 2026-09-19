import { useGroupFeedModalStack, useNotionDeleteConfirmationModal } from '../../modals.feature'
import { useGroupFeedNotionDetails } from '../../hooks/useGroupFeedNotionDetails'
import { buttonVariantDanger } from '@/shared/components/Button'
import { ConfirmationModal } from '@/features/shared/modals'

export function NotionDeleteConfirmationModal() {
  const notionDetails = useGroupFeedNotionDetails()

  const groupFeedModalStack = useGroupFeedModalStack()
  const notionDeleteConfirmationModal = useNotionDeleteConfirmationModal()

  return (
    <ConfirmationModal 
      title='Do you want to delete this notion?'
      modal={notionDeleteConfirmationModal}
      onConfirm={notionDetails.deleteNotionHandler}
      onCancel={groupFeedModalStack.openPrevious}
      variant={buttonVariantDanger}
    />
  )
}
