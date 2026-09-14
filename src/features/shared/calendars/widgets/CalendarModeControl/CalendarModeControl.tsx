import type { Option } from '@/shared/types/option'
import { calendarModeDay, calendarModeMonth, calendarModeWeek, type CalendarMode } from '../../constants'
import { SegmentedControl } from '@/shared/components/SegmentedControl'

interface CalendarModeControlProps {
  value: CalendarMode
  onChange?: (value: CalendarMode) => void
}

const calendarModeOptions: Option<CalendarMode>[] = [
  { label: 'Day', value: calendarModeDay },
  { label: 'Week', value: calendarModeWeek },
  { label: 'Month', value: calendarModeMonth },
]

export function CalendarModeControl({
  value,
  onChange = () => {},
}: CalendarModeControlProps) {
  return (
    <SegmentedControl
      options={calendarModeOptions}
      onChange={onChange}
      value={value}
    />
  )
}
