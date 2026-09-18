import { useCallback, useState } from 'react'

export function useDynamicAction<T>(initialCallback: T) {
  const [action, setAction] = useState(() => initialCallback)

  const updateAction = useCallback((action: T) => {
    setAction(() => action)
  }, [])

  return ({ action, updateAction })
}
