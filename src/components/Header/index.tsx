import logoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'

import { BackButton, BackIcon, HeaderContainer, Logo } from './styles'

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </HeaderContainer>
  )
}
