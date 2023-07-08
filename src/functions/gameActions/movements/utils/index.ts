export const bubbleRight = (line: number[]) => {
  let bubble = true

  while (bubble) {
    bubble = false

    for (let i = line.length - 1; i > 0; --i) {
      if (line[i] === 1 && line[i - 1] !== 1) {
        ;[line[i], line[i - 1]] = [line[i - 1], line[i]]
        bubble = true
      }
    }
  }
}

export const bubbleLeft = (line: number[]) => {
  let bubble = true

  while (bubble) {
    bubble = false

    for (let i = 0; i < line.length - 1; ++i) {
      if (line[i] === 1 && line[i + 1] !== 1) {
        ;[line[i], line[i + 1]] = [line[i + 1], line[i]]
        bubble = true
      }
    }
  }
}

export const swapRight = (line: number[]) => {
  for (let i = line.length - 1; i > 0; --i)
    if (line[i - 1] !== 1 && line[i] === line[i - 1])
      [line[i], line[i - 1]] = [line[i] * 2, 1]
}

export const swapLeft = (line: number[]) => {
  for (let i = 0; i < line.length - 1; ++i)
    if (line[i + 1] !== 1 && line[i] === line[i + 1])
      [line[i], line[i + 1]] = [line[i] * 2, 1]
}
