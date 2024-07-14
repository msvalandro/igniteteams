import logoImg from '@assets/logo.png'

import { BackButton, BackIcon, HeaderContainer, Logo } from './styles'

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </HeaderContainer>
  )
}
