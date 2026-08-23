import type { NotionEntity } from '@/entities/notions'
import { Flex, flexAlignCenter, flexGapSmall, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { Button, buttonVariantDanger, buttonVariantPrimary } from '@/shared/components/Button'
import { useEditionActions } from '../../hooks/useEditionActions'

interface NotionEditionActionsProps {
  notion: NotionEntity

  onSave?: (notion: NotionEntity) => void
  onDelete?: (notion: NotionEntity) => void
  onCancel?: () => void
}

export function NotionEditionActions({ 
  notion,
  onSave = () => {},
  onDelete = () => {},
  onCancel = () => {},
}: NotionEditionActionsProps) {
  const { saveNotion, deleteNotion, cancel } = useEditionActions()

  function saveHandler() {
    saveNotion(notion)
    onSave(notion)
  }

  function deleteHandler() {
    deleteNotion(notion)
    onDelete(notion)
  }

  function cancelHandler() {
    cancel()
    onCancel()
  }

  return (
    <Flex
      justify={flexJustifySpaceBetween}
      align={flexAlignCenter}
    >
      <Flex gap={flexGapSmall}>
        <Button onClick={cancelHandler}>
          Cancel
        </Button>

        <Button 
          onClick={deleteHandler}
          variant={buttonVariantDanger}
        >
          Delete
        </Button>
      </Flex>

      <Flex gap={flexGapSmall}>
        <Button
          onClick={saveHandler}
          variant={buttonVariantPrimary}
        >
          Save
        </Button>
      </Flex>
    </Flex>
  )
}
