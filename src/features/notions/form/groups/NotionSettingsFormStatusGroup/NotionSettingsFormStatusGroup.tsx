import type { Nullable } from '@/shared/types/nullable'
import { notionLevelOptions, notionPriorityOptions, notionProgressOptions, type NotionLevel, type NotionPriority, type NotionProgress } from '@/entities/notions'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { useNotionFormStore } from '../../form.store'
import { Select } from '@/shared/components/Select'

export function NotionSettingsFormStatusGroup() {
  const { notion, updatePriority, updateProgress, updateLevel } = useNotionFormStore()

  return (
    <Flex 
      direction={flexDirectionVertical} 
      gap={flexGapSmall}
    >
      <Select<Nullable<NotionPriority>>
        value={notion.priority}
        options={notionPriorityOptions}
        onValueChange={updatePriority}
        onValueReset={() => updatePriority(null)}
        format={(option) => `Priority: ${option.label}`}
        placeholder='Priority'
      />

      <Select<Nullable<NotionProgress>>
        value={notion.progress}
        options={notionProgressOptions}
        onValueChange={updateProgress}
        onValueReset={() => updateProgress(null)}
        format={(option) => `Progress: ${option.label}`}
        placeholder='Progress'
      />

      <Select<Nullable<NotionLevel>>
        value={notion.level}
        options={notionLevelOptions}
        onValueChange={updateLevel}
        onValueReset={() => updateLevel(null)}
        format={(option) => `Level: ${option.label}`}
        placeholder='Level'
      />
    </Flex>
  )
}
