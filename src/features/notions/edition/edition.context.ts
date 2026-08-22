import type { Id } from '@/shared/types/id'

// variant field is used to distinguish different contexts
export type EditionContextVariant = 'base' | 'group'

export const editionContextVariantBase: EditionContextVariant = 'base'
export const editionContextVariantGroup: EditionContextVariant = 'group'

// edition context is a base form of context
export abstract class EditionContext {
  public readonly variant: EditionContextVariant

  constructor(variant: EditionContextVariant) {
    this.variant = variant
  }
}

// context for general notion creation
export class BaseEditionContext extends EditionContext {
  constructor() {
    super(editionContextVariantBase)
  }
}

// context for in-group notion creation
export class GroupEditionContext extends EditionContext {
  public readonly groupId: Id

  constructor(groupId: Id) {
    super(editionContextVariantGroup)
    this.groupId = groupId
  }
}

export function isEditionContextVariantBase(context: EditionContext): context is BaseEditionContext {
  return context.variant === editionContextVariantBase
}

export function isEditionContextVariantGroup(context: EditionContext): context is GroupEditionContext {
  return context.variant === editionContextVariantGroup
}
