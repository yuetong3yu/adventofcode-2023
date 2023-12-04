import { getNumbersAtBothEnds } from './utils.js'

describe('getNumbersAtBothEnds', () => {
  test('should get correct number when only 2 digits in string', () => {
    expect(getNumbersAtBothEnds('aldfk5jl4sadlf')).toBe(54)
  })

  test('should get 0 when only no digit in string', () => {
    expect(getNumbersAtBothEnds('alsdkfjl')).toBe(0)
  })

  test('should get repeated number when only 1 digit in string', () => {
    expect(getNumbersAtBothEnds('asod8ufy')).toBe(88)
  })

  test('should get the numbers at both ends when multiple digits in the string', () => {
    expect(getNumbersAtBothEnds('asd3lk4fj2ad2sl9lk')).toBe(39)
  })

  test('should return correct number when given number is letters', () => {
    expect(getNumbersAtBothEnds('two1nine')).toBe(29)
  })

  test('should get 77 when string is `7b`', () => {
    expect(getNumbersAtBothEnds('7b')).toBe(77)
  })

  test('should get 41 when given string is `41`', () => {
    expect(getNumbersAtBothEnds('41')).toBe(41)
  })

  test('should get 89 when given string is `lrlzz8eightmpspsk3nineseveneightnine`', () => {
    expect(getNumbersAtBothEnds('lrlzz8eightmpspsk3nineseveneightnine')).toBe(
      89
    )
  })

  test('should get 11 when give string is `one`', () => {
    expect(getNumbersAtBothEnds('one')).toBe(11)
  })

  test('should get 83 when given string is `eighthree`', () => {
    expect(getNumbersAtBothEnds('eighthree')).toBe(83)
  })
})
