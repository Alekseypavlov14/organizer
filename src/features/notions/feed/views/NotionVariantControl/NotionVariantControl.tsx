import type { Option } from '@/shared/types/option'
import { notionFeedVariantBlock, notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { useNotionFeedContext } from '../../hooks/useNotionFeedContext'
import { ToggleGroup } from '@/shared/components/ToggleGroup'
import { Icon } from '@/shared/components/Icon'

const options: Option<NotionFeedVariant>[] = [
  { label: <Icon name="list" />, value: notionFeedVariantList },
  { label: <Icon name="grid" />, value: notionFeedVariantBlock },
]

export function NotionVariantControl() {
  const { variant, updateVariant } = useNotionFeedContext()

  return (
    <ToggleGroup 
      options={options}
      onChange={updateVariant}
      value={variant}
    />
  )
}