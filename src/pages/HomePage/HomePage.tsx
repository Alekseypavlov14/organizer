import { Checkbox } from '@/shared/components/Checkbox'
import { Container } from '@/shared/components/Container'
import { Input } from '@/shared/components/Input'
import { Switch } from '@/shared/components/Switch'
import { Wrapper } from '@/shared/components/Wrapper'
import { useState } from 'react'

export function HomePage() {
  const [checked, setChecked] = useState<boolean>(false)
  const [value, setValue] = useState('')

  return (
    <Wrapper>
      <Container>
        <Checkbox 
          checked={checked} 
          onCheckedChange={(checked) => setChecked(checked)} 
        />
  
        <Switch 
          checked={checked} 
          onCheckedChange={(checked) => setChecked(checked)} 
        />
  
        <Input 
          value={value}
          onValueChange={(value) => setValue(value)}
          format={(value) => `Time: ${value} minutes`}
          placeholder='Time'
        />
      </Container>
    </Wrapper>
  )
}
