import { ButtonIcon } from '@components/ButtonIcon'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'

import { Form, PlayersContainer } from './styles'

export function Players() {
  return (
    <PlayersContainer>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>
    </PlayersContainer>
  )
}
