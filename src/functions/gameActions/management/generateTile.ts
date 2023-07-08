import { rand } from './utils'

export const generateTile = (state: number[][]) => {
  const newState = [...state]

  const max = newState.length - 1

  let row = rand(max)
  let col = rand(max)

  while (newState[row][col] !== 1) {
    row = rand(max)
    col = rand(max)
  }

  newState[row][col] = Date.now() % 2 ? 2 : 4

  return newState
}
