import type { DateModel } from './date.model'
import { dateFormatter } from './constants'
import { ModelFormat } from '@/entities/shared/utils/formatting'
import { DateTime } from '@oleksii-pavlov/date-time'
import { createDateModel } from './date.constructor'

export class DateFormat extends ModelFormat<DateModel> {
  public toControl(date: DateModel): string {
    return dateFormatter(date.value)
  }

  public toModel(value: string): DateModel {
    const [ days, months, years ] = value.split(':').map(Number)
    const date = new DateTime({ years, months, days }).normalizeDate()
    return createDateModel(date.getTimeInMilliseconds())
  }

  public displayControl(value: string): string {
    return value
  }

  public displayModel(date: DateModel): string {
    return this.displayControl(this.toControl(date))
  }
}

export const dateFormat = new DateFormat()
