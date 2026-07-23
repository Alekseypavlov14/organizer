import type { DurationModel } from './duration.model'

export function createDurationModel(value: number): DurationModel {
  return ({ value })
}
