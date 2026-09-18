import { createModalInstance, createModalStackInstance } from '@/features/shared/modals'

export const useGroupFeedModalStack = createModalStackInstance()

export const useGroupCreationSelectActionModal = createModalInstance()
export const useGroupEditionSelectActionModal = createModalInstance()

export const useGroupDeleteConfirmationModal = createModalInstance()
