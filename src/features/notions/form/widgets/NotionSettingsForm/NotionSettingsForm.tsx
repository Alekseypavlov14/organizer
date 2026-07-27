import { Flex, flexDirectionVertical, flexGapLarge } from '@/shared/components/Flex'
import { NotionSettingsFormTimingGroup } from '../../groups/NotionSettingsFormTimingGroup'
import { NotionSettingsFormStatusGroup } from '../../groups/NotionSettingsFormStatusGroup'
import { Separation } from '@/shared/components/Separation'
import styles from './NotionSettingsForm.module.css'

export function NotionSettingsForm() {
  return (
    <Flex 
      direction={flexDirectionVertical} 
      className={styles.NotionSettingsForm}
      gap={flexGapLarge}
    >
      <NotionSettingsFormTimingGroup />

      <Separation />

      <NotionSettingsFormStatusGroup />
    </Flex>
  )
}
