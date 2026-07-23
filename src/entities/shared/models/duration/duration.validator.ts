import type { DurationModel } from './duration.model'
import { ModelValidator } from '@/entities/shared/utils/validation'
import { durationRegex } from './constants'

export class DurationValidator extends ModelValidator<DurationModel> {
  public validateModelValue(duration: DurationModel): boolean {
    if (!Number.isInteger(duration.value)) return false
    if (duration.value < 0) return false
    
    return true
  }

  public validateControlValue(value: string): boolean {
    return durationRegex.test(value)
  }
}

export const durationValidator = new DurationValidator()
