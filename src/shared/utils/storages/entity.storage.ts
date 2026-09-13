import type { Nullable } from '@/shared/types/nullable'
import type { Entity } from '@/shared/types/entity'
import type { Id } from '@/shared/types/id'
import { LocalStorage } from '@oleksii-pavlov/storages'

export abstract class EntityStorage<IEntity extends Entity, IRecord extends Entity = IEntity> {
  private readonly key: string
  private readonly storage: LocalStorage<IRecord[]>

  constructor(key: string) {
    this.key = key
    this.storage = new LocalStorage(this.key)
  }

  public abstract deserialize(record: IRecord): IEntity
  public abstract serialize(entity: IEntity): IRecord
  public abstract validate(entity: IEntity): boolean
  
  public getAll(): IEntity[] {
    const records: Nullable<IRecord[]> = this.storage.getValue()
    if (!records || !records.length) return []

    const entities: IEntity[] = records.map(record => this.deserialize(record))
    const validated = entities.filter(entity => this.validate(entity))

    return validated
  }

  public save(entity: IEntity): Nullable<IEntity> {
    if (!this.validate(entity)) return null

    const records: Nullable<IRecord[]> = this.storage.getValue() ?? []
    entity.savedAt = Date.now()

    const recordIndex = records.findIndex(record => record.id === entity.id)
    if (recordIndex === -1) {
      records.push(this.serialize(entity))
      this.storage.setValue(records)

      return entity
    }

    records[recordIndex] = this.serialize(entity)
    this.storage.setValue(records)

    return entity
  }

  public getById(id: Id): Nullable<IEntity> {
    const records: Nullable<IRecord[]> = this.storage.getValue()
    if (!records || !records.length) return null

    const record: Nullable<IRecord> = records.find(record => record.id === id) ?? null
    if (!record) return null

    const entity = this.deserialize(record)
    if (!this.validate(entity)) return null

    return entity
  }

  public deleteById(id: Id): Nullable<IEntity> {
    const records: IRecord[] = this.storage.getValue() ?? []

    const entity = this.getById(id)
    if (!entity) return null

    const filteredRecords: IRecord[] = records.filter(record => record.id !== id)
    if (filteredRecords.length === records.length) return null

    this.storage.setValue(filteredRecords)

    return entity
  } 
}
