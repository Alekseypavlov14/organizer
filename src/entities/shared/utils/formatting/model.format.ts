export abstract class ModelFormat<Model> {
  public abstract toControl(value: Model): string
  public abstract toModel(value: string): Model

  public abstract displayControl(value: string): string
  public abstract displayModel(value: Model): string
}
