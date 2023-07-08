import { transpose } from 'functions'
import { bubbleLeft, swapLeft } from './utils'

export const moveUp = (state: number[][]) => {
  return transpose(
    transpose(state).map(line => {
      const sortedLine = [...line]

      bubbleLeft(sortedLine)
      swapLeft(sortedLine)
      bubbleLeft(sortedLine)

      return sortedLine
    })
  )
}
