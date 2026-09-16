import { colorValidator, createColorModel } from '@/entities/shared'
import { useColorAddStore, valueSelector } from '../../add.store'
import { ColorIndicator } from '@/features/colors/shared'
import { isNull } from '@/shared/utils/validation'
import styles from './ColorAddPreview.module.css'

export function ColorAddPreview() {
  const value = useColorAddStore(valueSelector)
  const color = colorValidator.validateControlValue(value) ? value : null

  return (
    <div className={styles.ColorAddPreview}>
      {!isNull(color) ? (
        <ColorIndicator 
          className={styles.Fill}
          value={createColorModel(color)}
        />
      ) : null}
    </div>
  )
}
