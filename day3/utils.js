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
  const nums = []
  // top-left
  if (x - 1 >= 0 && y - 1 >= 0 && numberRegex.test(matrix[x - 1][y - 1])) {
    // get number of neighbor
    const number = +_getNumberOfNeighbor(matrix, x - 1, y - 1)
    const numberEndingPosition = _getEndingPosition(matrix, x - 1, y - 1)
    const numberStartPosition = _getStartPosition(matrix, x - 1, y - 1)
    if (
      !nums.find(
        ([_, _startPosition, _endingPosition]) =>
          _endingPosition == numberEndingPosition &&
          _startPosition == numberStartPosition
      )
    ) {
      nums.push([number, numberStartPosition, numberEndingPosition])
    }
  }
  // top
  if (x - 1 >= 0 && numberRegex.test(matrix[x - 1][y])) {
    const number = +_getNumberOfNeighbor(matrix, x - 1, y)
    const numberEndingPosition = _getEndingPosition(matrix, x - 1, y)
    if (
      !nums.find(
        ([_, _endingPosition]) => _endingPosition == numberEndingPosition
      )
    ) {
      nums.push([number, numberEndingPosition])
    }
  }
  // top-right
  if (
    x - 1 >= 0 &&
    y + 1 < matrix[0].length &&
    numberRegex.test(matrix[x - 1][y + 1])
  ) {
    const number = +_getNumberOfNeighbor(matrix, x - 1, y + 1)
    const numberEndingPosition = _getEndingPosition(matrix, x - 1, y + 1)
    if (
      !nums.find(
        ([_, _endingPosition]) => _endingPosition == numberEndingPosition
      )
    ) {
      nums.push([number, numberEndingPosition])
    }
  }
  // left
  if (y - 1 >= 0 && numberRegex.test(matrix[x][y - 1])) {
    const number = +_getNumberOfNeighbor(matrix, x, y - 1)
    const numberEndingPosition = _getEndingPosition(matrix, x, y - 1)
    if (
      !nums.find(
        ([_, _endingPosition]) => _endingPosition == numberEndingPosition
      )
    ) {
      nums.push([number, numberEndingPosition])
    }
  }
  // right
  if (y + 1 < matrix[0].length && numberRegex.test(matrix[x][y + 1])) {
    const number = +_getNumberOfNeighbor(matrix, x, y + 1)
    const numberEndingPosition = _getEndingPosition(matrix, x, y + 1)
    // console.log('find it!', number, numberEndingPosition, nums)
    if (
      !nums.find(
        ([_, _endingPosition]) => _endingPosition == numberEndingPosition
      )
    ) {
      nums.push([number, numberEndingPosition])
    }
  }
  // bottom-left
  if (
    x + 1 < matrix.length &&
    y - 1 >= 0 &&
    numberRegex.test(matrix[x + 1][y - 1])
  ) {
    const number = +_getNumberOfNeighbor(matrix, x + 1, y - 1)
    const numberEndingPosition = _getEndingPosition(matrix, x + 1, y - 1)
    if (
      !nums.find(
        ([_, _endingPosition]) => _endingPosition == numberEndingPosition
      )
    ) {
      nums.push([number, numberEndingPosition])
    }
  }
  // bottom
  if (x + 1 < matrix.length && numberRegex.test(matrix[x + 1][y])) {
    const number = +_getNumberOfNeighbor(matrix, x + 1, y)
    const numberEndingPosition = _getEndingPosition(matrix, x + 1, y)
    if (
      !nums.find(
        ([_, _endingPosition]) => _endingPosition == numberEndingPosition
      )
    ) {
      nums.push([number, numberEndingPosition])
    }
  }
  // bottom-right
  if (
    x + 1 < matrix.length &&
    y + 1 < matrix[0].length &&
    numberRegex.test(matrix[x + 1][y + 1])
  ) {
    const number = +_getNumberOfNeighbor(matrix, x + 1, y + 1)
    const numberEndingPosition = _getEndingPosition(matrix, x + 1, y + 1)
    if (
      !nums.find(
        ([_, _endingPosition]) => _endingPosition == numberEndingPosition
      )
    ) {
      nums.push([number, numberEndingPosition])
    }
  }

  return nums.length === 2 ? nums[0][0] * nums[1][0] : 0
}

function _getNumberOfNeighbor(matrix, x, y) {
  let l = y,
    r = y
  while (numberRegex.test(matrix[x][l])) l--
  while (numberRegex.test(matrix[x][r])) r++
  return matrix[x].slice(l + 1, r)
}

function _getEndingPosition(matrix, x, y) {
  let p = y
  while (numberRegex.test(matrix[x][p])) p++
  return p
}

function _getStartPosition(matrix, x, y) {
  let p = y
  while (numberRegex.test(matrix[x][p])) p--
  return p
}
