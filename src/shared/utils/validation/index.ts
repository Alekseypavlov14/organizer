import type { Timestamp } from '../datetime'

export function isNull(value: any): value is null {
  return value === null
}

export function isString(value: any): value is string {
  return typeof value === 'string'
}

export function isNumber(value: any): value is number {
  return typeof value === 'number'
}

export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean'
}

export function isTimestamp(value: any): value is Timestamp {
  return Number.isInteger(value) && value >= 0
}
