import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'

import { PlayerStorageDTO } from './PlayerStorageDTO'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, '')
}
