import { getNumbersAtBothEnds } from './index'

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
})
