import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'

import { playersGetByGroup } from './playersGetByGroup'

export async function playerRemoveByGroup(playerName: string, group: string) {
  const storage = await playersGetByGroup(group)

  const filteredPlayers = storage.filter((player) => player.name !== playerName)
  const players = JSON.stringify(filteredPlayers)

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
}
