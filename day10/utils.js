const START_POINT = 'S'

export function getStartPoint(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === START_POINT) return [i, j]
    }
  }
}

export function isThisPointConnected(matrix, point, from) {}
