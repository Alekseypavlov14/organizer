export abstract class ModelValidator<Model> {
  public abstract validateModelValue(value: Model): boolean
  public abstract validateControlValue(value: string): boolean
}
