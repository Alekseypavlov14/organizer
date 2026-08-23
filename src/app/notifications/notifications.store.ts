import type { Notification } from './notification.type'
import type { Id } from '@/shared/types/id'
import { create } from 'zustand'

export interface NotificationsState {
  notifications: Notification[]
}

export interface NotificationsActions {
  addNotification: (notification: Notification) => void
  removeNotification: (id: Id) => void
}

export interface NotificationsStore extends NotificationsState, NotificationsActions {}

export const useNotificationsStore = create<NotificationsStore>(set => ({
  notifications: [],
  addNotification: (notification) => set(state => ({ ...state, notifications: state.notifications.concat([ notification ]) })),
  removeNotification: (id) => set(state => ({ ...state, notifications: state.notifications.filter(notification => notification.id !== id ) }))
}))

export const notificationsSelector = (store: NotificationsStore) => store.notifications
export const addNotificationSelector = (store: NotificationsStore) => store.addNotification
export const removeNotificationSelector = (store: NotificationsStore) => store.removeNotification
