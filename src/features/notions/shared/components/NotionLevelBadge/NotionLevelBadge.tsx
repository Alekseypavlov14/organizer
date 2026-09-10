import { notionLevelEasy, notionLevelEasyOption, notionLevelHard, notionLevelHardOption, notionLevelMedium, notionLevelMediumOption, type NotionLevel } from '@/entities/notions'
import { Badge } from '@/shared/components/Badge'

interface NotionLevelBadgeProps {
  level: NotionLevel
}

export function NotionLevelBadge({ level }: NotionLevelBadgeProps) {
  return ({
    [notionLevelHard]: <Badge status='red'>{notionLevelHardOption.label}</Badge>,
    [notionLevelMedium]: <Badge status='yellow'>{notionLevelMediumOption.label}</Badge>,
    [notionLevelEasy]: <Badge status='green'>{notionLevelEasyOption.label}</Badge>,
  })[level]
}
