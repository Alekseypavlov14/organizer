import type { ComponentProps } from 'react'
import { Flex, flexJustifySpaceBetween, flexAlignCenter } from '@/shared/components/Flex'

interface GroupFeedHeaderProps extends ComponentProps<'div'> {}

export function GroupFeedHeader({ children, ...props }: GroupFeedHeaderProps) {
  return (
    <Flex
      justify={flexJustifySpaceBetween}
      align={flexAlignCenter}
      {...props}
    >
      {children}
    </Flex>
  )
}
