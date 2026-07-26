import type { ComponentProps } from 'react'
import { Palette } from '../Palette'
import { clamp } from '@/shared/utils/math'
import { Icon } from '../Icon'
import styles from './Pagination.module.css'
import clsx from 'clsx'

interface PaginationProps extends Omit<ComponentProps<'div'>, 'children'> {
  totalPagesAmount: number
  currentPageIndex: number
  onCurrentPageChange?: (currentPageIndex: number) => void
  hideForSinglePage?: boolean
}

export function Pagination({
  totalPagesAmount,
  currentPageIndex,
  onCurrentPageChange = () => {},
  hideForSinglePage,

  className,
  ...props
}: PaginationProps) {
  const isNavigationBackAvailable = currentPageIndex > 0
  const isNavigationForwardAvailable = currentPageIndex < (totalPagesAmount - 1)

  function navigateNextPage() {
    onCurrentPageChange(clamp(0, currentPageIndex + 1, totalPagesAmount - 1))
  }

  function navigatePreviousPage() {
    onCurrentPageChange(clamp(0, currentPageIndex - 1, totalPagesAmount - 1))
  }

  if (totalPagesAmount <= 0) return null
  if (hideForSinglePage && totalPagesAmount <= 1) return null

  return (
    <div 
      className={clsx(styles.Pagination, className)} 
      {...props}
    >
      <Palette 
        className={clsx(styles.Item, styles.ItemPrev, !isNavigationBackAvailable && styles.Disabled)}
        onClick={navigatePreviousPage}
      >
        <Icon className={styles.ArrowLeft} name='chevron-down' />
      </Palette>
      
      {new Array(totalPagesAmount).fill(0).map((_, index) => (
        <Palette 
          className={clsx(styles.Item, (index === currentPageIndex) && styles.Active)}
          onClick={() => onCurrentPageChange(index)}
          key={index}
        >
          {index + 1}
        </Palette>
      ))}

      <Palette 
        className={clsx(styles.Item, styles.ItemNext, !isNavigationForwardAvailable && styles.Disabled)}
        onClick={navigateNextPage}
      >
        <Icon className={styles.ArrowRight} name='chevron-down' />
      </Palette>
    </div>
  )
}
