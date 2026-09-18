import type { NotionEntity } from '@/entities/notions'
import { Fragment, type ReactNode } from 'react'
import { mapNotionFeedVariantToClassName } from './constants'
import { useNotionFeedContext } from '../../hooks/useNotionFeedContext'
import styles from './NotionFeedItems.module.css'
import clsx from 'clsx'

interface NotionItemsProps {
  children?: (notion: NotionEntity) => ReactNode
}

export function NotionFeedItems({
  children = () => null,
}: NotionItemsProps) {
  const { notions, variant } = useNotionFeedContext()

  return (
    <div className={clsx(styles.NotionFeedItems, mapNotionFeedVariantToClassName[variant])}>
      {notions.map(notion => (
        <Fragment key={notion.id}>
          {children(notion)}
        </Fragment>
      ))}
    </div>
  )
}
