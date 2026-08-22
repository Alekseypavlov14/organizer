export function useNotifications() {
  function createSuccessNotification(message: string) {}
  function createErrorNotification(message: string) {}
  function createWarningNotification(message: string) {}
  function createInfoNotification(message: string) {}

  return ({
    createSuccessNotification,
    createErrorNotification,
    createWarningNotification,
    createInfoNotification,
  })
}
