import type { FlexGap } from '@/shared/components/Flex'
import type { Id } from '@/shared/types/id'
import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsSeparation } from '@/shared/components/Breadcrumbs'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { Text, type TextSize } from '@/shared/components/Text'
import { Fragment, useMemo } from 'react'

interface GroupPathProps {
  groupId: Id
  onSegmentClick?: (group: GroupEntity) => void 

  size?: TextSize
  gap?: FlexGap
}

export function GroupPath({ 
  groupId,
  onSegmentClick = () => {},

  size,
  gap,
}: GroupPathProps) {
  const { getGroupPathById } = useGroupActions()

  const groups = useMemo(() => getGroupPathById(groupId), [groupId])

  if (!groups || !groups.length) return null

  return (
    <Breadcrumbs gap={gap}>
      {groups.map((group, index) => (
        <Fragment key={index}>
          <BreadcrumbsSeparation />

          <BreadcrumbsItem onClick={() => onSegmentClick(group)}>
            <Text size={size}>{group.title}</Text>
          </BreadcrumbsItem>
        </Fragment>
      ))}
    </Breadcrumbs>
  )
}
