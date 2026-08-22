export interface ModelValidator<Model> {
  validateModelValue: (value: Model) => boolean
  validateControlValue: (value: string) => boolean
}
