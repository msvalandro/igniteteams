import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface ButtonIconProps {
  type: ButtonIconTypeStyleProps
}

export const ButtonIconContainer = styled.TouchableOpacity<ButtonIconProps>`
  height: 56px;
  width: 56px;
  margin-left: 12px;

  justify-content: center;
  align-items: center;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  }),
)``
