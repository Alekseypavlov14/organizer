import type { ModelValidator } from '@/entities/shared'
import type { MomentModel } from './moment.model'
import { dateValidator } from '../date'
import { timeValidator } from '../time'
import { momentRegex } from './constants'

export class MomentValidator implements ModelValidator<MomentModel> {
  public validateModelValue(moment: MomentModel): boolean {
    return (
      dateValidator.validateModelValue(moment.date) &&
      timeValidator.validateModelValue(moment.time)
    )
  } 

  public validateControlValue(value: string): boolean {
    if (!momentRegex.test(value)) return false

    const [ date, time ] = value.split(' ')

    return (
      dateValidator.validateControlValue(date) &&
      timeValidator.validateControlValue(time)
    )
  }
}

export const momentValidator = new MomentValidator()
