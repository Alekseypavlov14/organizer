import { notionProgressCompleted, notionProgressCompletedOption, notionProgressCreated, notionProgressCreatedOption, notionProgressProcessing, notionProgressProcessingOption, type NotionProgress } from '@/entities/notions'
import { Badge } from '@/shared/components/Badge'

interface NotionProgressBadgeProps {
  progress: NotionProgress
}

export function NotionProgressBadge({ progress }: NotionProgressBadgeProps) {
  return ({
    [notionProgressCreated]: <Badge status='red'>{notionProgressCreatedOption.label}</Badge>,
    [notionProgressProcessing]: <Badge status='yellow'>{notionProgressProcessingOption.label}</Badge>,
    [notionProgressCompleted]: <Badge status='green'>{notionProgressCompletedOption.label}</Badge>,
  })[progress]
}
