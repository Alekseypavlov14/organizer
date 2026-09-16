import { Flex, flexAlignCenter, flexGapSmall } from '@/shared/components/Flex'
import { useGroupFormStore } from '../../form.store'
import { ColorIndicator } from '@/features/colors/shared'
import { Input } from '@/shared/components/Input'
import styles from './GroupForm.module.css'

interface GroupFormProps {
  onColorClick?: () => void
}

export function GroupForm({
  onColorClick = () => {},
}: GroupFormProps) {
  const { group, updateTitle } = useGroupFormStore()

  return (
    <Flex 
      className={styles.GroupForm}
      align={flexAlignCenter}
      gap={flexGapSmall}
    >
      <ColorIndicator 
        value={group.color}
        onClick={onColorClick}
      />

      <Input 
        value={group.title}
        onValueChange={updateTitle}
        placeholder='Enter title'
      />
    </Flex>
  )
}
