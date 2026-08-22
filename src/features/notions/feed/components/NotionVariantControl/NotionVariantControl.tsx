import { notionFeedVariantBlock, notionFeedVariantList, type NotionFeedVariant } from '../../constants'
import { Flex, flexAlignCenter } from '@/shared/components/Flex'
import { Icon } from '@/shared/components/Icon'
import styles from './NotionVariantControl.module.css'
import clsx from 'clsx'

interface NotionVariantControlProps {
  variant: NotionFeedVariant
  onChange: (value: NotionFeedVariant) => void
}

export function NotionVariantControl({
  variant,
  onChange,
}: NotionVariantControlProps) {
  return (
    <Flex 
      className={clsx(styles.Control)}
      align={flexAlignCenter} 
    >
      <div
        className={clsx(styles.Option, variant === notionFeedVariantList && styles.Active)}
        onClick={() => onChange(notionFeedVariantList)}
      >
        <Icon name="list" />
      </div>

      <div
        className={clsx(styles.Option, variant === notionFeedVariantBlock && styles.Active)}
        onClick={() => onChange(notionFeedVariantBlock)}
      >
        <Icon name="grid" />
      </div>
    </Flex>
  )
}