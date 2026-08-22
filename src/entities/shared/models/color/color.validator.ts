import type { ModelValidator } from '@/entities/shared'
import type { ColorModel } from './color.model'
import { colorRegex } from './constants'

export class ColorValidator implements ModelValidator<ColorModel> {  
  validateControlValue(value: string): boolean {
    return colorRegex.test(value)
  }

  validateModelValue(model: ColorModel): boolean {
    return this.validateControlValue(model.value)
  }
}

export const colorValidator = new ColorValidator()
