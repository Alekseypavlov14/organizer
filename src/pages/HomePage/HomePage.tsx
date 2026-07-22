import { Checkbox } from '@/shared/components/Checkbox'
import { Switch } from '@/shared/components/Switch'
import { Wrapper } from '@/shared/components/Wrapper'
import { useState } from 'react'

export function HomePage() {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <Wrapper>
      <Checkbox 
        checked={checked} 
        onCheckedChange={(checked) => setChecked(checked)} 
      />

      <Switch 
        checked={checked} 
        onCheckedChange={(checked) => setChecked(checked)} 
      />
    </Wrapper>
  )
}
