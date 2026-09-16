import type { GroupEntity } from '@/entities/groups'
import type { ColorModel } from '@/entities/shared'
import { useGroupFormStore } from '../form.store'

export function useGroupForm() {
  const { group, updateGroup, updateColor } = useGroupFormStore()

  function updateFormGroup(group: GroupEntity) {
    updateGroup(group)
  }

  function updateGroupColor(color: ColorModel) {
    updateColor(color)
  }

  return ({
    group,
    updateFormGroup,
    updateGroupColor
  })
}
