import { create } from 'zustand'

interface DynamicActionState<T extends Function> {
  callback: T
}

interface DynamicActionActions<T extends Function> {
  updateCallback: (callback: T) => void
}

interface DynamicActionStore<T extends Function> extends DynamicActionState<T>, DynamicActionActions<T> {} 

export function createDynamicActionInstance<T extends Function>(initialCallback: T) {
  return create<DynamicActionStore<T>>(set => ({
    callback: initialCallback,
    updateCallback: (callback: T) => set(state => ({ ...state, callback }))
  }))
}
