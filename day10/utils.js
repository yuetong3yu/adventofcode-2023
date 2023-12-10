const START_POINT = 'S'

// const CONNECTABLE_MAP = {
//   ['|']: ['F', 'L', '7', 'J'],
//   // ['-']: ['F', '7', 'L', 'J'],
//   ['-']: {
//     right: ['']
//   },
//   ['7']: {
//     top: '-',
//     right: '|',
//   },
//   ['J']: {
//     bottom: '-',
//     right: '|',
//   },
//   ['L']: {
//     bottom: '-',
//     left: '|',
//   },
//   ['F']: {
//     top: '-',
//     left: '|',
//   },
//   ['.']: undefined,
// }
const DIRECTION_TO_ALLOWABLE_JOINT = {
  top: ['|', '7', 'F'],
  bottom: ['|', 'J', 'L'],
  left: ['-', 'L', 'F'],
  right: ['-', 'J', '7'],
}

export function getStartPoint(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === START_POINT) return [i, j]
    }
  }
}

export function getResultFromStartPoint(
  matrix,
  start_point,
  direction_from,
  res
) {
  const target_point = getTargetPoint(matrix, start_point, direction_from)
  // IF loop founded
  if (target_point === 'S') {
    return res
  }
  // IF not jointed
  if (!DIRECTION_TO_ALLOWABLE_JOINT[direction_from]?.includes(target_point)) {
    return undefined
  }

  if (direction_from === 'top') {
    const target_point = [start_point[0] - 1, start_point[1]]
    res.push(target_point)
    const next_char = matrix[target_point[0]][target_point[1]]
    let direction = ''
    if (next_char === '|') {
      direction = 'top'
    } else if (next_char === '7') {
      direction = 'left'
    } else if (next_char === 'F') {
      direction = 'right'
    } else {
      return undefined
    }
    return getResultFromStartPoint(matrix, target_point, direction, res)
  }
  if (direction_from === 'left') {
    const target_point = [start_point[0], start_point[1] - 1]
    res.push(target_point)
    const next_char = matrix[target_point[0]][target_point[1]]
    let direction = ''
    if (next_char === '-') {
      direction = 'left'
    } else if (next_char === 'L') {
      direction = 'top'
    } else if (next_char === 'F') {
      direction = 'bottom'
    } else {
      return undefined
    }
    return getResultFromStartPoint(matrix, target_point, direction, res)
  }
  if (direction_from === 'right') {
    const target_point = [start_point[0], start_point[1] + 1]
    res.push(target_point)
    const next_char = matrix[target_point[0]][target_point[1]]
    let direction = ''
    if (next_char === '-') {
      direction = 'right'
    } else if (next_char === 'J') {
      direction = 'top'
    } else if (next_char === '7') {
      direction = 'bottom'
    } else {
      return undefined
    }
    return getResultFromStartPoint(matrix, target_point, direction, res)
  }
  if (direction_from === 'bottom') {
    const target_point = [start_point[0] + 1, start_point[1]]
    res.push(target_point)
    const next_char = matrix[target_point[0]][target_point[1]]
    let direction = ''
    if (next_char === '|') {
      direction = 'bottom'
    } else if (next_char === 'J') {
      direction = 'left'
    } else if (next_char === 'L') {
      direction = 'right'
    } else {
      return undefined
    }
    return getResultFromStartPoint(matrix, target_point, direction, res)
  }
}

export function isThisPointConnected(matrix, point, from) {}

export function getTargetPoint(matrix, point, direction) {
  if (direction === 'top') return matrix[point[0] - 1][point[1]]

  if (direction === 'left') return matrix[point[0]][point[1] - 1]

  if (direction === 'bottom') return matrix[point[0] + 1][point[1]]

  if (direction === 'right') return matrix[point[0]][point[1] + 1]
}
