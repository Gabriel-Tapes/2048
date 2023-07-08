import { moveLeft } from './moveLeft'

describe('moveLeft()', () => {
  it('should be able to move left', () => {
    const state = [
      [2, 2, 1, 1],
      [2, 2, 1, 2],
      [1, 2, 1, 4],
      [1, 4, 4, 2]
    ]

    expect(moveLeft(state)).toEqual([
      [4, 1, 1, 1],
      [4, 2, 1, 1],
      [2, 4, 1, 1],
      [8, 2, 1, 1]
    ])
  })
})
