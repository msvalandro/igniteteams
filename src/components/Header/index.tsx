import logoImg from '@assets/logo.png'

import { HeaderContainer, Logo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo source={logoImg} />
    </HeaderContainer>
  )
}
