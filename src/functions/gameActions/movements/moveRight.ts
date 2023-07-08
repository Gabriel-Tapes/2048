import { bubbleRight, swapRight } from './utils'

export const moveRight = (state: number[][]) => {
  return state.map(line => {
    const sortedLine = [...line]

    bubbleRight(sortedLine)
    swapRight(sortedLine)
    bubbleRight(sortedLine)

    return sortedLine
  })
}
