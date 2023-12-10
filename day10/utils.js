const START_POINT = 'S'

export function getStartPoint(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === START_POINT) return [i, j]
    }
  }
}

export function getResultFromStartPoint(matrix, point, direction_from) {}

export function isThisPointConnected(matrix, point, from) {}

export function getTargetPoint(matrix, point, direction) {
  if (direction === 'top') return matrix[point[0] - 1][point[1]]

  if (direction === 'left') return matrix[point[0]][point[1] - 1]

  if (direction === 'bottom') return matrix[point[0] + 1][point[1]]

  if (direction === 'right') return matrix[point[0]][point[1] + 1]
}
