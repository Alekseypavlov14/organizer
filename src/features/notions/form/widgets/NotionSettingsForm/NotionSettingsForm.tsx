import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { NotionSettingsFormTimingGroup } from '../../groups/NotionSettingsFormTimingGroup'
import { NotionSettingsFormStatusGroup } from '../../groups/NotionSettingsFormStatusGroup'
import { NotionSettingsFormTodoGroup } from '../../groups/NotionSettingsFormTodoGroup'
import { Separation } from '@/shared/components/Separation'
import styles from './NotionSettingsForm.module.css'

export function NotionSettingsForm() {
  return (
    <Flex 
      direction={flexDirectionVertical} 
      className={styles.NotionSettingsForm}
      gap={flexGapMedium}
    >
      <NotionSettingsFormTimingGroup />

      <Separation />

      <NotionSettingsFormTodoGroup />

      <Separation />

      <NotionSettingsFormStatusGroup />
    </Flex>
  )
}
