import { Flex, flexDirectionVertical, flexGapMedium } from '@/shared/components/Flex'
import { validateEntityTitle } from '@/entities/shared'
import { useNotionFormStore } from '../../form.store'
import { TextField } from '@/shared/components/TextField'
import { Input } from '@/shared/components/Input'
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
      />

      <TextField 
        value={notion.description ?? ''}
        onValueChange={updateDescription}
        className={styles.TextField}
      />
    </Flex>
  )
}
