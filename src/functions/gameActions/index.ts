import { moveUp } from './movements/moveUp'
import { moveDown } from './movements/moveDown'
import { moveLeft } from './movements/moveLeft'
import { moveRight } from './movements/moveRight'
import { generateTile } from './management/generateTile'

export const gameActions = {
  moveUp(state: number[][]) {
    const posMoveState = moveUp(state)
    return generateTile(posMoveState)
  },
  moveDown(state: number[][]) {
    const posMoveState = moveDown(state)
    return generateTile(posMoveState)
  },
  moveLeft(state: number[][]) {
    const posMoveState = moveLeft(state)
    return generateTile(posMoveState)
  },
  moveRight(state: number[][]) {
    const posMoveState = moveRight(state)
    return generateTile(posMoveState)
  }
}
