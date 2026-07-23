import type { Nullable } from '@/shared/types/nullable'
import { LocalStorage } from '@oleksii-pavlov/storages'

export class ModelStorage<T> {
  private readonly key: string
  private readonly storage: LocalStorage<T[]>

  constructor(key: string) {
    this.key = key
    this.storage = new LocalStorage(this.key)
  }

  public getAll(): T[] {
    const items = this.storage.getValue() ?? []
    return items
  }

  public save(item: T): void {
    const items = this.getAll()
    items.push(item)

    this.storage.setValue(items)
  } 

  public getByIndex(index: number): Nullable<T> {
    const items = this.getAll()
    const item = items.at(index)
    return item ?? null
  }

  public updateByIndex(index: number, item: T): Nullable<T> {
    const candidate = this.getByIndex(index)
    if (!candidate) return null

    const items = this.getAll()
    items.splice(index, 1, item)
    this.storage.setValue(items)

    return item
  }

  public deleteByIndex(index: number): Nullable<T> {
    const candidate = this.getByIndex(index)
    if (!candidate) return null

    const items = this.getAll()
    items.splice(index, 1)
    this.storage.setValue(items)

    return candidate
  }
}
