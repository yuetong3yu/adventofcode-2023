import { specialSymbolRegex } from '../shared/index.js'

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
