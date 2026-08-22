import { entityTitleRegex } from '../constants'

export function validateEntityTitle(title: string) {
  return entityTitleRegex.test(title)
}
