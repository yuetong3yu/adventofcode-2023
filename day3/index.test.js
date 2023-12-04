import { isNumberAdjacentToSymbol } from './utils.js'

const mock_data = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
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
