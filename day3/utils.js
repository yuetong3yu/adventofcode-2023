import { specialSymbolRegex, numberRegex } from '../shared/index.js'

export function isNumberAdjacentToSymbol(matrix, x, y1, y2) {
  let flag = false
  const str = matrix[x]
  for (let i = y1; i < y2; i++) {
    // top
    if (x !== 0) {
      if (specialSymbolRegex.test(matrix[x - 1][i])) flag = true
    }
    // top-left
    if (x !== 0 && i !== 0) {
      if (specialSymbolRegex.test(matrix[x - 1][i - 1])) flag = true
    }
    // top-rigth
    if (x !== 0 && i !== str.length - 1) {
      if (specialSymbolRegex.test(matrix[x - 1][i + 1])) flag = true
    }
    // left
    if (i !== 0) {
      if (specialSymbolRegex.test(matrix[x][i - 1])) flag = true
    }
    // right
    if (i !== str.length - 1) {
      if (specialSymbolRegex.test(matrix[x][i + 1])) flag = true
    }
    // bottom
    if (x !== matrix.length - 1) {
      if (specialSymbolRegex.test(matrix[x + 1][i])) flag = true
    }
    // bottom-left
    if (x !== matrix.length - 1 && i !== 0) {
      if (specialSymbolRegex.test(matrix[x + 1][i - 1])) flag = true
    }
    // bottom-right
    if (x !== matrix.length - 1 && i !== str.length - 1) {
      if (specialSymbolRegex.test(matrix[x + 1][i + 1])) flag = true
    }
  }

  return flag
}

export function getNeighboursNumbers(matrix, x, y) {
  const length = matrix[0].length
  const height = matrix.length
  if (x == 0 || x == height || y == 0 || y == length) {
    return 0
  }

  const nums = []
  // top-left
  if (numberRegex.test(matrix[x - 1][y - 1])) {
    // get number of neighbor
    const number = +_getNumberOfNeighbor(matrix, x - 1, y - 1)
    if (!nums.includes(number)) {
      nums.push(number)
    }
  }
  // top
  if (numberRegex.test(matrix[x - 1][y])) {
    const number = +_getNumberOfNeighbor(matrix, x - 1, y)
    if (!nums.includes(number)) {
      nums.push(number)
    }
  }
  // top-right
  if (numberRegex.test(matrix[x - 1][y + 1])) {
    const number = +_getNumberOfNeighbor(matrix, x - 1, y + 1)
    if (!nums.includes(number)) {
      nums.push(number)
    }
  }
  // left
  if (numberRegex.test(matrix[x][y - 1])) {
    const number = +_getNumberOfNeighbor(matrix, x, y - 1)
    if (!nums.includes(number)) {
      nums.push(number)
    }
  }
  // rigth
  if (numberRegex.test(matrix[x][y + 1])) {
    const number = +_getNumberOfNeighbor(matrix, x, y + 1)
    if (!nums.includes(number)) {
      nums.push(number)
    }
  }
  // bottom-left
  if (numberRegex.test(matrix[x + 1][y - 1])) {
    const number = +_getNumberOfNeighbor(matrix, x + 1, y - 1)
    if (!nums.includes(number)) {
      nums.push(number)
    }
  }
  // bottom
  if (numberRegex.test(matrix[x + 1][y])) {
    const number = +_getNumberOfNeighbor(matrix, x + 1, y)
    if (!nums.includes(number)) {
      nums.push(number)
    }
  }
  // bottom-right
  if (numberRegex.test(matrix[x + 1][y + 1])) {
    const number = +_getNumberOfNeighbor(matrix, x + 1, y + 1)
    if (!nums.includes(number)) {
      nums.push(number)
    }
  }

  return nums.length === 2 ? nums[0] * nums[1] : 0
}

function _getNumberOfNeighbor(matrix, x, y) {
  let l = y,
    r = y
  while (numberRegex.test(matrix[x][l])) l--
  while (numberRegex.test(matrix[x][r])) r++
  return matrix[x].slice(l + 1, r)
}
