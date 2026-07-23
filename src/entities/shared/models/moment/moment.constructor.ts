import type { DateModel } from '../date'
import type { TimeModel } from '../time'

export function createMomentModel(date: DateModel, time: TimeModel) {
  return ({ date, time })
}
