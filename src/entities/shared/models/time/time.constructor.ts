import type { TimeModel } from './time.model'

export function createTimeModel(value: number): TimeModel {
  return ({ value })
}
