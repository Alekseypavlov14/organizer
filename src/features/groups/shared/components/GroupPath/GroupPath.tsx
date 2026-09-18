import type { Nullable } from '@/shared/types/nullable'
import type { FlexGap } from '@/shared/components/Flex'
import type { Id } from '@/shared/types/id'
import { groupsSelector, useGroupActions, useGroupsStore, type GroupEntity } from '@/entities/groups'
import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsSeparation } from '@/shared/components/Breadcrumbs'
import { Fragment, useMemo } from 'react'
import { Text } from '@/shared/components/Text'
import { Icon } from '@/shared/components/Icon'

interface GroupPathProps {
  groupId: Nullable<Id>
  onSegmentClick?: (group: GroupEntity) => void 

  className?: string
  gap?: FlexGap

  showRoot?: boolean
  onRootClick?: () => void
}

export function GroupPath({ 
  groupId,
  onSegmentClick = () => {},

  className,
  gap,

  showRoot,
  onRootClick = () => {},
}: GroupPathProps) {
  const groups = useGroupsStore(groupsSelector)
  const { getGroupPathById } = useGroupActions()

  const segments = useMemo(() => getGroupPathById(groupId), [groups, groupId]) ?? []
  if (!segments.length && !showRoot) return null

  return (
    <Breadcrumbs 
      className={className} 
      gap={gap}
    >
      <BreadcrumbsItem>
        <Icon 
          onClick={onRootClick}
          name='home' 
        />
      </BreadcrumbsItem>

      {segments.map((group, index) => (
        <Fragment key={index}>
          <BreadcrumbsSeparation />

          <BreadcrumbsItem onClick={() => onSegmentClick(group)}>
            <Text>{group.title}</Text>
          </BreadcrumbsItem>
        </Fragment>
      ))}
    </Breadcrumbs>
  )
}
