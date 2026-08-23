import type { Notification } from './notification.type'
import { create } from 'zustand'

export interface NotificationsState {
  notifications: Notification[]
}

export interface NotificationsActions {
  updateNotifications: (notifications: Notification[]) => void
  addNotification: (notification: Notification) => void
}

export interface NotificationsStore extends NotificationsState, NotificationsActions {}

export const useNotificationsStore = create<NotificationsStore>(set => ({
  notifications: [],
  updateNotifications: (notifications) => set(state => ({ ...state, notifications })),
  addNotification: (notification) => set(state => ({ ...state, notifications: state.notifications.concat([ notification ]) })),
}))

export const notificationsSelector = (store: NotificationsStore) => store.notifications
export const updateNotificationsSelector = (store: NotificationsStore) => store.updateNotifications
export const addNotificationSelector = (store: NotificationsStore) => store.addNotification
