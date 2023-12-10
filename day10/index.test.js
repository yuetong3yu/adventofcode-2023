import { getStartPoint, getTargetPoint } from './utils.js'

const mock_matrix_1 = ['.....', '.S-7.', '.|.|.', '.L-J.', '.....']
const mock_matrix_2 = ['..F7.', '.FJ|.', 'SJ.L7', '|F--J', 'LJ...']

describe('getStartPoint', () => {
  test('get [1, 1] for matrix 1', () => {
    expect(getStartPoint(mock_matrix_1)).toEqual([1, 1])
  })

  test('get [2, 0] for matrix 2', () => {
    expect(getStartPoint(mock_matrix_2)).toEqual([2, 0])
  })
})

describe('getTargetPoint', () => {
  test('top', () => {
    expect(
      getTargetPoint(mock_matrix_1, getStartPoint(mock_matrix_1), 'top')
    ).toBe('.')
  })

  test('bottom', () => {
    expect(
      getTargetPoint(mock_matrix_1, getStartPoint(mock_matrix_1), 'bottom')
    ).toBe('|')
  })

  test('right', () => {
    expect(
      getTargetPoint(mock_matrix_1, getStartPoint(mock_matrix_1), 'right')
    ).toBe('-')
  })

  test('left', () => {
    expect(
      getTargetPoint(mock_matrix_1, getStartPoint(mock_matrix_1), 'left')
    ).toBe('.')
  })
})
