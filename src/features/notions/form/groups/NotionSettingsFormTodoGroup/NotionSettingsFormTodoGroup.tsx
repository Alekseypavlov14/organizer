import { Flex, flexAlignCenter, flexDirectionVertical, flexGapMedium, flexGapSmall } from '@/shared/components/Flex'
import { Separation, separationDirectionHorizontal } from '@/shared/components/Separation'
import { momentFormat, momentValidator } from '@/entities/shared'
import { useNotionFormStore } from '../../form.store'
import { Checkbox } from '@/shared/components/Checkbox'
import { Switch } from '@/shared/components/Switch'
import { isNull } from '@/shared/utils/validation'
import { Input } from '@/shared/components/Input'
import { Text } from '@/shared/components/Text'

export function NotionSettingsFormTodoGroup() {
  const { notion, updateDone, updateDeadline } = useNotionFormStore()
  const isNotionTodoModeEnabled = !isNull(notion.done)

  function onNotionTodoModeChanged(isNotionTodoModeEnabled: boolean) {
    updateDone(isNotionTodoModeEnabled ? Boolean() : null)
  }

  const deadlineValue = !isNull(notion.deadline) ? momentFormat.toControl(notion.deadline) : ''

  function updateDeadlineHandler(value: string) {
    if (!value.length) return updateDeadline(null)
    updateDeadline(momentFormat.toModel(value))
  }

  const validateDeadlineValue = (value: string) => value.length === 0 || momentValidator.validateControlValue(value)

  return (
    <Flex
      direction={flexDirectionVertical}
      gap={flexGapSmall}
    >
      <Flex align={flexAlignCenter} gap={flexGapMedium}>
        <label>
          <Flex align={flexAlignCenter} gap={flexGapSmall}>
            <Switch 
              onCheckedChange={onNotionTodoModeChanged}
              checked={isNotionTodoModeEnabled}
            />
    
            <Text>Todo mode</Text>
          </Flex>
        </label>
  
        {isNotionTodoModeEnabled && !isNull(notion.done) ? (
          <>
            <Separation direction={separationDirectionHorizontal} /> 
  
            <label>
              <Flex align={flexAlignCenter} gap={flexGapSmall}>
                <Checkbox 
                  onCheckedChange={updateDone}
                  checked={notion.done}
                />
  
                <Text>Completed</Text>
              </Flex>
            </label>
          </>
        ) : null}
      </Flex>

      {isNotionTodoModeEnabled && !isNull(notion.done) ? (
        <Input 
          value={deadlineValue}
          onValueChange={updateDeadlineHandler}
          format={(value) => `Deadline: ${momentFormat.displayControl(value)}`}
          validate={validateDeadlineValue}
          placeholder='Deadline'
          hint="DD.MM.YYYY hh:mm"
        />
      ) : null}
    </Flex>
  )
}
