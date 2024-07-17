import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

import { ButtonIconContainer, ButtonIconTypeStyleProps, Icon } from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({
  icon,
  type = 'PRIMARY',
  ...rest
}: ButtonIconProps) {
  return (
    <ButtonIconContainer type={type} {...rest}>
      <Icon name={icon} type={type} />
    </ButtonIconContainer>
  )
}
