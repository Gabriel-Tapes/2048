import { type posibleGameActions } from 'types'
import { gameActions } from 'functions'

interface gameActionsProps {
  type: posibleGameActions
}

export const gameReducer = (
  gameState: number[][],
  { type }: gameActionsProps
) => {
  return gameActions[type]([...gameState])
}
