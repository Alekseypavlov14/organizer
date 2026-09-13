import type { ComponentProps } from 'react'
import { Flex, flexAlignCenter, flexJustifySpaceBetween } from '@/shared/components/Flex'

interface NotionFeedHeaderProps extends ComponentProps<'div'> {}

export function NotionFeedHeader({ children, ...props }: NotionFeedHeaderProps) {
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
