import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const InputContainer = styled(TextInput)`
  min-height: 56px;
  max-height: 56px;
  padding: 16px;

  border-radius: 6px;

  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    background-color: ${theme.COLORS.GRAY_700};
  `}
`
