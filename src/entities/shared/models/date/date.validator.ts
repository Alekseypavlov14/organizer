import type { ModelValidator } from '../../interfaces/model.validator'
import type { DateModel } from './date.model'
import { isTimestamp } from '@/shared/utils/validation'
import { dateRegex } from './constants'

export class DateValidator implements ModelValidator<DateModel> {
  public validateModelValue(date: DateModel): boolean {
    return isTimestamp(date.value)
  }

  public validateControlValue(value: string): boolean {
    return dateRegex.test(value)
  }
}

export const dateValidator = new DateValidator()
