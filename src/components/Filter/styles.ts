import styled, { css } from 'styled-components/native'

export interface FilterStyleProps {
  isActive?: boolean
}

export const FilterContainer = styled.TouchableOpacity<FilterStyleProps>`
  height: 38px;
  width: 70px;
  margin-right: 12px;

  border-radius: 4px;

  align-items: center;
  justify-content: center;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `};
`

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`
