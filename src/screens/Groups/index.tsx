import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { useState } from 'react'
import { FlatList } from 'react-native'

import { GroupsContainer } from './styles'

export function Groups() {
  const [groups, setGroups] = useState([
    'Armada de Dumbledore',
    'Ordem da Fênix',
  ])

  return (
    <GroupsContainer>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </GroupsContainer>
  )
}
