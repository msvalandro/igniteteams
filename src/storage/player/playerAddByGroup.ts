import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'

import { playersGetByGroup } from './playersGetByGroup'
import { PlayerStorageDTO } from './PlayerStorageDTO'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  const storedPlayers = await playersGetByGroup(group)

  const playerAlreadyExists = storedPlayers.find(
    (player) => player.name === newPlayer.name,
  )

  if (playerAlreadyExists) {
    throw new AppError('Essa pessoa já está adicionada em um time aqui.')
  }

  const storage = JSON.stringify([...storedPlayers, newPlayer])

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
}
