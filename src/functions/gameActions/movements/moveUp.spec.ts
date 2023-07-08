import { moveUp } from './moveUp'

describe('moveUp()', () => {
  it('should be able to move up', () => {
    const state = [
      [2, 2, 1, 1],
      [2, 2, 1, 2],
      [1, 2, 1, 4],
      [1, 4, 4, 2]
    ]

    expect(moveUp(state)).toEqual([
      [4, 4, 4, 2],
      [1, 2, 1, 4],
      [1, 4, 1, 2],
      [1, 1, 1, 1]
    ])
  })
})
