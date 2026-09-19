import type { ModelValidator } from '@/entities/shared'
import type { DurationModel } from './duration.model'
import { durationRegex } from './constants'
import { isTimestamp } from '@/shared/utils/validation'

export class DurationValidator implements ModelValidator<DurationModel> {
  public validateModelValue(duration: DurationModel): boolean {
    return isTimestamp(duration)
  }

  public validateControlValue(value: string): boolean {
    return durationRegex.test(value)
  }
}

export const durationValidator = new DurationValidator()
