import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'

import { Content, Icon, NewGroupContainer } from './styles'

export function NewGroup() {
  return (
    <NewGroupContainer>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Button title="Criar" />
      </Content>
    </NewGroupContainer>
  )
}
