import { TouchableOpacityProps } from 'react-native'

import { FilterContainer, FilterStyleProps, Title } from './styles'

interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <FilterContainer isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </FilterContainer>
  )
}
