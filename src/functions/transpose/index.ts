export const transpose = (matrix: number[][]) => {
  return Array.from({ length: matrix[0].length }, (_, colIndex) =>
    matrix.map(row => row[colIndex])
  )
}
