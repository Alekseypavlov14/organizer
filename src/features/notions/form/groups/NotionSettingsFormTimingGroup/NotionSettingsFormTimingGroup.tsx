import { dateFormat, timeFormat, durationFormat, dateValidator, timeValidator, durationValidator } from '@/entities/shared'
import { Flex, flexDirectionVertical, flexGapSmall } from '@/shared/components/Flex'
import { useNotionFormStore } from '../../form.store'
import { Input } from '@/shared/components/Input'

export function NotionSettingsFormTimingGroup() {
  const { notion, updateDate, updateTime, updateDuration } = useNotionFormStore()

  // values
  const dateValue = notion.date !== null ? dateFormat.toControl(notion.date) : ''
  const timeValue = notion.time !== null ? timeFormat.toControl(notion.time) : ''
  const durationValue = notion.duration !== null ? durationFormat.toControl(notion.duration) : ''

  // handlers
  function updateDateHandler(value: string) {
    if (!value.length) return updateDate(null)
    updateDate(dateFormat.toModel(value))
  }
  function updateTimeHandler(value: string) {
    if (!value.length) return updateTime(null)
    updateTime(timeFormat.toModel(value))
  }
  function updateDurationHandler(value: string) {
    if (!value.length) return updateDuration(null)
    updateDuration(durationFormat.toModel(value))
  }

  // validators
  const validateDateValue = (value: string) => value.length === 0 || dateValidator.validateControlValue(value)
  const validateTimeValue = (value: string) => value.length === 0 || timeValidator.validateControlValue(value)
  const validateDurationValue = (value: string) => value.length === 0 || durationValidator.validateControlValue(value)
  
  return (
    <Flex 
      direction={flexDirectionVertical} 
      gap={flexGapSmall}
    >
      <Input 
        value={dateValue}
        onValueChange={updateDateHandler}
        format={(value) => `Date: ${dateFormat.displayControl(value)}`}
        validate={validateDateValue}
        placeholder='Date'
        hint="DD.MM.YYYY"
      />

      <Input 
        value={timeValue}
        onValueChange={updateTimeHandler}
        format={(value) => `Time: ${timeFormat.displayControl(value)}`}
        validate={validateTimeValue}
        placeholder='Time'
        hint="hh:mm"
      />

      <Input 
        value={durationValue}
        onValueChange={updateDurationHandler}
        format={(value) => `Duration: ${durationFormat.displayControl(value)}`}
        validate={validateDurationValue}
        placeholder='Duration'
        hint="DD:hh:mm"
      />
    </Flex>
  )
}
