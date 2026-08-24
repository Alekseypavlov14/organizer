import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { useNotionDisplayContext } from '../../hooks/useNotionDisplayContext'
import { Text } from '@/shared/components/Text'
import styles from './NotionDisplayTemplate.module.css'

export function NotionDisplayTemplate() {
  const { notion } = useNotionDisplayContext()

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
