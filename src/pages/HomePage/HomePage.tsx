import { Container } from '@/shared/components/Container'
import { useState } from 'react'
import { Wrapper } from '@/shared/components/Wrapper'
import { Input } from '@/shared/components/Input'
import { createTimeModel, timeFormat, timeValidator, type TimeModel } from '@/entities/shared/models/time'
import { createDurationModel, durationFormat, durationValidator, type DurationModel } from '@/entities/shared/models/duration'
import { createDateModel, dateFormat, dateValidator, type DateModel } from '@/entities/shared/models/date'
import { createMomentModel, momentFormat, momentValidator, type MomentModel } from '@/entities/shared/models/moment'

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
      </Container>
    </Wrapper>
  )
}
