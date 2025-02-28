import styled, { css } from 'styled-components/native'

export const ListEmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_300};
  `}
`
