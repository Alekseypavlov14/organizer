// merge callbacks to one callback
export function merge<P extends Array<any>>(...functions: ((...args: P) => any)[]) {
  return (...args: P): void => {
    functions.forEach(f => f(...args))
  }
}
