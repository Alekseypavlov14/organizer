export function clamp(min: number, value: number, max: number) {
  if (min >= value) return min
  if (max <= value) return max
  return value
}
