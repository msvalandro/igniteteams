import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { useState } from 'react'
import { FlatList } from 'react-native'

import { GroupsContainer } from './styles'

export function Groups() {
  const [groups, setGroups] = useState([
    // 'Armada de Dumbledore',
    // 'Comensais da Morte',
  ])

  return (
    <GroupsContainer>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </GroupsContainer>
  )
}
