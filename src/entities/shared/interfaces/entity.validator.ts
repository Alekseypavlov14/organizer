export interface EntityValidator<E> {
  validateEntity: (entity: E) => boolean
}
