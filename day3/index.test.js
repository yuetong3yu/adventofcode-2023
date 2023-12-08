import { isNumberAdjacentToSymbol, getNeighboursNumbers } from './utils.js'

const mock_data = [
  '467..114..',
  '...*......',
  '..35...333',
  '......#..*',
  '617*61.333',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$...111',
  '.664*.988*',
]

describe('isNumberAdjacentToSymbol', () => {
  test('467 in mock data should be true', () => {
    expect(isNumberAdjacentToSymbol(mock_data, 0, 0, 3)).toBe(true)
  })

  test('114 in mock data should be false', () => {
    expect(isNumberAdjacentToSymbol(mock_data, 0, 5, 8)).toBe(false)
  })

  test('617 in mock data should be true', () => {
    expect(isNumberAdjacentToSymbol(mock_data, 3, 0, 3)).toBe(true)
  })

  test('58 in mock data should be false', () => {
    expect(isNumberAdjacentToSymbol(mock_data, 5, 7, 9)).toBe(false)
  })
})

describe('getNeighboursNumbers', () => {
  test('should return the correct sum 1', () => {
    expect(getNeighboursNumbers(mock_data, 1, 3)).toBe(16345)
  })

  test('should return the correct sum 2', () => {
    expect(getNeighboursNumbers(mock_data, 3, 9)).toBe(110889)
  })

  test('should return the correct sum 3', () => {
    expect(getNeighboursNumbers(mock_data, 4, 3)).toBe(37637)
  })
})
