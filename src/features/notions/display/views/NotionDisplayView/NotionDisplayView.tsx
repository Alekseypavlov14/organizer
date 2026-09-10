import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { useNotionDisplayContext } from '../../hooks/useNotionDisplayContext'
import { Text, textSizeLarge } from '@/shared/components/Text'
import styles from './NotionDisplayView.module.css'

export function NotionDisplayView() {
  const { notion } = useNotionDisplayContext()
  
  return (
    <Flex 
      className={styles.NotionDisplayView}
      direction={flexDirectionVertical}
      gap={flexGapMedium}
    >
      <Text size={textSizeLarge}>{notion.title}</Text>
      <Text><pre>{notion.description}</pre></Text>
    </Flex>
  )
}
