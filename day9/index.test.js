import { getNextValFromHistory } from './utils.js'

describe('getNextValFromHistory', () => {
  test('input "0 3 6 9 12 15", and should get return value as 18', () => {
    expect(
      getNextValFromHistory('0 3 6 9 12 15'.split(' ').map((i) => +i))
    ).toBe(18)
  })

  test('input "1 3 6 10 15 21", and should get return value as 28', () => {
    expect(
      getNextValFromHistory('1 3 6 10 15 21'.split(' ').map((i) => +i))
    ).toBe(28)
  })

  test('input "10 13 16 21 30 45", and should get return value as 68', () => {
    expect(
      getNextValFromHistory('10 13 16 21 30 45'.split(' ').map((i) => +i))
    ).toBe(68)
  })
})
