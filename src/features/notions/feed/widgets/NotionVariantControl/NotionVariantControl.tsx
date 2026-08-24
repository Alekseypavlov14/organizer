import { notionFeedVariantBlock, notionFeedVariantList } from '../../constants'
import { Flex, flexAlignCenter } from '@/shared/components/Flex'
import { useNotionFeedContext } from '../../hooks/useNotionFeedContext'
import { Icon } from '@/shared/components/Icon'
import styles from './NotionVariantControl.module.css'
import clsx from 'clsx'

export function NotionVariantControl() {
  const { variant, updateVariant } = useNotionFeedContext()

  return (
    <Flex 
      className={clsx(styles.Control)}
      align={flexAlignCenter} 
    >
      <div
        className={clsx(styles.Option, variant === notionFeedVariantList && styles.Active)}
        onClick={() => updateVariant(notionFeedVariantList)}
      >
        <Icon name="list" />
      </div>

      <div
        className={clsx(styles.Option, variant === notionFeedVariantBlock && styles.Active)}
        onClick={() => updateVariant(notionFeedVariantBlock)}
      >
        <Icon name="grid" />
      </div>
    </Flex>
  )
}