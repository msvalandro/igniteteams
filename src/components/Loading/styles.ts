import styled from 'styled-components/native'

export const LoadingContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
}))``
