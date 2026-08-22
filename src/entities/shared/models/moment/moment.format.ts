import type { ModelFormat } from '@/entities/shared'
import type { MomentModel } from './moment.model'
import { createMomentModel } from './moment.constructor'
import { dateFormat } from '../date'
import { timeFormat } from '../time'

export class MomentFormat implements ModelFormat<MomentModel> {
  public toControl(moment: MomentModel): string {
    return `${dateFormat.toControl(moment.date)} ${timeFormat.toControl(moment.time)}`
  }

  public toModel(value: string): MomentModel {
    const [ date, time ] = value.split(' ')

    return createMomentModel(
      dateFormat.toModel(date),
      timeFormat.toModel(time)
    )
  }

  public displayControl(value: string): string {
    return value
  }

  public displayModel(moment: MomentModel): string {
    return this.displayControl(this.toControl(moment))
  }
}

export const momentFormat = new MomentFormat()
