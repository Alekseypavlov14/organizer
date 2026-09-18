import type { DateModel } from '../date'
import { timeFormat, type TimeModel } from '../time'

export function createMomentModel(date: DateModel, time: TimeModel) {
  return ({ date, time })
}

export function createMomentModelWithDate(date: DateModel) {
  const time = timeFormat.toModel('23:59')
  return ({ date, time })
}
