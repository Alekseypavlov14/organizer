import type { ModelValidator } from '../../interfaces/model.validator'
import type { DateModel } from './date.model'
import { dateRegex } from './constants'

export class DateValidator implements ModelValidator<DateModel> {
  public validateModelValue(date: DateModel): boolean {
    if (!Number.isInteger(date.value)) return false
    if (date.value < 0) return false
    
    return true
  }

  public validateControlValue(value: string): boolean {
    return dateRegex.test(value)
  }
}

export const dateValidator = new DateValidator()
