import { transpose } from '.'

describe('transpose()', () => {
  it('should be able to transpose a matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ]

    expect(transpose(matrix)).toEqual([
      [1, 3],
      [2, 4]
    ])
  })

  it('should returns the same matrix if called two times', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ]

    expect(transpose(transpose(matrix))).toEqual(matrix)
  })
})
