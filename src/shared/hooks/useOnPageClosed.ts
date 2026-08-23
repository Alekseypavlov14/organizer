import { useEffect } from 'react'

export function useOnPageClosed(callback: () => void = () => {}) {
  useEffect(() => {
    return callback
  }, [])
}
