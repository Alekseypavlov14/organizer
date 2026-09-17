import type { Nullable } from '@/shared/types/nullable'
import type { FlexGap } from '@/shared/components/Flex'
import type { Id } from '@/shared/types/id'
import { Breadcrumbs, BreadcrumbsItem, BreadcrumbsSeparation } from '@/shared/components/Breadcrumbs'
import { useGroupActions, type GroupEntity } from '@/entities/groups'
import { Text, type TextSize } from '@/shared/components/Text'
import { Icon, type IconSize } from '@/shared/components/Icon'
import { Fragment, useMemo } from 'react'

interface GroupPathProps {
  groupId: Nullable<Id>
  onSegmentClick?: (group: GroupEntity) => void 

  className?: string
  size?: TextSize
  gap?: FlexGap

  showRoot?: boolean
  rootSize?: IconSize
  onRootClick?: () => void
}

export function GroupPath({ 
  groupId,
  onSegmentClick = () => {},

  className,
  size,
  gap,

  showRoot,
  rootSize,
  onRootClick = () => {},
}: GroupPathProps) {
  const { getGroupPathById } = useGroupActions()

  const groups = useMemo(() => getGroupPathById(groupId), [groupId]) ?? []

  if (!groups.length && !showRoot) return null

  return (
    <Breadcrumbs 
      className={className} 
      gap={gap}
    >
      {showRoot ? (
        <BreadcrumbsItem>
          <Icon 
            onClick={onRootClick}
            size={rootSize} 
            name='home' 
          />
        </BreadcrumbsItem>
      ) : null}

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
