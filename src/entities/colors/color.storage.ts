import type { ColorEntity } from './color.entity'
import { Storage } from '@/shared/utils/storage'

export class ColorEntityStorage extends Storage<ColorEntity, ColorEntity> {
  public deserialize(record: ColorEntity): ColorEntity {
    return record
  }

  public serialize(entity: ColorEntity): ColorEntity {
    return entity
  }
}
