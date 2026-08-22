import { createDurationModel, durationFormat, durationValidator, type DurationModel } from '@/entities/shared/models/duration'
import { createMomentModel, momentFormat, momentValidator, type MomentModel } from '@/entities/shared/models/moment'
import { createDateModel, dateFormat, dateValidator, type DateModel } from '@/entities/shared/models/date'
import { createTimeModel, timeFormat, timeValidator, type TimeModel } from '@/entities/shared/models/time'
import { NotionSettingsForm } from '@/features/notions/form'
import { Pagination } from '@/shared/components/Pagination'
import { Container } from '@/shared/components/Container'
import { useState } from 'react'
import { Wrapper } from '@/shared/components/Wrapper'
import { Input } from '@/shared/components/Input'
import { FloatingActions } from '@/shared/components/FloatingActions'
import { FloatingAction } from '@/shared/components/FloatingAction'
import { floatingActionVariantPrimary } from '@/shared/components/FloatingAction/constants'
import { Icon } from '@/shared/components/Icon'

export function HomePage() {
  const [dateValue, setDateValue] = useState<DateModel>(createDateModel(Date.now()))
  const [timeValue, setTimeValue] = useState<TimeModel>(createTimeModel(0))
  const [durationValue, setDurationValue] = useState<DurationModel>(createDurationModel(0))
  const [momentValue, setMomentValue] = useState<MomentModel>(createMomentModel(createDateModel(Date.now()), createTimeModel(0)))

  return (
    <Wrapper>
      <Container>
        <Input 
          value={dateFormat.toControl(dateValue)}
          onValueChange={(value) => setDateValue(dateFormat.toModel(value))}
          format={(value) => `Date: ${dateFormat.displayControl(value)}`}
          validate={dateValidator.validateControlValue}
          placeholder='Date'
          hint="DD.MM.YYYY"
        />
        
        <Input 
          value={timeFormat.toControl(timeValue)}
          onValueChange={(value) => setTimeValue(timeFormat.toModel(value))}
          format={(value) => `Time: ${timeFormat.displayControl(value)}`}
          validate={timeValidator.validateControlValue}
          placeholder='Time'
          hint="hh:mm"
        />

        <Input 
          value={durationFormat.toControl(durationValue)}
          onValueChange={(value) => setDurationValue(durationFormat.toModel(value))}
          format={(value) => `Duration: ${durationFormat.displayControl(value)}`}
          validate={durationValidator.validateControlValue}
          placeholder='Duration'
          hint="DD:hh:mm"
        />

        <Input 
          value={momentFormat.toControl(momentValue)}
          onValueChange={(value) => setMomentValue(momentFormat.toModel(value))}
          format={(value) => `Moment: ${momentFormat.displayControl(value)}`}
          validate={momentValidator.validateControlValue}
          placeholder='Moment'
          hint="DD.MM.YYYY hh:mm"
        />

        <Pagination 
          currentPageIndex={6}
          totalPagesAmount={7}
        />

        <NotionSettingsForm />

        <FloatingActions>
          <FloatingAction><Icon name="plus" size='l' /></FloatingAction>
          <FloatingAction variant={floatingActionVariantPrimary}><Icon name="list" size='l' /></FloatingAction>
        </FloatingActions>
      </Container>
    </Wrapper>
  )
}
