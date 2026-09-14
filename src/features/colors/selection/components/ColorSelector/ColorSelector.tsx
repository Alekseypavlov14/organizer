import type { ColorModel } from '@/entities/shared'
import type { Nullable } from '@/shared/types/nullable'
import { ColorIndicator, colorIndicatorSizeExtraLarge } from '@/features/colors/shared'
import { deepCompare } from '@oleksii-pavlov/deep-merge'
import styles from './ColorSelector.module.css'
import clsx from 'clsx'

interface ColorSelectorProps {
  colors?: ColorModel[]
  selectedColor?: Nullable<ColorModel>
  onChange?: (color: ColorModel) => void
}

export function ColorSelector({
  colors = [],
  selectedColor = null,
  onChange = () => {},
}: ColorSelectorProps) {
  const isSelectedOption = (option: ColorModel) => deepCompare(option, selectedColor)

  return (
    <div className={styles.ColorSelector}>
      {colors.map((color, index) => (
        <div 
          className={clsx(styles.Option, isSelectedOption(color) && styles.Active)}
          onClick={() => onChange(color)}
          key={index}
        >
          <ColorIndicator 
            size={colorIndicatorSizeExtraLarge}
            value={color} 
          />
        </div>
      ))}
    </div>
  )
}
