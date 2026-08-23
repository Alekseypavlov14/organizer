import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { TextField, textFieldVariantGhost } from '@/shared/components/TextField'
import { Input, inputVariantGhost } from '@/shared/components/Input'
import { validateEntityTitle } from '@/entities/shared'
import { useNotionFormStore } from '../../form.store'
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
        validate={validateEntityTitle}
        variant={inputVariantGhost}
      />

      <TextField 
        value={notion.description ?? ''}
        onValueChange={updateDescription}
        className={styles.TextField}
        variant={textFieldVariantGhost}
      />
    </Flex>
  )
}
