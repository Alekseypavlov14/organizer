import { hoursRange, minutesRange, timeRegex } from './constants'
import { ModelValidator } from '@/entities/shared/utils/validation'

export class TimeValidator extends ModelValidator {
  public validate(value: string): boolean {
    if (!timeRegex.test(value)) return false

    const [ hours, minutes ] = value.split(':').map(Number)

    if (!Number.isInteger(hours) || !Number.isInteger(minutes)) return false
    if (!hoursRange.containsValue(hours) || !minutesRange.containsValue(minutes)) return false

    return true
  }
}