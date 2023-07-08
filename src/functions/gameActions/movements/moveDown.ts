import { transpose } from 'functions'
import { bubbleRight, swapRight } from './utils'

export const moveDown = (state: number[][]) => {
  return transpose(
    transpose(state).map(line => {
      const sortedLine = [...line]

      bubbleRight(sortedLine)
      swapRight(sortedLine)
      bubbleRight(sortedLine)

      return sortedLine
    })
  )
}
