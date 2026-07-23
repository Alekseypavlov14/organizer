import type { DateModel } from './date.model'

export function createDateModel(value: number): DateModel {
  return ({ value })
}
