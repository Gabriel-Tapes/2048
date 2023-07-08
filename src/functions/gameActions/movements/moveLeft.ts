import { bubbleLeft, swapLeft } from './utils'

export const moveLeft = (state: number[][]) => {
  return state.map(line => {
    const sortedLine = [...line]

    bubbleLeft(sortedLine)
    swapLeft(sortedLine)
    bubbleLeft(sortedLine)

    return sortedLine
  })
}
