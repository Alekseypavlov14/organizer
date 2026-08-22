import type { ModelValidator } from '@/entities/shared'
import type { DurationModel } from './duration.model'
import { durationRegex } from './constants'

export class DurationValidator implements ModelValidator<DurationModel> {
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
