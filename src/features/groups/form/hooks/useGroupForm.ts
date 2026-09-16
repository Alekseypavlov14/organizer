import type { GroupEntity } from '@/entities/groups'
import type { ColorModel } from '@/entities/shared'
import type { Nullable } from '@/shared/types/nullable'
import type { Id } from '@/shared/types/id'
import { useGroupFormStore } from '../form.store'

export function useGroupForm() {
  const { group, updateGroup, updateParentId, updateColor } = useGroupFormStore()

  function updateFormGroup(group: GroupEntity) {
    updateGroup(group)
  }

  function updateGroupParentId(id: Nullable<Id>) {
    updateParentId(id)
  }

  function updateGroupColor(color: ColorModel) {
    updateColor(color)
  }

  return ({
    group,
    updateFormGroup,
    updateGroupParentId,
    updateGroupColor
  })
}
