import { UsersThree } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const NewGroupContainer = styled.View`
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`
