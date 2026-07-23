import type { DateModel } from './date.model'
import { ModelValidator } from '@/entities/shared/utils/validation'
import { dateRegex } from './constants'

export class DateValidator extends ModelValidator<DateModel> {
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
