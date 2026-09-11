import { useEffect, type RefObject } from 'react'

export function useEnterPressed<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: () => void,
) {
  useEffect(() => {
    if (!ref.current) return

    function listener(e: KeyboardEvent) {
      if (e.key !== 'Enter') return
      handler()
    }

    const element = ref.current

    element.addEventListener('keydown', listener)

    return () => {
      element.removeEventListener('keydown', listener)
    }
  }, [ref, handler])
}
