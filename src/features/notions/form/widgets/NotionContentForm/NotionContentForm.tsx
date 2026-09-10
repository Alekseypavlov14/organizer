import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { TextField, textFieldVariantGhost } from '@/shared/components/TextField'
import { Input, inputVariantGhost } from '@/shared/components/Input'
import { useNotionFormStore } from '../../form.store'
import { textSizeLarge } from '@/shared/components/Text'
import styles from './NotionContentForm.module.css'

export function NotionContentForm() {
  const { notion, updateTitle, updateDescription } = useNotionFormStore()

  return (
    <Flex 
      className={styles.NotionContentForm}
      direction={flexDirectionVertical} 
      gap={flexGapMedium}
    >
      <Input 
        value={notion.title}
        onValueChange={updateTitle}
        placeholder='Notion title'
        variant={inputVariantGhost}
        textSize={textSizeLarge}
      />

      <TextField 
        value={notion.description ?? ''}
        onValueChange={updateDescription}
        placeholder='Notion description'
        variant={textFieldVariantGhost}
        className={styles.TextField}
      />
    </Flex>
  )
}
