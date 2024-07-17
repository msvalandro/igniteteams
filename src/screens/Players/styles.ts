import styled from 'styled-components/native'

export const PlayersContainer = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
`

export const Form = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
`
