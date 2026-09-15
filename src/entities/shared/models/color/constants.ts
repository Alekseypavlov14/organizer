import type { ColorModel } from './color.model'
import { createColorModel } from './color.constructor'

export const colorRegex = /^#([0-9a-fA-F]{3}){1,2}$/

export const defaultColorModel: ColorModel = createColorModel('#fff')
