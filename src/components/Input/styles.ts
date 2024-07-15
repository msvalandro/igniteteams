import styled from 'styled-components/native'

export const InputContainer = styled.TextInput`
  min-height: 56px;
  max-height: 56px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  flex: 1;
`
