import { getStartPoint } from './utils.js'

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
