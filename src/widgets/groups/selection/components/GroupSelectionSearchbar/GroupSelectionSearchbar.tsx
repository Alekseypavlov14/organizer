import { useGroupSelectionExplorer } from '../../selection.explorer'
import { Input } from '@/shared/components/Input'

export function GroupSelectionSearchbar() {
  const explorer = useGroupSelectionExplorer()

  return (
    <Input 
      value={explorer.store.searchQuery}
      onValueChange={explorer.search}
      placeholder='Search by name'
    />
  )
}
