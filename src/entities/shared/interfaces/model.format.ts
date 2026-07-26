export abstract class ModelFormat<Model> {
  public abstract toControl(model: Model): string
  public abstract toModel(value: string): Model

  public abstract displayControl(value: string): string
  public abstract displayModel(model: Model): string
}
