import { useGroupSelectionStore, searchQuerySelector, updateSearchQuerySelector, updateSelectionModeSelector, updateCurrentGroupSelector } from '../../selection.store'
import { selectionModeHierarchy, selectionModeSearch } from '../../constants'
import { useEffect } from 'react'
import { Input } from '@/shared/components/Input'

export function GroupSelectionSearchbar() {
  const searchQuery = useGroupSelectionStore(searchQuerySelector)
  const updateSearchQuery = useGroupSelectionStore(updateSearchQuerySelector)

  const updateCurrentGroup = useGroupSelectionStore(updateCurrentGroupSelector)
  const updateSelectionMode = useGroupSelectionStore(updateSelectionModeSelector)

  useEffect(() => {
    if (searchQuery.length !== 0) return updateSelectionMode(selectionModeSearch)
    
    updateSelectionMode(selectionModeHierarchy)
    updateCurrentGroup(null)
  }, [searchQuery])

  return (
    <Input 
      value={searchQuery}
      onValueChange={updateSearchQuery}
      placeholder='Search by name'
    />
  )
}
