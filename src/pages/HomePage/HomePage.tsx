import { Badge, badgeStatusBase, badgeStatusError, badgeStatusPrimary, badgeStatusSuccess, badgeStatusWarning } from '@/shared/components/Badge'
import { Input } from '@/shared/components/Input'
import { Wrapper } from '@/shared/components/Wrapper'

export function HomePage() {
  return (
    <Wrapper>
      <Badge status={badgeStatusBase}>Base</Badge>
      <Badge status={badgeStatusPrimary}>Primary</Badge>
      <Badge status={badgeStatusSuccess}>Success</Badge>
      <Badge status={badgeStatusWarning}>Warning</Badge>
      <Badge status={badgeStatusError}>Error</Badge>

      <Input 
        value='1:45' 
        format={(value) => `Time: ${value}`}
      />
    </Wrapper>
  )
}
