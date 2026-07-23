import type { DurationModel } from './duration.model'
import { MILLISECONDS_PER_DAY, MILLISECONDS_PER_HOUR, MILLISECONDS_PER_MINUTE } from '@/shared/utils/datetime'
import { createDurationModel } from './duration.constructor'
import { ModelFormat } from '@/entities/shared/utils/formatting'

export class DurationFormat extends ModelFormat<DurationModel> {
  public toControl(duration: DurationModel): string {
    let remainder = duration.value

    const days = Math.floor(remainder / MILLISECONDS_PER_DAY)
    remainder -= days * MILLISECONDS_PER_DAY

    const hours = Math.floor(remainder / MILLISECONDS_PER_HOUR)
    remainder -= hours * MILLISECONDS_PER_HOUR

    const minutes = Math.floor(remainder / MILLISECONDS_PER_MINUTE)
    remainder -= minutes * MILLISECONDS_PER_MINUTE

    let representation = String(minutes)

    if (days > 0 || hours > 0) representation = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    if (days > 0) representation = `${days}:${representation}`

    return representation
  }

  public toModel(value: string): DurationModel {
    const slots = value.split(':')

    const minutes = Number(slots.at(-1)) || 0
    const hours = Number(slots.at(-2)) || 0
    const days = Number(slots.at(-3)) || 0

    const milliseconds = days * MILLISECONDS_PER_DAY + hours * MILLISECONDS_PER_HOUR + minutes * MILLISECONDS_PER_MINUTE
    return createDurationModel(milliseconds)
  }
  
  public displayControl(value: string): string {
    const slots = value.split(':')

    const minutes = Number(slots.at(-1)) || 0
    const hours = Number(slots.at(-2)) || 0
    const days = Number(slots.at(-3)) || 0

    const segments = []

    if (days > 0) segments.push(`${days}d`)
    if (hours > 0) segments.push(`${hours}h`)
    if (minutes > 0) segments.push(`${minutes}m`)

    if (segments.length === 0) segments.push('0m')

    return segments.join(' ')
  }
  
  public displayModel(value: DurationModel): string {
    return this.displayControl(this.toControl(value))
  }
}

export const durationFormat = new DurationFormat()
