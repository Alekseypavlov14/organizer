import { Flex, flexAlignCenter, flexGapSmall, flexJustifySpaceBetween } from '@/shared/components/Flex'
import { getMonthDates, getMonthOffsetAfterDates, getMonthOffsetBeforeDates, type Timestamp } from '@/shared/utils/datetime'
import { type ReactNode } from 'react'
import { Palette } from '@/shared/components/Palette'
import { Icon } from '@/shared/components/Icon'
import { Text } from '@/shared/components/Text'
import styles from './Calendar.module.css'
import clsx from 'clsx'

export interface CellParams {
  date: Timestamp
  outOfMonth: boolean
}

interface CalendarProps {
  monthStart: Timestamp
  children?: (params: CellParams) => ReactNode
}

export function Calendar({ 
  monthStart,
  children = () => null
}: CalendarProps) {
  const monthDates = getMonthDates(monthStart)

  const offsetBefore = getMonthOffsetBeforeDates(monthStart)
  const offsetAfter = getMonthOffsetAfterDates(monthStart)

  return (
    <Palette className={styles.Calendar}>
      <Flex 
        className={styles.Header}
        justify={flexJustifySpaceBetween}
        align={flexAlignCenter}
        gap={flexGapSmall}
      >
        <Icon name='chevron-left' />

        <Text size='l'>September</Text>

        <Icon name='chevron-right' />
      </Flex>

      <div className={styles.Body}>
        {offsetBefore.map((date, index) => (
          <div 
            className={clsx(styles.Cell, styles.OutOfMonth)}
            key={index}
          >
            <div className={styles.Date}>
              {date.getTimeData().days}
            </div>

            {children({ 
              date: date.getTimeInMilliseconds(),
              outOfMonth: true
            })}
          </div>
        ))}

        {monthDates.map((date, index) => (
          <div 
            className={styles.Cell}
            key={index}
          >
            <div className={styles.Date}>
              {date.getTimeData().days}
            </div>

            {children({ 
              date: date.getTimeInMilliseconds(),
              outOfMonth: false
            })}
          </div>
        ))}

        {offsetAfter.map((date, index) => (
          <div 
            className={clsx(styles.Cell, styles.OutOfMonth)}
            key={index}
          >
            <div className={styles.Date}>
              {date.getTimeData().days}
            </div>

            {children({ 
              date: date.getTimeInMilliseconds(),
              outOfMonth: true
            })}
          </div>
        ))}
      </div>

    </Palette>
  )
}
