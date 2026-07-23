import { Container } from '@/shared/components/Container'
import { useState } from 'react'
import { Wrapper } from '@/shared/components/Wrapper'
import { Input } from '@/shared/components/Input'
import { createTimeModel, timeFormat, type TimeModel } from '@/entities/shared/models/time'
import { createDurationModel, durationFormat, type DurationModel } from '@/entities/shared/models/duration'

export function HomePage() {
  const [timeValue, setTimeValue] = useState<TimeModel>(createTimeModel(0))
  const [durationValue, setDurationValue] = useState<DurationModel>(createDurationModel(0))

  return (
    <Wrapper>
      <Container>
        <Input 
          value={timeFormat.toControl(timeValue)}
          onValueChange={(value) => setTimeValue(timeFormat.toModel(value))}
          format={(value) => `Time: ${timeFormat.displayControl(value)}`}
          placeholder='Time'
        />

        <Input 
          value={durationFormat.toControl(durationValue)}
          onValueChange={(value) => setDurationValue(durationFormat.toModel(value))}
          format={(value) => `Duration: ${durationFormat.displayControl(value)}`}
          placeholder='Duration'
        />
      </Container>
    </Wrapper>
  )
}
