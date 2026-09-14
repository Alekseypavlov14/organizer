import type { ColorModel } from './color.model'

export function createColorModel(value: string): ColorModel {
  return ({ value })
}
