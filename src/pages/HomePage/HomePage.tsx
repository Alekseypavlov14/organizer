import { notionLevelEasy, notionLevelHard, notionLevelMedium, type NotionLevel } from '@/entities/notions'
import { Checkbox } from '@/shared/components/Checkbox'
import { Container } from '@/shared/components/Container'
import { Input } from '@/shared/components/Input'
import { Select, type Option } from '@/shared/components/Select'
import { Switch } from '@/shared/components/Switch'
import { Wrapper } from '@/shared/components/Wrapper'
import type { Nullable } from '@/shared/types/nullable'
import { useState } from 'react'

const options: Option<NotionLevel>[] = [
  { value: notionLevelEasy, label: 'Easy' },
  { value: notionLevelMedium, label: 'Medium' },
  { value: notionLevelHard, label: 'Hard' },
]

export function HomePage() {
  const [checked, setChecked] = useState<boolean>(false)
  const [value, setValue] = useState('')

  const [selectValue, setSelectValue] = useState<Nullable<NotionLevel>>(null)

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

        <Select 
          value={selectValue}
          options={options}
          onValueChange={(value) => setSelectValue(value)}
          format={(option) => `Level: ${option.label}`}
          placeholder='Level'
        />
      </Container>
    </Wrapper>
  )
}
