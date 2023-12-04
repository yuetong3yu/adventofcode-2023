import { getRecordsArr } from './utils.js'

describe('getRecordsArr', () => {
  test('should return array with shown balls in the array', () => {
    const res = getRecordsArr(
      'Game 12: 7 blue, 3 red, 11 green; 5 red, 1 blue, 8 green; 9 green, 7 blue, 8 red'
    )
    expect(res).toStrictEqual([
      [3, 11, 7],
      [5, 8, 1],
      [8, 9, 7],
    ])
  })

  test('should return 0 if no colour given', () => {
    const res = getRecordsArr(
      'Game 51: 3 green, 1 blue; 1 red; 1 green, 7 blue'
    )
    expect(res).toStrictEqual([
      [0, 3, 1],
      [1, 0, 0],
      [0, 1, 7],
    ])
  })
})
