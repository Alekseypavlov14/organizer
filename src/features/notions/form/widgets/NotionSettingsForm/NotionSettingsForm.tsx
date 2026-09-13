import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { NotionSettingsFormTimingGroup } from '../../groups/NotionSettingsFormTimingGroup'
import { NotionSettingsFormStatusGroup } from '../../groups/NotionSettingsFormStatusGroup'
import { NotionSettingsFormTodoGroup } from '../../groups/NotionSettingsFormTodoGroup'
import { Palette } from '@/shared/components/Palette'
import styles from './NotionSettingsForm.module.css'

export function NotionSettingsForm() {
  return (
    <Flex 
      direction={flexDirectionVertical} 
      className={styles.NotionSettingsForm}
      gap={flexGapMedium}
    >
      <Palette className={styles.Group}>
        <NotionSettingsFormTimingGroup />
      </Palette>

      <Palette className={styles.Group}>
        <NotionSettingsFormTodoGroup />
      </Palette>

      <Palette className={styles.Group}>
        <NotionSettingsFormStatusGroup />
      </Palette>
    </Flex>
  )
}
