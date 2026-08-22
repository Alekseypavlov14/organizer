export interface ModelFormat<Model> {
  toControl: (model: Model) => string
  toModel: (value: string) => Model

  displayControl: (value: string) => string
  displayModel: (model: Model) => string
}
