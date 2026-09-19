import type { ModelValidator } from '@/entities/shared'
import type { TimeModel } from './time.model'
import { timeRegex, timeRange, hoursRange, minutesRange } from './constants'
import { isTimestamp } from '@/shared/utils/validation'

export class TimeValidator implements ModelValidator<TimeModel> {
  public validateModelValue(time: TimeModel): boolean {
    if (!isTimestamp(time.value)) return false
    if (!timeRange.containsValue(time.value)) return false
  
    return true
  }

  public validateControlValue(value: string): boolean {
    if (!timeRegex.test(value)) return false

    const [ hours, minutes ] = value.split(':').map(Number)

    if (!isTimestamp(hours) || !isTimestamp(minutes)) return false
    if (!hoursRange.containsValue(hours) || !minutesRange.containsValue(minutes)) return false

    return true
  }
}

export const timeValidator = new TimeValidator()
