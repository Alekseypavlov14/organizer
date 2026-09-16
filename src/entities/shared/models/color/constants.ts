import type { ColorModel } from './color.model'
import { createColorModel } from './color.constructor'

export const colorRegex = /^#([0-9a-fA-F]{3}){1,2}$/

export const defaultColorModel: ColorModel = createColorModel('#fff')

export const predefinedColors: ColorModel[] = [
  { value: '#EF4444' },
  { value: '#F04A3F' },
  { value: '#F0523A' },
  { value: '#F05D35' },
  { value: '#F97316' },

  { value: '#F98213' },
  { value: '#F98D10' },
  { value: '#F59E0B' },
  { value: '#F6AA0A' },
  { value: '#EAB308' },

  { value: '#D9BD08' },
  { value: '#C5C408' },
  { value: '#A8C90C' },
  { value: '#84CC16' },
  { value: '#70CE24' },

  { value: '#58CF35' },
  { value: '#3DCC48' },
  { value: '#22C55E' },
  { value: '#17C77A' },
  { value: '#10B981' },

  { value: '#12BA91' },
  { value: '#14B8A6' },
  { value: '#12B8BA' },
  { value: '#0DB7C8' },
  { value: '#06B6D4' },

  { value: '#0AAEDC' },
  { value: '#0EA5E9' },
  { value: '#209AEF' },
  { value: '#3290F1' },
  { value: '#3B82F6' },

  { value: '#4679F3' },
  { value: '#526FF0' },
  { value: '#4F63E8' },
  { value: '#6366F1' },
  { value: '#705EEB' },

  { value: '#7C5CE6' },
  { value: '#8458E3' },
  { value: '#8B5CF6' },
  { value: '#9956F2' },
  { value: '#A855F7' },

  { value: '#B14EEB' },
  { value: '#B947DF' },
  { value: '#C026D3' },
  { value: '#CD35D8' },
  { value: '#D946EF' },

  { value: '#E347D3' },
  { value: '#E847B9' },
  { value: '#EC4899' },
  { value: '#F04478' },
  { value: '#F43F5E' }
]
