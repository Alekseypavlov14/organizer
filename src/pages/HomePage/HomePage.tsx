import { Container } from '@/shared/components/Container'
import { useState } from 'react'
import { Wrapper } from '@/shared/components/Wrapper'
import { Input } from '@/shared/components/Input'
import { createTimeModel, timeFormat, type TimeModel } from '@/entities/shared/models/time'

export function HomePage() {
  const [value, setValue] = useState<TimeModel>(createTimeModel(0))

  return (
    <Wrapper>
      <Container>
        <Input 
          value={timeFormat.toControl(value)}
          onValueChange={(value) => setValue(timeFormat.toModel(value))}
          format={(value) => `Time: ${timeFormat.displayControl(value)}`}
          placeholder='Time'
        />
      </Container>
    </Wrapper>
  )
}
