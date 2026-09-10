import { notionPriorityImportant, notionPriorityImportantOption, notionPriorityUrgent, notionPriorityUrgentOption, type NotionPriority } from '@/entities/notions'
import { Badge } from '@/shared/components/Badge'

interface NotionPriorityBadgeProps {
  priority: NotionPriority
}

export function NotionPriorityBadge({ priority }: NotionPriorityBadgeProps) {
  return ({
    [notionPriorityImportant]: <Badge status='primary'>{notionPriorityImportantOption.label}</Badge>,
    [notionPriorityUrgent]: <Badge status='red'>{notionPriorityUrgentOption.label}</Badge>,
  })[priority]
}
