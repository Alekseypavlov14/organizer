import type { Option } from '@/shared/types/option'
import { dayOfMonthFormat, dayOfWeekFormat } from './constants'
import { getWeekDates, type Timestamp } from '@/shared/utils/datetime'
import { SegmentedControl } from '@/shared/components/SegmentedControl'
import { DateTime } from '@oleksii-pavlov/date-time'
import { useMemo } from 'react'
import { Text } from '@/shared/components/Text'
import styles from './CalendarWeekControl.module.css'

interface CalendarWeekControlProps {
  value: Timestamp
  onChange?: (date: Timestamp) => void
  weekStart: Timestamp
}

export function CalendarWeekControl({
  value, 
  onChange = () => {},
  weekStart,
}: CalendarWeekControlProps) {
  const weekDateOptions = useMemo(() => {
    return getWeekDates(weekStart).map<Option<Timestamp>>(date => ({
      label: (
        <div className={styles.WeekDay}>
          <Text size='l'>
            {dayOfMonthFormat(date.getTimeInMilliseconds())}
          </Text>
          
          <Text size='s'>
            {dayOfWeekFormat(date.getTimeInMilliseconds())}
          </Text>
        </div>
      ),
      value: date.getTimeInMilliseconds(),
    }))
  }, [weekStart])

  return (
    <SegmentedControl
      value={new DateTime(value).normalizeDate().getTimeInMilliseconds()}
      options={weekDateOptions}
      onChange={onChange}
    />
  )
}
