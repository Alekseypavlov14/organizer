import type { TimeModel } from './time.model'
import { createTimeModel } from './time.constructor'
import { timeFormatter } from './constants'
import { ModelFormat } from '@/entities/shared/utils/formatting'
import { DateTime } from '@oleksii-pavlov/date-time'

export class TimeFormat extends ModelFormat<TimeModel> {
  public toControl(time: TimeModel): string {
    const date = new DateTime(time.value)
    return timeFormatter(date.getTimeInMilliseconds())
  }

  public toModel(value: string): TimeModel {
    const [ hours, minutes ] = value.split(':').map(Number)

    const date = new DateTime({ 
      years: 0,
      months: 0,
      days: 0,
      hours, 
      minutes,
    })

    return createTimeModel(date.getTimeInMilliseconds())
  }

  public displayControl(value: string): string {
    return value
  }

  public displayModel(time: TimeModel): string {
    return this.displayControl(this.toControl(time))
  }
}
