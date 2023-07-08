import { moveDown } from './moveDown';

describe('moveDown()', () => {
  it('should be able to move down', () => {
    const state = [
      [2, 2, 1, 1],
      [2, 2, 1, 2],
      [1, 2, 1, 4],
      [1, 4, 4, 2]
    ]

    expect(moveDown(state)).toEqual([
      [1, 1, 1, 1],
      [1, 2, 1, 2],
      [1, 4, 1, 4],
      [4, 4, 4, 2]
    ])
  })
})
