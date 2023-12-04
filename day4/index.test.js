import { getPointsFromCardString } from './utils.js'

describe('getPointsFromCardString', () => {
  test('should get 8 when given `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53`', () => {
    expect(
      getPointsFromCardString(
        'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'
      )
    ).toBe(8)
  })

  test('should get 16 when given `Card 1: 41 48 83 86 17 | 83 86  41 31 17  9 48 53`', () => {
    expect(
      getPointsFromCardString(
        'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'
      )
    ).toBe(16)
  })
})
