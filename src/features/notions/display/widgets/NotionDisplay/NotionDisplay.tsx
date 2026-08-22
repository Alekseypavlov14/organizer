import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { notionSelector, useNotionDisplayStore } from '../../display.store'
import { Text } from '@/shared/components/Text'
import styles from './NotionDisplay.module.css'

export function NotionDisplay() {
  const notion = useNotionDisplayStore(notionSelector)

  return (
    <Flex 
      className={styles.NotionDisplay}
      direction={flexDirectionVertical}
      gap={flexGapMedium}
    >
      <Text size='l'>{notion.title}</Text>
      <Text>{notion.description}</Text>
    </Flex>
  )
}
