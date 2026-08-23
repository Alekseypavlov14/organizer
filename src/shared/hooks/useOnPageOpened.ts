import { useEffect } from 'react'

export function useOnPageOpened(callback: () => void = () => {}) {
  useEffect(() => {
    callback()
  }, [])
}
