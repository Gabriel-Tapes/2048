import { moveRight } from './moveRight'

describe('moveRight()', () => {
  it('should be able to move right', () => {
    const state = [
      [2, 2, 1, 1],
      [2, 2, 1, 2],
      [1, 2, 1, 4],
      [1, 4, 4, 2]
    ]

    expect(moveRight(state)).toEqual([
      [1, 1, 1, 4],
      [1, 1, 2, 4],
      [1, 1, 2, 4],
      [1, 1, 8, 2]
    ])
  })
})
