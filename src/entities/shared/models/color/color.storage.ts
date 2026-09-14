import type { ColorModel } from './color.model'
import { colorValidator } from './color.validator'
import { ModelStorage } from '@/shared/utils/storages'

export class ColorModelStorage extends ModelStorage<ColorModel> {
  public validate(item: ColorModel): boolean {
    return colorValidator.validateModelValue(item)
  }
}

export const colorModelStorage = new ColorModelStorage('models/colors')
